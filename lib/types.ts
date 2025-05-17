import { LucideIcon } from "lucide-react"

export interface TabItem {
  title: string
  description: string
  href: string
  icon?: string
}

export interface ProfileData {
  name: string
  title: string
  avatar: string
  resumeLink: string
  socialLinks: {
    href: string
    icon: LucideIcon
    label: string
  }[]
}