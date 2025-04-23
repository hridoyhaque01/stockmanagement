import { logout, saveAuthData } from "@/store/modules/auth/slice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function useAuthCheck() {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const localAuth = localStorage?.getItem("auth_details");
    if (localAuth) {
      const auth = JSON.parse(localAuth);
      if (auth?.token) {
        dispatch(saveAuthData(auth));
      } else {
        dispatch(logout());
      }
    }
    setAuthChecked(true);
  }, [dispatch, setAuthChecked]);
  return authChecked;
}
