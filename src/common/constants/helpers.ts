import React from "react";
import { RoutePathConfig } from "../types";

const checkEmailValidity = (email: string) => {
  if (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  } else {
    return false;
  }
};

const handleNumber = (
  event: React.ChangeEvent,
  setter: (value: string) => string
) => {
  const form = event.target as HTMLFormElement;
  const validatedValue = form.value.replace(/[^0-9]/g, "");
  setter(validatedValue);
};

const formattedPhoneNumber = (event: React.ChangeEvent) => {
  const form = event.target as HTMLFormElement;
  const value = form.value;
  let phoneNumber = value.replace(/\D/g, "");
  let formattedNumber = "";

  for (let i = 0; i < phoneNumber.length; i++) {
    if (i === 3 || i === 6) {
      formattedNumber += "-";
    }
    formattedNumber += phoneNumber[i];
  }

  return formattedNumber;
};

function getPageTitle(pathname: string, routes: RoutePathConfig) {
  const route = Object?.values(routes)?.find(
    (route) =>
      route?.path === pathname || pathname?.includes(route.routePath ?? "")
  );
  return route ? route?.name : null;
}

export { checkEmailValidity, formattedPhoneNumber, getPageTitle, handleNumber };
