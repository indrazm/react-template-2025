import React from "react";
import * as RawRadioGroup from "@radix-ui/react-radio-group";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const radioGroupVariants = tv({
  base: "grid gap-2",
  variants: {
    orientation: {
      vertical: "grid gap-2",
      horizontal: "flex gap-2",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

const radioGroupItemVariants = tv({
  base: "aspect-square rounded-full border border-zinc-200 text-zinc-900 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
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

const radioGroupIndicatorVariants = tv({
  base: "flex items-center justify-center",
});

const radioGroupIconVariants = tv({
  base: "fill-current text-current",
  variants: {
    size: {
      sm: "h-1.5 w-1.5",
      md: "h-2.5 w-2.5",
      lg: "h-3.5 w-3.5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface RadioGroupProps extends React.ComponentPropsWithoutRef<typeof RawRadioGroup.Root>, VariantProps<typeof radioGroupVariants> {}

interface RadioGroupItemProps extends React.ComponentPropsWithoutRef<typeof RawRadioGroup.Item>, VariantProps<typeof radioGroupItemVariants> {}

const RadioGroup = ({ className, orientation, ...props }: RadioGroupProps) => {
  return <RawRadioGroup.Root className={twMerge(radioGroupVariants({ orientation }), className)} {...props} />;
};

const RadioGroupItem = ({ className, size, ...props }: RadioGroupItemProps) => {
  return (
    <RawRadioGroup.Item className={twMerge(radioGroupItemVariants({ size }), className)} {...props}>
      <RawRadioGroup.Indicator className={radioGroupIndicatorVariants()}>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={radioGroupIconVariants({ size })}
        >
          <circle cx="7.5" cy="7.5" r="3.75" fill="currentColor" />
        </svg>
      </RawRadioGroup.Indicator>
    </RawRadioGroup.Item>
  );
};

export { RadioGroup, RadioGroupItem };
