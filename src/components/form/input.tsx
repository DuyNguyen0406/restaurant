import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type InputProps = React.ComponentProps<"input"> & {
  __invalid?: true;
  __required?: true;
  containerClassName?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ __invalid, __required, containerClassName, className, ...props }, ref) => {
    return (
      <div
        className={twMerge(
          "relative flex h-12 items-center",
          containerClassName
        )}
      >
        <input
          ref={ref}
          {...props}
          aria-required={__required}
          aria-invalid={__invalid}
          className={twMerge(
            "block h-full w-full border border-gray-600 px-4 outline-0 transition-all focus:ring text-white focus:ring-brown-500 appearance-none",
            className
          )}
        />
      </div>
    );
  }
);
