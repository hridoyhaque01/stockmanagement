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
          console.error("Error resending OTP:", error);
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
            dispatch(saveAuthData(data));
          }
        } catch (error) {
          console.error("Error resending OTP:", error);
        }
      },
    }),
    resendOtp: builder.mutation({
      query: (email: string = "") => ({
        url: `/users/resend-otp/${email}`,
        method: "GET",
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
} = authApi;
