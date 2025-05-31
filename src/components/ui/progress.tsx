import React from "react";
import * as RawProgress from "@radix-ui/react-progress";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const progressVariants = tv({
  base: "relative w-full overflow-hidden rounded-full bg-zinc-100",
  variants: {
    size: {
      sm: "h-2",
      md: "h-4",
      lg: "h-6",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const progressIndicatorVariants = tv({
  base: "h-full w-full flex-1 bg-zinc-900 transition-all",
  variants: {
    variant: {
      default: "bg-zinc-900",
      primary: "bg-blue-600",
      success: "bg-green-600",
      warning: "bg-yellow-600",
      danger: "bg-red-600",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof RawProgress.Root>,
    VariantProps<typeof progressVariants>,
    VariantProps<typeof progressIndicatorVariants> {
  value?: number;
}

const Progress = ({ className, size, variant, value, ...props }: ProgressProps) => {
  return (
    <RawProgress.Root className={twMerge(progressVariants({ size }), className)} {...props}>
      <RawProgress.Indicator className={progressIndicatorVariants({ variant })} style={{ transform: `translateX(-${100 - (value || 0)}%)` }} />
    </RawProgress.Root>
  );
};

export { Progress };
