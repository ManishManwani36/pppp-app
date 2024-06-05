import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Cable,
  Cctv,
  Cog,
  FileBadge,
  FileSearch2,
  FolderTree,
  Menu,
  MoveHorizontal,
  NotebookPen,
  PackageMinus,
  PackagePlus,
  ScanBarcode,
  Send,
  ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const NavigationLinks = [
  {
    name: "Monitoring",
    icon: Cctv,
  },
  {
    name: "Holding Search",
    icon: FolderTree,
  },
  {
    name: "E-Guide",
    icon: FileSearch2,
  },
  {
    name: "Relics Register",
    icon: ScanBarcode,
  },
  {
    name: "Return",
    icon: NotebookPen,
  },
  {
    name: "Move In",
    icon: PackagePlus,
  },
  {
    name: "Settle In",
    icon: Send,
  },
  {
    name: "Lend",
    icon: MoveHorizontal,
  },
  {
    name: "Move Out",
    icon: PackageMinus,
  },
  {
    name: "Damage Register",
    icon: ShieldAlert,
  },
  {
    name: "Connection",
    icon: Cable,
  },
  {
    name: "Settings",
    icon: Cog,
  },
];

export function SideNavigation() {
  return (
    <div>
      <Sheet>
        <div className="fixed border w-full p-4 flex justify-between bg-background">
          <SheetTrigger>
            <Menu className="size-6" />
          </SheetTrigger>
          UserIcon
        </div>
        <SheetContent side="left">
          <SheetHeader className="text-left">
            <SheetTitle className="ml-4">Menu</SheetTitle>
            <SheetDescription>
              <div className="gap-3">
                {NavigationLinks.map((link) => (
                  <Button
                    key={link.name}
                    className="flex items-center justify-start gap-2 w-full"
                    variant="ghost">
                    <link.icon />
                    <span>{link.name}</span>
                  </Button>
                ))}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
