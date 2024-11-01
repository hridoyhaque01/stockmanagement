import React, { forwardRef } from "react";

const Input = forwardRef<
  HTMLInputElement,
  {
    label?: string;
    labelClass?: string;
    wrapper?: string;
    className?: string;
    type?: string;
    icon?: React.ReactNode;
    isLoading?: boolean;
    [key: string]: any;
  }
>(
  (
    {
      label = "",
      labelClass = "",
      wrapper = "",
      className = "",
      type = "text",
      icon = null,
      isLoading = false,
      ...rest
    },
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={`flex flex-col gap-2 ${wrapper}`}>
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
          <div className="relative w-full">
            <input
              type={type}
              className={`input relative ${className} ${icon ? "pl-10" : ""}`}
              ref={ref}
              {...rest}
            />

            {icon && (
              <div className="w-5 h-5 flex items-center justify-center rounded-full overflow-hidden absolute top-1/2 -translate-y-1/2 left-4 z-50">
                <img
                  src={icon}
                  className="w-full h-full object-contain"
                  alt=""
                />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

export default Input;
