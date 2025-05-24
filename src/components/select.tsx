import * as RawSelect from "@radix-ui/react-select";

const Select = ({ children }: { children: React.ReactNode }) => {
  return <RawSelect.Root>{children}</RawSelect.Root>;
};

const SelectTrigger = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <RawSelect.Trigger className={className}>
      {children}
      <SelectIcon />
    </RawSelect.Trigger>
  );
};

const SelectIcon = () => {
  return <RawSelect.Icon>▼</RawSelect.Icon>;
};

const SelectValue = () => {
  return <RawSelect.Value />;
};

// Portal component
const SelectPortal = ({ children }: { children: React.ReactNode }) => {
  return <RawSelect.Portal>{children}</RawSelect.Portal>;
};

// Content component
const SelectContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <SelectPortal>
      <RawSelect.Content className={className}>
        <SelectScrollUpButton />
        <RawSelect.Viewport>{children}</RawSelect.Viewport>
        <SelectScrollDownButton />
        <SelectArrow />
      </RawSelect.Content>
    </SelectPortal>
  );
};

const SelectScrollUpButton = () => {
  return <RawSelect.ScrollUpButton>Scroll Up</RawSelect.ScrollUpButton>;
};

const SelectScrollDownButton = () => {
  return <RawSelect.ScrollDownButton>Scroll Down</RawSelect.ScrollDownButton>;
};

const SelectArrow = () => {
  return <RawSelect.Arrow />;
};

const SelectItem = ({
  children,
  value,
  className,
}: {
  children: React.ReactNode;
  value: string;
  className?: string;
}) => {
  return (
    <RawSelect.Item value={value} className={className}>
      <SelectItemText>{children}</SelectItemText>
      <SelectItemIndicator />
    </RawSelect.Item>
  );
};

const SelectItemText = ({ children }: { children: React.ReactNode }) => {
  return <RawSelect.ItemText>{children}</RawSelect.ItemText>;
};

const SelectItemIndicator = () => {
  return <RawSelect.ItemIndicator>✓</RawSelect.ItemIndicator>;
};

const SelectGroup = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <RawSelect.Group className={className}>{children}</RawSelect.Group>;
};

const SelectLabel = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <RawSelect.Label className={className}>{children}</RawSelect.Label>;
};

const SelectSeparator = ({ className }: { className?: string }) => {
  return <RawSelect.Separator className={className} />;
};

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectContent,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
};
