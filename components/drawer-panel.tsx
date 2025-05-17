"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
  DrawerDescription,
} from "@/components/ui/drawer";
import { data } from "@/lib/data";
import { getTabLabel } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface DrawerPanelProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function DrawerPanel({ activeTab, onTabChange }: DrawerPanelProps) {
  const tabIds = Object.keys(data);
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 px-3 py-2 bg-primary/10 rounded-md"
          >
            <Menu className="w-5 h-5" />
          </button>
        </DrawerTrigger>

        <DrawerContent className="p-4">
          <DrawerHeader>
            <DrawerTitle className="sr-only">Sections</DrawerTitle>
            <DrawerDescription className="sr-only">Sections</DrawerDescription>
          </DrawerHeader>

          <div className="flex flex-col space-y-2">
            {tabIds.map((tabId) => (
              <button
                key={tabId}
                onClick={() => {
                  onTabChange(tabId);
                  setOpen(false);
                }}
                className={cn(
                  "text-left px-3 py-2 rounded-md transition-colors",
                  activeTab === tabId
                    ? "bg-primary text-white"
                    : "hover:bg-muted/50"
                )}
              >
                {getTabLabel(tabId)}
              </button>
            ))}
          </div>

          <DrawerClose asChild>
            <button className="absolute top-4 right-4">✕</button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
