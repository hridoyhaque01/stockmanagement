import { formattedPhoneNumber } from "@/common/constants";
import React, { useEffect, useState } from "react";

function NumberInput({
  defaultValue = "",
  max = -1,
  length = -1,
  classes = "",
  setter,
  onChange,
  label = "",
  labelClass = "",
  type = "number",
  isLoading = false,
  inputWrapper = "",
  children,
  ...rest
}: {
  defaultValue?: string;
  max?: number;
  length?: number;
  classes?: string;
  setter?: (value: string) => string;
  onChange?: (event: React.ChangeEvent, name: string, value: string) => void;
  label?: string;
  labelClass?: string;
  type?: string;
  isLoading?: boolean;
  inputWrapper?: string;
  children?: React.ReactNode;
  [key: string]: any;
}) {
  const [value, setValue] = useState("");

  function isNumber(value: string) {
    return /^-?\d+(\.\d+)?$/.test(value);
  }

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue: string = "";
    const form = event.target as HTMLInputElement;
    let name = form.name;

    if (type === "phone") {
      inputValue = formattedPhoneNumber(event);
    } else {
      inputValue = form.value.replace(/[^0-9]/g, "");
    }

    if (length > 0) {
      inputValue = inputValue.substring(0, length);
    }

    const amount = Number(inputValue || "0");
    const maxNumber = Number(max);

    if ((maxNumber !== -1 && amount <= maxNumber) || maxNumber === -1) {
      setValue(inputValue);
      if (setter) setter(inputValue);
      if (onChange) onChange(event, name, inputValue);
    }
  };

  useEffect(() => {
    if (defaultValue) {
      if (isNumber(defaultValue) && type !== "phone") {
        setValue(defaultValue);
      } else {
        setValue(defaultValue);
      }
    }
  }, [defaultValue]);

  return (
    <div className="flex flex-col gap-2 h-full">
      {label && (
        <label className={`label ${labelClass}`} htmlFor="">
          {label}
        </label>
      )}
      {isLoading ? (
        <div
          className={`relative h-[54px] w-full rounded-lg bg-white-200 animate-pulse`}
        ></div>
      ) : (
        <div className={`h-full relative ${inputWrapper}`}>
          <input
            type="text"
            className={`input h-full ${classes}`}
            value={value}
            onChange={handleInput}
            {...rest}
          />
          {children}
        </div>
      )}
    </div>
  );
}

export default NumberInput;
