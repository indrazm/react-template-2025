import type React from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const inputVariants = tv({
  base: "rounded-md border border-b-4 border-zinc-200 font-medium shadow-sm shadow-zinc-100 transition-all duration-200 placeholder:font-normal placeholder:text-zinc-300 focus-within:ring-2 focus-within:ring-indigo-400 focus-within:outline-none disabled:pointer-events-none disabled:opacity-50",
  variants: {
    size: {
      sm: "rounded px-2 py-1 text-xs",
      md: "text rounded-lg px-3 py-2",
      lg: "rounded-xl px-4 py-2.5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface InputProps
  extends Omit<React.ComponentPropsWithoutRef<"input">, "size">,
    VariantProps<typeof inputVariants> {}

export const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className={twMerge(inputVariants({ ...props }), props.className)}
      size={undefined}
    />
  );
};
