import type React from "react";
import * as RawDropdownMenu from "@radix-ui/react-dropdown-menu";

const DropdownMenu = ({ children }: { children: React.ReactNode }) => {
  return <RawDropdownMenu.Root>{children}</RawDropdownMenu.Root>;
};

const DropdownMenuTrigger = ({ children }: { children: React.ReactNode }) => {
  return <RawDropdownMenu.Trigger asChild>{children}</RawDropdownMenu.Trigger>;
};

const DropdownMenuPortal = ({ children }: { children: React.ReactNode }) => {
  return <RawDropdownMenu.Portal>{children}</RawDropdownMenu.Portal>;
};

const DropdownMenuContent = ({
  children,
  className,
  sideOffset = 4,
}: {
  children: React.ReactNode;
  className?: string;
  sideOffset?: number;
}) => {
  return (
    <DropdownMenuPortal>
      <RawDropdownMenu.Content
        className={
          className ||
          "animate-in fade-in-0 zoom-in-95 z-50 min-w-32 overflow-hidden rounded-md border border-zinc-200 bg-white p-1 text-zinc-950 shadow-md"
        }
        sideOffset={sideOffset}
      >
        {children}
      </RawDropdownMenu.Content>
    </DropdownMenuPortal>
  );
};

const DropdownMenuItem = ({
  children,
  className,
  inset,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  inset?: boolean;
} & React.ComponentPropsWithoutRef<typeof RawDropdownMenu.Item>) => {
  return (
    <RawDropdownMenu.Item
      className={
        className ||
        `relative flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${inset ? "pl-8" : ""}`
      }
      {...props}
    >
      {children}
    </RawDropdownMenu.Item>
  );
};

const DropdownMenuCheckboxItem = ({
  children,
  className,
  checked,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  checked?: boolean;
} & React.ComponentPropsWithoutRef<typeof RawDropdownMenu.CheckboxItem>) => {
  return (
    <RawDropdownMenu.CheckboxItem
      className={
        className ||
        "relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm transition-colors outline-none select-none focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
      }
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <RawDropdownMenu.ItemIndicator>
          <span className="h-4 w-4">✓</span>
        </RawDropdownMenu.ItemIndicator>
      </span>
      {children}
    </RawDropdownMenu.CheckboxItem>
  );
};

const DropdownMenuRadioItem = ({
  children,
  className,
  value,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  value: string;
} & React.ComponentPropsWithoutRef<typeof RawDropdownMenu.RadioItem>) => {
  return (
    <RawDropdownMenu.RadioItem
      className={
        className ||
        "relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm transition-colors outline-none select-none focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
      }
      value={value}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <RawDropdownMenu.ItemIndicator>
          <span className="h-2 w-2 rounded-full bg-current fill-current">●</span>
        </RawDropdownMenu.ItemIndicator>
      </span>
      {children}
    </RawDropdownMenu.RadioItem>
  );
};

const DropdownMenuLabel = ({
  children,
  className,
  inset,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  inset?: boolean;
} & React.ComponentPropsWithoutRef<typeof RawDropdownMenu.Label>) => {
  return (
    <RawDropdownMenu.Label className={className || `px-2 py-1.5 text-sm font-semibold ${inset ? "pl-8" : ""}`} {...props}>
      {children}
    </RawDropdownMenu.Label>
  );
};

const DropdownMenuSeparator = ({
  className,
  ...props
}: {
  className?: string;
} & React.ComponentPropsWithoutRef<typeof RawDropdownMenu.Separator>) => {
  return <RawDropdownMenu.Separator className={className || "-mx-1 my-1 h-px bg-zinc-100"} {...props} />;
};

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={className || "ml-auto text-xs tracking-widest opacity-60"} {...props} />;
};

const DropdownMenuGroup = RawDropdownMenu.Group;
const DropdownMenuRadioGroup = RawDropdownMenu.RadioGroup;
const DropdownMenuSub = RawDropdownMenu.Sub;
const DropdownMenuSubTrigger = RawDropdownMenu.SubTrigger;
const DropdownMenuSubContent = RawDropdownMenu.SubContent;

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};
