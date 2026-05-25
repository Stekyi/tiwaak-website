import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://tiwaak.com"),
  title: "TiwaAK — Trading & Business Consultancy",
  description:
    "TiwaAK is a professional trading and business consultancy firm. We bridge global markets and deliver strategic solutions that drive growth.",
  openGraph: {
    title: "TiwaAK — Where Trade Meets Strategy",
    description:
      "Professional trading facilitation and business consultancy. Empowering businesses to trade smarter and grow faster.",
    url: "https://tiwaak.com",
    siteName: "TiwaAK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TiwaAK — Where Trade Meets Strategy",
    description: "Professional trading and business consultancy services.",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
