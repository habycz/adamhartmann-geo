import NavGlass from "@/components/NavGlass";
import GeometricBackground from "@/components/GeometricBackground";
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import LenisProvider from "@/components/providers/LenisProvider";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="en" className="dark">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body role="document" className="bg-[#030303] text-white antialiased">
        <LenisProvider>
          <div className="lenis-wrapper">
            <GeometricBackground />
            <NavGlass />
            <main className="relative z-10">{children}</main>
            <Toaster position="top-right" />
            {/* Global toast mount & a11y live region */}
            <div id="toast-root" className="fixed right-4 bottom-4 z-[9999] pointer-events-none" />
            <div id="a11y-status" aria-live="polite" aria-atomic="true" className="sr-only" />
          </div>
        </LenisProvider>
      </body>
    </html>
  )
}
