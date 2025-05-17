"use client";
import TabsPanel from "@/components/tabs-panel";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { ExternalLink} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { data, profileData } from "@/lib/data";
import DrawerPanel from "@/components/drawer-panel";
import { useState } from "react";

export default function Home() {
  const tabIds = Object.keys(data);
  const [activeTab, setActiveTab] = useState(tabIds[0]);
  return (
    <main className="h-screen bg-background">
      <div className="container flex flex-row justify-between md:justify-end top-4 right-4 px-4 py-4">
        <DrawerPanel activeTab={activeTab} onTabChange={setActiveTab} />
        <ThemeToggle />
      </div>
      <div className="w-full max-w-6xl mx-auto relative px-4 py-8">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left md:gap-4 mb-8">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/20 mb-4">
            <Image
              src={profileData.avatar}
              alt="Profile avatar"
              width={128}
              height={128}
              className="object-cover"
              priority
            />
          </div>
          <div>
            <div>
              <h1 className="text-4xl font-bold mb-2">{profileData.name}</h1>
              <p className="text-xl text-muted-foreground mb-8">
                {profileData.title}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                className="bg-primary/90 hover:bg-primary text-foreground transition-colors hover:scale-105"
              >
                <Link
                  href={profileData.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Resume
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>

              <div className="flex gap-4">
                {profileData.socialLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-muted/50 p-2 rounded-full hover:bg-muted transition-colors hover:scale-105 hover:text-primary hover:shadow-sm hover:shadow-primary/50"
                  >
                    <item.icon className="w-6 h-6" />
                    <span className="sr-only">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <TabsPanel activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </main>
  );
}
