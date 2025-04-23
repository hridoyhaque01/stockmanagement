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

function getUnixValue(dateString: string): number | undefined {
  if (!dateString) return;
  const date = new Date(dateString);
  const unixTimestamp = date.getTime() / 1000;
  return unixTimestamp;
}

function getPageTitle(pathname: string, routes: RoutePathConfig) {
  const route = Object?.values(routes)?.find(
    (route) =>
      route?.path === pathname || pathname?.includes(route.routePath ?? "N/A")
  );
  return route ? route?.name : null;
}

const getTableIndex = ({
  currentPage = 0,
  rowsPerPage = 0,
  index = 0,
}: {
  currentPage: number;
  rowsPerPage: number;
  index: number;
}) => {
  let value: string | number = "0";
  if (currentPage && rowsPerPage && index !== undefined) {
    value =
      currentPage === 1 && index + 1 < 10
        ? "0" + (rowsPerPage * (currentPage - 1) + index + 1)
        : rowsPerPage * (currentPage - 1) + index + 1;
  }

  return value;
};

export {
  checkEmailValidity,
  formattedPhoneNumber,
  getPageTitle,
  getTableIndex,
  getUnixValue,
  handleNumber,
};
