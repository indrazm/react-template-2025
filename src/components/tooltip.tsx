import React from "react";
import * as RawTooltip from "@radix-ui/react-tooltip";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const tooltipContentVariants = tv({
  base: "animate-in fade-in-0 zoom-in-95 z-50 overflow-hidden rounded-md border text-xs",
  variants: {
    variant: {
      default: "border-zinc-200 bg-zinc-900 text-zinc-50",
      light: "border-zinc-200 bg-white text-zinc-900",
      primary: "border-blue-200 bg-blue-600 text-white",
      success: "border-green-200 bg-green-600 text-white",
      warning: "border-yellow-200 bg-yellow-600 text-white",
      danger: "border-red-200 bg-red-600 text-white",
    },
    size: {
      sm: "px-2 py-1 text-xs",
      md: "px-3 py-1.5 text-xs",
      lg: "px-4 py-2 text-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

const tooltipArrowVariants = tv({
  base: "",
  variants: {
    variant: {
      default: "fill-zinc-900",
      light: "fill-white",
      primary: "fill-blue-600",
      success: "fill-green-600",
      warning: "fill-yellow-600",
      danger: "fill-red-600",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface TooltipContentProps extends React.ComponentPropsWithoutRef<typeof RawTooltip.Content>, VariantProps<typeof tooltipContentVariants> {
  children: React.ReactNode;
  className?: string;
  sideOffset?: number;
}

const TooltipProvider = RawTooltip.Provider;

const Tooltip = ({ children }: { children: React.ReactNode }) => {
  return <RawTooltip.Root>{children}</RawTooltip.Root>;
};

const TooltipTrigger = ({ children }: { children: React.ReactNode }) => {
  return <RawTooltip.Trigger asChild>{children}</RawTooltip.Trigger>;
};

const TooltipPortal = ({ children }: { children: React.ReactNode }) => {
  return <RawTooltip.Portal>{children}</RawTooltip.Portal>;
};

const TooltipContent = ({ children, className, variant, size, sideOffset = 4, ...props }: TooltipContentProps) => {
  return (
    <TooltipPortal>
      <RawTooltip.Content sideOffset={sideOffset} className={twMerge(tooltipContentVariants({ variant, size }), className)} {...props}>
        {children}
        <RawTooltip.Arrow className={tooltipArrowVariants({ variant })} />
      </RawTooltip.Content>
    </TooltipPortal>
  );
};

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
