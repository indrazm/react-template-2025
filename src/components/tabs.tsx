import type React from "react";
import * as RawTabs from "@radix-ui/react-tabs";

const Tabs = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<typeof RawTabs.Root>) => {
  return (
    <RawTabs.Root className={className} {...props}>
      {children}
    </RawTabs.Root>
  );
};

const TabsList = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<typeof RawTabs.List>) => {
  return (
    <RawTabs.List className={className || "inline-flex h-10 items-center justify-center rounded-md bg-zinc-100 p-1 text-zinc-500"} {...props}>
      {children}
    </RawTabs.List>
  );
};

const TabsTrigger = ({
  children,
  className,
  value,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  value: string;
} & React.ComponentPropsWithoutRef<typeof RawTabs.Trigger>) => {
  return (
    <RawTabs.Trigger
      className={
        className ||
        "inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium whitespace-nowrap ring-offset-white transition-all focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-zinc-950 data-[state=active]:shadow-sm"
      }
      value={value}
      {...props}
    >
      {children}
    </RawTabs.Trigger>
  );
};

const TabsContent = ({
  children,
  className,
  value,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  value: string;
} & React.ComponentPropsWithoutRef<typeof RawTabs.Content>) => {
  return (
    <RawTabs.Content
      className={
        className ||
        "mt-2 ring-offset-white focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 focus-visible:outline-none"
      }
      value={value}
      {...props}
    >
      {children}
    </RawTabs.Content>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
