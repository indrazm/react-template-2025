import React from "react";
import * as RawAlertDialog from "@radix-ui/react-alert-dialog";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const alertDialogOverlayVariants = tv({
  base: "animate-in fade-in-0 fixed inset-0 bg-black/50",
});

const alertDialogContentVariants = tv({
  base: "animate-in fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded bg-white shadow-lg duration-200",
  variants: {
    size: {
      sm: "max-w-sm p-4",
      md: "max-w-md p-6",
      lg: "max-w-lg p-8",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const alertDialogTitleVariants = tv({
  base: "font-bold",
  variants: {
    size: {
      sm: "text-base",
      md: "text-lg",
      lg: "text-xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const alertDialogDescriptionVariants = tv({
  base: "text-gray-600",
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface AlertDialogContentProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

interface AlertDialogTitleProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

interface AlertDialogDescriptionProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const AlertDialog = ({ children }: { children: React.ReactNode }) => {
  return <RawAlertDialog.Root>{children}</RawAlertDialog.Root>;
};

const AlertDialogTrigger = ({ children }: { children: React.ReactNode }) => {
  return <RawAlertDialog.Trigger asChild>{children}</RawAlertDialog.Trigger>;
};

const AlertDialogPortal = ({ children }: { children: React.ReactNode }) => {
  return <RawAlertDialog.Portal>{children}</RawAlertDialog.Portal>;
};

const AlertDialogOverlay = ({ className }: { className?: string }) => {
  return (
    <RawAlertDialog.Overlay
      className={twMerge(alertDialogOverlayVariants(), className)}
    />
  );
};

const AlertDialogContent = ({
  children,
  className,
  size,
}: AlertDialogContentProps) => {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <RawAlertDialog.Content
        className={twMerge(alertDialogContentVariants({ size }), className)}
      >
        {children}
      </RawAlertDialog.Content>
    </AlertDialogPortal>
  );
};

const AlertDialogTitle = ({
  children,
  className,
  size,
}: AlertDialogTitleProps) => {
  return (
    <RawAlertDialog.Title
      className={twMerge(alertDialogTitleVariants({ size }), className)}
    >
      {children}
    </RawAlertDialog.Title>
  );
};

const AlertDialogDescription = ({
  children,
  className,
  size,
}: AlertDialogDescriptionProps) => {
  return (
    <RawAlertDialog.Description
      className={twMerge(alertDialogDescriptionVariants({ size }), className)}
    >
      {children}
    </RawAlertDialog.Description>
  );
};

const AlertDialogCancel = ({ children }: { children: React.ReactNode }) => {
  return <RawAlertDialog.Cancel asChild>{children}</RawAlertDialog.Cancel>;
};

// Action button
const AlertDialogAction = ({ children }: { children: React.ReactNode }) => {
  return <RawAlertDialog.Action asChild>{children}</RawAlertDialog.Action>;
};

// Export the components as a namespace
export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
};
