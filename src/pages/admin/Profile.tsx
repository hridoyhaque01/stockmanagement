import {
  validateUserData,
  validateUserPassword,
} from "@/common/constants/validation";
import { UserPasswordForm, UserProfileForm } from "@/common/types";
import Input from "@/components/shared/Input";
import NumberInput from "@/components/shared/NumberInput";
import Password from "@/components/shared/Password";
import ProfileUploader from "@/components/shared/ProfileUploader";
import RequestLoader from "@/components/shared/RequestLoader";
import { Button } from "@/components/ui/button";
import useToastify from "@/hooks/useToastify";
import { RootState } from "@/store";
import {
  useChangePasswordMutation,
  useUpdateProfileMutation,
} from "@/store/modules/auth/api";
import { useState } from "react";
import { useSelector } from "react-redux";

function Profile() {
  const { auth } = useSelector((state: RootState) => state.auth);
  const [file, setFile] = useState<File | null>(null);
  const { errorNotify, infoNotify } = useToastify();
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const [changePassword, { isLoading: passwordChanging }] =
    useChangePasswordMutation();

  const handleProfileUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const username = form.username.value;
    const address = form.address.value;
    const phone = form.phone.value;
    
    const data: UserProfileForm = { username, address, phone };
    console.log(data);
    const { error } = validateUserData(data);
    if (error) return errorNotify(error);
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    if (file) formData.append("file", file);
    updateProfile(formData)
      .unwrap()
      .then((res) => {
        infoNotify(res?.message);
      })
      .catch((error) => {
        errorNotify(error?.data?.message);
      });
  };

  const handlePasswordUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const currentPassword = form.currentPassword.value;
    const newPassword = form.newPassword.value;
    const confirmPassword = form.confirmPassword.value;
    const data: UserPasswordForm = {
      currentPassword,
      newPassword,
      confirmPassword,
    };
    const { error } = validateUserPassword(data);
    if (error) return errorNotify(error);
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));

    changePassword(formData)
      .unwrap()
      .then((res) => {
        infoNotify(res?.message);
        form.reset();
      })
      .catch((error) => {
        errorNotify(error?.data?.message);
      });
  };

  return (
    <section className="p-4 sm:p-6 overflow-auto">
      <div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* profile form  */}
          <form action="" onSubmit={handleProfileUpdate}>
            <div className="p-6 rounded-3xl bg-white flex flex-col gap-6">
              <h1 className="text-2xl text-black-900 font-medium">Profile</h1>
              <ProfileUploader
                avatar={auth?.profile?.imageUrl}
                wrapperClass="mx-auto"
                setter={setFile}
              />

              <div className="grid xl:grid-cols-2 gap-6">
                <Input
                  label="Email"
                  type="email"
                  placeholder="Email Address here"
                  name="email"
                  readOnly
                  defaultValue={auth?.email}
                />
                <Input
                  label="Name"
                  placeholder="Fullname here"
                  name="username"
                  defaultValue={auth?.username}
                  required
                />
                <Input
                  label="Address"
                  placeholder="Adress here"
                  name="address"
                  defaultValue={auth?.profile?.address}
                />
                <NumberInput
                  label="Phone"
                  placeholder="Phone number here"
                  name="phone"
                  defaultValue={auth?.profile?.phone}
                />
              </div>
              <div className="mt-4">
                <Button type="submit" className="px-10 h-12 py-4 text-base">
                  Save
                </Button>
              </div>
            </div>
          </form>

          {/* password form  */}
          <form action="" onSubmit={handlePasswordUpdate}>
            <div className="p-6 rounded-3xl bg-white flex flex-col gap-6">
              <h1 className="text-2xl text-black-900 font-medium">
                Change Password
              </h1>

              {/* form inputs  */}
              <div className="grid xl:grid-cols-2 gap-6">
                {/* current password  */}
                <Password
                  label="Current Password"
                  id="currentPassword"
                  name="currentPassword"
                  placeholder="Current password here"
                ></Password>
                {/* new password  */}

                <Password
                  label="New Password"
                  id="newPassword"
                  name="newPassword"
                  placeholder="New password here"
                ></Password>
                {/* confirm password  */}
                <Password
                  label="Confirm Password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm password here"
                ></Password>
              </div>
              {/* submit button   */}

              <div className="mt-4">
                <Button type="submit" className="px-6 h-12 py-4 text-base">
                  Change Password
                </Button>
              </div>
            </div>
          </form>
          {/* <AdminTable></AdminTable> */}
        </div>
        {(isLoading || passwordChanging) && <RequestLoader />}
      </div>
    </section>
  );
}

export default Profile;
