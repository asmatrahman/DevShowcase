import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const tabLabels: Record<string, string> = {
  projects: "Projects",
  articles: "Articles",
  bookmarks: "Bookmarks",
  education: "Education",
  hobbies: "Hobbies",
  shop: "Shop Now",
}

export function getTabLabel(tabId: string): string {
  return tabLabels[tabId] || tabId.charAt(0).toUpperCase() + tabId.slice(1)
}
