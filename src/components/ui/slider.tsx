import React from "react";
import * as RawSlider from "@radix-ui/react-slider";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const sliderVariants = tv({
  base: "relative flex w-full touch-none items-center select-none",
  variants: {
    size: {
      sm: "h-4",
      md: "h-5",
      lg: "h-6",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const sliderTrackVariants = tv({
  base: "relative w-full grow overflow-hidden rounded-full bg-zinc-100",
  variants: {
    size: {
      sm: "h-1",
      md: "h-2",
      lg: "h-3",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const sliderRangeVariants = tv({
  base: "absolute h-full bg-zinc-900",
});

const sliderThumbVariants = tv({
  base: "block rounded-full border-2 border-zinc-900 bg-white ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  variants: {
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface SliderProps extends React.ComponentPropsWithoutRef<typeof RawSlider.Root>, VariantProps<typeof sliderVariants> {}

const Slider = ({ className, size, ...props }: SliderProps) => {
  return (
    <RawSlider.Root className={twMerge(sliderVariants({ size }), className)} {...props}>
      <RawSlider.Track className={sliderTrackVariants({ size })}>
        <RawSlider.Range className={sliderRangeVariants()} />
      </RawSlider.Track>
      <RawSlider.Thumb className={sliderThumbVariants({ size })} />
    </RawSlider.Root>
  );
};

export { Slider };
