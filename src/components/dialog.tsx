import type React from "react";
import * as RawDialog from "@radix-ui/react-dialog";

const Dialog = ({ children }: { children: React.ReactNode }) => {
  return <RawDialog.Root>{children}</RawDialog.Root>;
};

const DialogTrigger = ({ children }: { children: React.ReactNode }) => {
  return <RawDialog.Trigger asChild>{children}</RawDialog.Trigger>;
};

const DialogPortal = ({ children }: { children: React.ReactNode }) => {
  return <RawDialog.Portal>{children}</RawDialog.Portal>;
};

const DialogOverlay = ({ className }: { className?: string }) => {
  return (
    <RawDialog.Overlay
      className={className || "animate-in fade-in-0 fixed inset-0 bg-black/50"}
    />
  );
};

const DialogContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <DialogPortal>
      <DialogOverlay />
      <RawDialog.Content
        className={
          className ||
          "animate-in fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%] fixed top-1/2 left-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-lg border border-zinc-200 bg-white p-6 shadow-lg duration-200"
        }
      >
        {children}
        <DialogClose className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none">
          <span className="h-4 w-4">✕</span>
          <span className="sr-only">Close</span>
        </DialogClose>
      </RawDialog.Content>
    </DialogPortal>
  );
};

const DialogHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={
        className || "flex flex-col space-y-1.5 text-center sm:text-left"
      }
    >
      {children}
    </div>
  );
};

const DialogFooter = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={
        className ||
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2"
      }
    >
      {children}
    </div>
  );
};

const DialogTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <RawDialog.Title
      className={
        className || "text-lg leading-none font-semibold tracking-tight"
      }
    >
      {children}
    </RawDialog.Title>
  );
};

const DialogDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <RawDialog.Description className={className || "text-sm text-zinc-500"}>
      {children}
    </RawDialog.Description>
  );
};

const DialogClose = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return <RawDialog.Close className={className}>{children}</RawDialog.Close>;
};

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
};
