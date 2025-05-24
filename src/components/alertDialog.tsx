import * as RawAlertDialog from "@radix-ui/react-alert-dialog";

const AlertDialog = ({ children }: { children: React.ReactNode }) => {
  return <RawAlertDialog.Root>{children}</RawAlertDialog.Root>;
};

const AlertDialogTrigger = ({ children }: { children: React.ReactNode }) => {
  return <RawAlertDialog.Trigger asChild>{children}</RawAlertDialog.Trigger>;
};

const AlertDialogPortal = ({ children }: { children: React.ReactNode }) => {
  return <RawAlertDialog.Portal>{children}</RawAlertDialog.Portal>;
};

const AlertDialogOverlay = () => {
  return <RawAlertDialog.Overlay className="fixed inset-0 bg-black/50" />;
};

const AlertDialogContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <RawAlertDialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded bg-white p-6 shadow-lg">
        {children}
      </RawAlertDialog.Content>
    </AlertDialogPortal>
  );
};

// Title component
const AlertDialogTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <RawAlertDialog.Title className="text-lg font-bold">
      {children}
    </RawAlertDialog.Title>
  );
};

const AlertDialogDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <RawAlertDialog.Description className="text-sm text-gray-600">
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
