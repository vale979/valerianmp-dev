import "./globals.css"
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: {
    default: "Data Engineer Portfolio",
    template: "%s | Data Engineer Portfolio",
  },
  description:
    "Professional portfolio showcasing data engineering expertise, projects, and insights on big data technologies, ETL pipelines, and analytics solutions.",
  keywords: ["data engineer", "data engineering", "big data", "ETL", "data pipelines", "data analytics", "portfolio"],
  authors: [{ name: "Data Engineer" }],
  creator: "Data Engineer",
  publisher: "Data Engineer Portfolio",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://data-engineer-portfolio.com",
    title: "Data Engineer Portfolio",
    description:
      "Professional portfolio showcasing data engineering expertise, projects, and insights on big data technologies, ETL pipelines, and analytics solutions.",
    siteName: "Data Engineer Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Data Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Engineer Portfolio",
    description:
      "Professional portfolio showcasing data engineering expertise, projects, and insights on big data technologies, ETL pipelines, and analytics solutions.",
    images: ["/og-image.jpg"],
    creator: "@dataengineer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
