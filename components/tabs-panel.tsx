"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { data } from "@/lib/data";
import { getTabLabel } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface TabsPanelProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function TabsPanel({ activeTab, onTabChange }: TabsPanelProps) {
  const tabIds = Object.keys(data);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="hidden md:block overflow-x-auto scrollbar-hide">
        <div className="flex min-w-max border-b">
          {tabIds.map((tabId) => (
            <button
              key={tabId}
              onClick={() => onTabChange(tabId)}
              className={cn(
                "px-4 py-2 text-sm font-medium transitin-colors whitespacoe-nowrap",
                activeTab === tabId
                  ? "border-b-2 border-primary text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              {getTabLabel(tabId)}
            </button>
          ))}
        </div>
        <motion.div
          className="absolute bottom-0 h-0.5 bg-background"
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{
            width: `${100 / tabIds.length}%`,
            left: `${(tabIds.indexOf(activeTab) * 100) / tabIds.length}%`,
          }}
        />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mt-6 space-y-4"
        >
          <h2 className="text-lg font-semibold text-foreground">
            {getTabLabel(activeTab)}
          </h2>

          {data[activeTab]?.length > 0
            ? data[activeTab].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex group items-start gap-4 p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
                >
                  {item.icon && (
                    <div className="flex-shrink-0 w-12 h-12 rounded-md overflow-hidden">
                      <Image
                        src={item.icon ? item.icon : "/images/icon.png"}
                        alt={item.title}
                        width={48}
                        height={48}
                        className={`object-cover ${
                          item.icon === "/images/icon.png" ? "dark:invert" : ""
                        }`}
                        priority
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center gap-2">
                      <h3 className="font-medium text-foreground truncate">
                        {item.title}
                      </h3>
                      <ExternalLink className="group-hover:text-primary h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                    <p className="text-xs text-primary mt-1">{item.href}</p>
                  </div>
                </Link>
              ))
            : data[activeTab]?.length === 0 && (
                <div className="flex flex-col items-center justify-center h-64">
                  <Image
                    src="/images/not-found.svg"
                    alt="No results found"
                    width={400}
                    height={400}
                    className="object-cover"
                    priority
                  />
                </div>
              )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
