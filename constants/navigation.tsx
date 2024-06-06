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
    desc: "The images and details of different types of objects will be shown here in CCTV format.",
  },

  {
    name: "E-Guide",
    icon: FileSearch2,
    route: "/e-guide",
    desc: "Here is some basic information on how to use the app to help museum administrators get started.",
  },
  {
    name: "Relics Register",
    icon: ScanBarcode,
    route: "/relics-register",
    desc: "Here is the basic classification and detailed registration information of each artifact.",
  },
  {
    name: "Return",
    icon: NotebookPen,
    route: "/return",
    desc: "If some artifacts need to be loaned out or will be returned soon, it will be shown here.",
  },
  {
    name: "Move In",
    icon: PackagePlus,
    route: "/move-in",
    desc: "Show the details of artifacts moved in the same day, including the time.",
  },
  {
    name: "Lend",
    icon: MoveHorizontal,
    route: "/lend",
    desc: "Basic information of artifacts lent",
  },
  {
    name: "Move Out",
    icon: PackageMinus,
    route: "/move-out",
    desc: "Displays detailed information about the artifacts that have been moved during the day, including the time.",
  },
  {
    name: "Damage Register",
    icon: ShieldAlert,
    route: "/damage-register",
    desc: "Records details if an artifact is damaged or in need of repair.",
  },
  {
    name: "Connection",
    icon: Cable,
    route: "/connection",
    desc: "Here you can manage some of the museum administrator's devices and check the connection status (including battery level, power on time, etc.).",
  },
  {
    name: "Settings",
    icon: Cog,
    route: "/settings",
    desc: "Here you can see the setting information of some apps.",
  },
];
