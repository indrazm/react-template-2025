import React from "react";
import * as RawCheckbox from "@radix-ui/react-checkbox";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const checkboxVariants = tv({
  base: "peer h-4 w-4 shrink-0 rounded-sm border border-zinc-200 ring-offset-white focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-zinc-900 data-[state=checked]:text-zinc-50",
  variants: {
    size: {
      sm: "h-3 w-3",
      md: "h-4 w-4",
      lg: "h-5 w-5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const checkboxIndicatorVariants = tv({
  base: "flex items-center justify-center text-current",
});

const checkboxIconVariants = tv({
  base: "stroke-linecap-round stroke-linejoin-round fill-none stroke-current stroke-[1.5]",
  variants: {
    size: {
      sm: "h-3 w-3",
      md: "h-4 w-4",
      lg: "h-5 w-5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof RawCheckbox.Root>,
    VariantProps<typeof checkboxVariants> {}

const Checkbox = ({ className, size, ...props }: CheckboxProps) => {
  return (
    <RawCheckbox.Root
      className={twMerge(checkboxVariants({ size }), className)}
      {...props}
    >
      <RawCheckbox.Indicator className={checkboxIndicatorVariants()}>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={checkboxIconVariants({ size })}
        >
          <path
            d="m11.5 3.5-6 6-2.5-2.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </RawCheckbox.Indicator>
    </RawCheckbox.Root>
  );
};

export { Checkbox };
