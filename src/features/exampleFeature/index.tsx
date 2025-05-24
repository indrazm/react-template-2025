import { Button } from "@/components/button";
import { Input } from "@/components/input";

export const ExamplePage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[300px] space-y-4">
        <h1>Welcome to Stack</h1>
        <Input className="block w-full" placeholder="Input your email" />
        <div className="space-y-1.5">
          <Button className="w-full">Hello!</Button>
          <Button variant="secondary" className="w-full">
            Hello!
          </Button>
        </div>
      </div>
    </div>
  );
};
