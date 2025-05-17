"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  icon: string
  url?: string
  isNew?: boolean
}

export default function ProjectCard({ title, description, icon, url, isNew }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-lg bg-card text-card-foreground"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={url || "#"} className="block">
        <div className="flex items-start gap-4 p-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-md flex-shrink-0">
            <Image src={icon || "/placeholder.svg"} alt={title} width={64} height={64} className="object-cover" />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold">{title}</h3>
              {isNew && (
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">New</span>
              )}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
            {url && <p className="mt-2 text-sm text-primary">{url}</p>}
          </div>

          <motion.div
            animate={{ x: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="self-center"
          >
            <ExternalLink className="h-5 w-5 text-muted-foreground" />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}
