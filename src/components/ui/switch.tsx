import type React from "react";
import * as RawSwitch from "@radix-ui/react-switch";

const Switch = ({
  className,
  ...props
}: {
  className?: string;
} & React.ComponentPropsWithoutRef<typeof RawSwitch.Root>) => {
  return (
    <RawSwitch.Root
      className={
        className ||
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-zinc-900 data-[state=unchecked]:bg-zinc-200"
      }
      {...props}
    >
      <RawSwitch.Thumb
        className={
          "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        }
      />
    </RawSwitch.Root>
  );
};

export { Switch };
