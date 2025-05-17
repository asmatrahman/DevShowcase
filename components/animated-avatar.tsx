"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { profileData } from "@/lib/data"

export default function AnimatedAvatar() {
  const avatarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const avatar = avatarRef.current
    if (!avatar) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = avatar.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      // Calculate rotation based on mouse position
      const maxRotation = 10
      const rotateX = (y / rect.height) * maxRotation * -1
      const rotateY = (x / rect.width) * maxRotation

      avatar.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const handleMouseLeave = () => {
      avatar.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
      avatar.style.transition = "transform 0.5s ease"
    }

    const handleMouseEnter = () => {
      avatar.style.transition = "transform 0.1s ease"
    }

    avatar.addEventListener("mousemove", handleMouseMove)
    avatar.addEventListener("mouseleave", handleMouseLeave)
    avatar.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      avatar.removeEventListener("mousemove", handleMouseMove)
      avatar.removeEventListener("mouseleave", handleMouseLeave)
      avatar.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [])

  return (
    <div
      ref={avatarRef}
      className="relative h-32 w-32 rounded-full overflow-hidden border-2 border-primary/20 transition-all duration-300"
    >
      <Image
        src={profileData.avatar}
        alt="Profile avatar"
        width={128}
        height={128}
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}
