import { formattedPhoneNumber } from "@/common/constants";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

function NumberInput({
  defaultValue = "",
  max = -1,
  length = -1,
  classes = "",
  setter,
  onChange,
  label = "",
  wrapper = "",
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
  setter?: (value: string) => void;
  onChange?: (event: React.ChangeEvent, name: string, value: string) => void;
  label?: string;
  wrapper?: string;
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
    <div className={cn("flex flex-col gap-2 h-full", wrapper)}>
      {label && (
        <label className={cn("label", labelClass)} htmlFor="">
          {label}
        </label>
      )}
      {isLoading ? (
        <div
          className={`relative h-[54px] w-full rounded-lg bg-white-200 animate-pulse`}
        ></div>
      ) : (
        <div className={cn("h-full relative w-full", inputWrapper)}>
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
