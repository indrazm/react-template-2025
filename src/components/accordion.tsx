import React from "react";
import * as RawAccordion from "@radix-ui/react-accordion";

const Accordion = React.forwardRef<
  React.ElementRef<typeof RawAccordion.Root>,
  React.ComponentPropsWithoutRef<typeof RawAccordion.Root> & {
    children: React.ReactNode;
  }
>(({ children, ...props }, ref) => {
  return (
    <RawAccordion.Root asChild={false} ref={ref} {...props}>
      {children}
    </RawAccordion.Root>
  );
});

Accordion.displayName = "Accordion";

const AccordionItem = ({
  children,
  className,
  value,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  value: string;
} & React.ComponentPropsWithoutRef<typeof RawAccordion.Item>) => {
  return (
    <RawAccordion.Item className={className || "border-b border-zinc-200"} value={value} {...props}>
      {children}
    </RawAccordion.Item>
  );
};

const AccordionTrigger = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<typeof RawAccordion.Trigger>) => {
  return (
    <RawAccordion.Header className="flex">
      <RawAccordion.Trigger
        className={
          className ||
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180"
        }
        {...props}
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 shrink-0 transition-transform duration-200"
        >
          <path d="m4.5 6 3 3 3-3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </RawAccordion.Trigger>
    </RawAccordion.Header>
  );
};

const AccordionContent = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<typeof RawAccordion.Content>) => {
  return (
    <RawAccordion.Content
      className={
        className || "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all"
      }
      {...props}
    >
      <div className="pt-0 pb-4">{children}</div>
    </RawAccordion.Content>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
