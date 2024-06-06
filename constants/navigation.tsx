import {
  Cable,
  Cctv,
  Cog,
  FileSearch2,
  FolderTree,
  MoveHorizontal,
  NotebookPen,
  PackageMinus,
  PackagePlus,
  ScanBarcode,
  Send,
  ShieldAlert,
} from "lucide-react";

export const NavigationLinks = [
  {
    name: "Monitoring",
    icon: Cctv,
    route: "/monitoring",
  },
  {
    name: "Holding Search",
    icon: FolderTree,
    route: "/holding-search",
  },
  {
    name: "E-Guide",
    icon: FileSearch2,
    route: "/e-guide",
  },
  {
    name: "Relics Register",
    icon: ScanBarcode,
    route: "/relics-register",
  },
  {
    name: "Return",
    icon: NotebookPen,
    route: "/return",
  },
  {
    name: "Move In",
    icon: PackagePlus,
    route: "/move-in",
  },
  {
    name: "Settle In",
    icon: Send,
    route: "/settle-in",
  },
  {
    name: "Lend",
    icon: MoveHorizontal,
    route: "/lend",
  },
  {
    name: "Move Out",
    icon: PackageMinus,
    route: "/move-out",
  },
  {
    name: "Damage Register",
    icon: ShieldAlert,
    route: "/damage-register",
  },
  {
    name: "Connection",
    icon: Cable,
    route: "/connection",
  },
  {
    name: "Settings",
    icon: Cog,
    route: "/settings",
  },
];
