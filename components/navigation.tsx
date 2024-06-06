"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSideBar } from "@/hooks/use-sidebar";
import { NavigationLinks } from "@/constants/navigation";

export function SideNavigation() {
  const { isOpen, onOpen, onClose } = useSideBar();
  return (
    <div>
      <Sheet open={isOpen} onOpenChange={onOpen}>
        <div className="fixed border w-full p-4 flex justify-between bg-background">
          <SheetTrigger>
            <Menu className="size-6" />
          </SheetTrigger>
          <User className="size-6" />
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
                    variant="ghost"
                    onClick={onClose}
                    asChild>
                    <Link href={link.route}>
                      <link.icon />
                      {link.name}
                    </Link>
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
