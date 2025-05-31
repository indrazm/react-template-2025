import type React from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "cursor-pointer border border-b-4 font-medium shadow-sm transition-all duration-75 hover:opacity-90 disabled:pointer-events-none disabled:shadow-none",
  variants: {
    variant: {
      primary: [
        "shadow-sm inset-shadow-sm shadow-indigo-400 inset-shadow-indigo-400 active:border-b-indigo-600 active:inset-shadow-indigo-600",
        "border-indigo-700 bg-indigo-600",
        "text-white",
      ],
      secondary: ["border-zinc-200 bg-zinc-50 text-zinc-900 active:border-b-zinc-100"],
    },
    size: {
      sm: "rounded px-1.5 py-0.5 text-xs",
      md: "rounded-lg px-3 py-2 text-sm",
      lg: "rounded-xl px-4 py-2.5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface ButtonProps extends React.ComponentPropsWithoutRef<"button">, VariantProps<typeof buttonVariants> {}

export const Button = (props: ButtonProps) => {
  return <button {...props} className={twMerge(buttonVariants({ ...props }), props.className)} />;
};
