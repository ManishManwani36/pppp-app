import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="text-center flex flex-col gap-4">
      <h1 className="text-4xl font-bold">Welcome to PPPP</h1>
      <p className="text-lg text-gray-500">
        This app wil help track the museum items
      </p>
      <Button>This is a button</Button>
    </div>
  );
}
