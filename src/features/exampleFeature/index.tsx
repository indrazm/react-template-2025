import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogTrigger } from "@/components/ui/alertDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const ExamplePage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[300px] space-y-4">
        <h1>Welcome to Stack</h1>
        <Input className="block w-full" placeholder="Input your email" />
        <div className="space-y-1.5">
          <Button className="w-full">Hello!</Button>
          <AlertDialog>
            <AlertDialogTrigger>
              <Button variant="secondary" className="w-full">
                Hello!
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <div>Hey</div>
              <AlertDialogAction>
                <Button>Done!</Button>
              </AlertDialogAction>
              <AlertDialogCancel>
                <Button>Cancel</Button>
              </AlertDialogCancel>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};
