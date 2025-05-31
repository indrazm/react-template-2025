import React from "react";
import * as RawPopover from "@radix-ui/react-popover";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const popoverContentVariants = tv({
  base: "animate-in fade-in-0 zoom-in-95 z-50 rounded-md border bg-white text-zinc-950 shadow-md outline-none",
  variants: {
    size: {
      sm: "w-56 p-3",
      md: "w-72 p-4",
      lg: "w-80 p-6",
    },
    variant: {
      default: "border-zinc-200 bg-white text-zinc-950",
      dark: "border-zinc-700 bg-zinc-900 text-zinc-50",
      primary: "border-blue-200 bg-blue-50 text-blue-950",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});

const popoverArrowVariants = tv({
  base: "",
  variants: {
    variant: {
      default: "fill-white",
      dark: "fill-zinc-900",
      primary: "fill-blue-50",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface PopoverContentProps
  extends React.ComponentPropsWithoutRef<typeof RawPopover.Content>,
    VariantProps<typeof popoverContentVariants> {
  children: React.ReactNode;
  className?: string;
  align?: "start" | "center" | "end";
  sideOffset?: number;
}

const Popover = ({ children }: { children: React.ReactNode }) => {
  return <RawPopover.Root>{children}</RawPopover.Root>;
};

const PopoverTrigger = ({ children }: { children: React.ReactNode }) => {
  return <RawPopover.Trigger asChild>{children}</RawPopover.Trigger>;
};

const PopoverAnchor = RawPopover.Anchor;

const PopoverPortal = ({ children }: { children: React.ReactNode }) => {
  return <RawPopover.Portal>{children}</RawPopover.Portal>;
};

const PopoverContent = ({
  children,
  className,
  size,
  variant,
  align = "center",
  sideOffset = 4,
  ...props
}: PopoverContentProps) => {
  return (
    <PopoverPortal>
      <RawPopover.Content
        align={align}
        sideOffset={sideOffset}
        className={twMerge(
          popoverContentVariants({ size, variant }),
          className,
        )}
        {...props}
      >
        {children}
        <RawPopover.Arrow className={popoverArrowVariants({ variant })} />
      </RawPopover.Content>
    </PopoverPortal>
  );
};

const PopoverClose = ({ children }: { children: React.ReactNode }) => {
  return <RawPopover.Close asChild>{children}</RawPopover.Close>;
};

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor, PopoverClose };
