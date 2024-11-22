import { apiSlice } from "../api/apiSlice";
import { saveAuthData } from "./slice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userProfile: builder.query({
      query: () => ({
        url: "/admins/all",
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/users/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(saveAuthData(data?.data));
        } catch (error) {
          console.error("Failed to login:", error);
        }
      },
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/users/register",
        method: "POST",
        body: data,
      }),
    }),
    verifyOtp: builder.mutation({
      query: ({ data = null }) => ({
        url: "/users/verify-otp",
        method: "POST",
        body: data,
      }),
      async onQueryStarted({ type }, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (type != "forgot-password") {
            dispatch(saveAuthData(data?.data));
          }
        } catch (error) {
          console.error("Failed to verify otp:", error);
        }
      },
    }),
    resendOtp: builder.mutation({
      query: (email: string = "") => ({
        url: `/users/resend-otp/${email}`,
        method: "GET",
      }),
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/users/update-profile",
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(saveAuthData(data?.data));
        } catch (error) {
          console.error("Failed to update:", error);
        }
      },
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: "/users/change-password",
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useUserProfileQuery,
  useResendOtpMutation,
  useVerifyOtpMutation,
  useChangePasswordMutation,
  useUpdateProfileMutation,
} = authApi;
