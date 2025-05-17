"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Projects", href: "/projects" },
  { name: "Articles", href: "/articles" },
  { name: "Bookmarks", href: "/bookmarks" },
  { name: "Education", href: "/education" },
  { name: "Hobbies", href: "/hobbies" },
  { name: "Shop Now", href: "/shop" },
]

export default function Navigation() {
  const [activeTab, setActiveTab] = useState("Projects")

  return (
    <div className="relative overflow-hidden rounded-full bg-muted/50 p-1 backdrop-blur-sm">
      <div className="flex justify-between">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveTab(item.name)}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
              activeTab === item.name ? "text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {activeTab === item.name && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-background rounded-full"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
