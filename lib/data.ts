import type { ProfileData, TabItem } from "@/lib/types";
import { Github, Globe, Instagram, Linkedin } from "lucide-react";

type TabData = {
  [key: string]: TabItem[];
};

export const profileData: ProfileData = {
  name: "Asmat Rahman",
  title: "Software Engineer",
  avatar: "https://avatars.githubusercontent.com/u/76680826?v=4",
  resumeLink: "#",
  socialLinks: [
    { href: "https://asmatrahman.github.io", icon: Globe, label: "Website" },
    { href: "https://github.com/asmatrahman", icon: Github, label: "GitHub" },
    {
      href: "https://www.linkedin.com/in/asmatrahman",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/asmatrahman_",
      icon: Instagram,
      label: "Instagram",
    },
  ],
};

export const data: TabData = {
  projects: [
    {
      title: "Milmapure",
      description:
        "Milmapure E-Commerce is a modern online shopping platform that leverages a robust tech stack to deliver seamless user experiences. It supports a multi-vendor architecture including master distributors, distributors, salesmen, and retailers, enabling comprehensive supply chain management. Built with React, Redux, Next.js, MongoDB, Node.js, Express, and ShadCN UI, it offers dynamic product listings, secure transactions, and efficient state management.",
      href: "https://milmapure.com/",
      icon: "https://milmapure.com/favicon.png",
    },
    {
      title: "CloudInvoice",
      description:
        "CloudInvoice simplifies your invoicing and tax management with a user-friendly interface and powerful automation. Easily generate, track, and manage invoices with real-time insights.",
      href: "https://cloudinvoice.onrender.com/",
      icon: "https://cloudinvoice.onrender.com/CloudInvoice.png",
    },
    {
      title: "Akhbaar Alerts: News App",
      description:
        "Experience the easiest way to receive real-time news alerts tailored to your interests. Stay Updated, stay connected, and never miss a moment of what's happening around the world.",
      href: "https://akhbaaralerts-landing-page.netlify.app/",
      icon: "https://akhbaaralerts-landing-page.netlify.app/logo.png",
    },
    {
      title: "Protijogi: Quiz Website",
      description:
        "Quiz Website is a modern platform offering free educational resources, career counseling, employment news, and quiz competitions. With an admin panel for managing users and content",
      href: "https://protijogi.com/",
      icon: "https://protijogi.com/p.png",
    },
    {
      title: "Food Rush: Food Delivery Website",
      description:
        "d a comprehensive food delivery platform with an integrated admin panel, facilitating efficient management of orders and user interactions",
      href: "https://foodrush-ar.netlify.app/",
      icon: "/devshowcase/images/icon.png",
    },
  ],
  articles: [
    {
      title: "Example Article 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      href: "#",
      icon: "/devshowcase/images/icon.png",
    },
  ],
  bookmarks: [
    {
      title: "Next.js Learn",
      description:
        "Interactive Next.js course that teaches you how to build full-stack web applications.",
      href: "https://nextjs.org/learn",
      icon: "/devshowcase/images/icon.png",
    },
    {
      title: "Tailwind CSS Documentation",
      description:
        "Comprehensive guide to Tailwind CSS utility classes and configuration options.",
      href: "https://tailwindcss.com/docs",
      icon: "/devshowcase/images/icon.png",
    },
    {
      title: "Flexbox Labs",
      description: "A visual tool for experimenting with CSS flexbox layouts.",
      href: "https://flexboxlabs.netlify.app/",
      icon: "/devshowcase/images/icon.png",
    },
    {
      title: "Fontsource",
      description:
        "Download and self-host 1500+ open-source fonts in neatly bundled NPM packages.",
      href: "https://fontsource.org",
      icon: "/devshowcase/images/icon.png",
    },
    {
      title: "CallToInspiration",
      description:
        "Small UI details and microinteractions to spark design ideas.",
      href: "https://calltoinspiration.com",
      icon: "/devshowcase/images/icon.png",
    },
    {
      title: "Best Free Font Libraries & Type Inspiration Sites",
      description:
        "Curated list of the top free font libraries and typography inspiration sites.",
      href: "https://www.toools.design/font-library-and-inspiration",
      icon: "/devshowcase/images/icon.png",
    },
    {
      title: "Fresh Background Gradients",
      description:
        "A free collection of 180 beautiful linear CSS gradients, plus PNG, Sketch & Photoshop files.",
      href: "https://webgradients.com",
      icon: "/devshowcase/images/icon.png",
    },
    {
      title: "CSS Layout Generator",
      description:
        "Generate CSS Grid and Flexbox layouts with an easy visual interface.",
      href: "https://layout.bradwoods.io",
      icon: "/devshowcase/images/icon.png",
    },
    {
      title: "Storyset",
      description:
        "Customize, animate, and download free vector illustrations via an online editor.",
      href: "https://storyset.com",
      icon: "/devshowcase/images/icon.png",
    },
    {
      title: "unDraw Illustrations",
      description:
        "Open-source illustrations for any idea—completely free and customizable.",
      href: "https://undraw.co",
      icon: "/devshowcase/images/icon.png",
    },
    {
      title: "BG.IBELICK",
      description:
        "Modern, ready-to-use background snippets crafted with Tailwind CSS and Vanilla CSS.",
      href: "https://bg.ibelick.com",
      icon: "/devshowcase/images/icon.png",
    },
    {
      title: "Squoosh",
      description:
        "In-browser image optimizer that compresses and compares codecs—no uploads needed.",
      href: "https://squoosh.app",
      icon: "/devshowcase/images/icon.png",
    },
    {
      title: "Shots",
      description: "Create amazing device mockups for showcasing your designs.",
      href: "https://shots.so",
      icon: "/devshowcase/images/icon.png",
    },
    {
      title: "SVG Logo Library",
      description:
        "A curated library of SVG logos with links to each brand’s official site.",
      href: "https://svgl.app",
      icon: "/devshowcase/images/icon.png",
    },
    {
      title: "Landingfolio",
      description:
        "The best landing page design inspiration, templates, and components gallery.",
      href: "https://www.landingfolio.com",
      icon: "/devshowcase/images/icon.png",
    },
    {
      title: "Shapedivider",
      description:
        "Free tool to generate and export beautiful SVG shape dividers for web layouts.",
      href: "https://www.shapedivider.app",
      icon: "/devshowcase/images/icon.png",
    },
  ],
  education: [
    {
      title: "Brainware University",
      description:
        "Bachelor of Technology in Computer Science & Engineering (CSE)",
      href: "https://www.brainwareuniversity.ac.in/",
      icon: "/devshowcase/images/Brainware_University.png",
    },
    {
      title: "Naimouza Sub Hania High Madrasah",
      description: "Class XII",
      href: "https://www.nmshm.org/",
      icon: "/devshowcase/images/nms.png",
    },
    {
      title: "Nai Mouza High School",
      description: "Class X",
      href: "#",
      icon: "/devshowcase/images/nmh.png",
    },
  ],
  hobbies: [
    {
      title: "Photography Basics",
      description:
        "Learn the fundamentals of photography, from composition to lighting.",
      href: "#",
      icon: "/devshowcase/images/icon.png",
    },
    {
      title: "Home Gardening Guide",
      description:
        "Tips and tricks for growing your own vegetables and herbs at home.",
      href: "#",
      icon: "/devshowcase/images/icon.png",
    },
    {
      title: "DIY Electronics Projects",
      description:
        "Simple electronics projects you can build at home with basic components.",
      href: "#",
      icon: "/devshowcase/images/icon.png",
    },
  ],
  shop: [
    // {
    //   title: "Developer Sticker Pack",
    //   description:
    //     "A collection of high-quality stickers featuring programming languages and frameworks.",
    //   href: "https://example.com/stickers",
    //   icon: "/devshowcase/images/icon.png",
    // }
  ],
};
