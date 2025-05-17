import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: 'DevShowcase',
    template: '%s | DevShowcase',
  },
  description: 'DevShowcase is your ultimate online developer portfolio—showcasing your projects, skills, and achievements with a modern, user-friendly design.',
  keywords: [
    'DevShowcase',
    'software engineer portfolio',
    'developer portfolio',
    'full-stack developer',
    'React',
    'Next.js',
    'projects',
    'case studies',
    'code showcase'
  ],
  authors: [
    { name: 'Asmat Rahman', url: 'https://asmatrahman.github.io/' }
  ],
  creator: 'Asmat Rahman',
  publisher: 'Asmat Rahman',
  applicationName: 'DevShowcase',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    shortcut: '/DevShowcase/favicon-16x16.png',
    apple: '/DevShowcase/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
