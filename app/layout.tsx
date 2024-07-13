import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { NextLayout, NextProviders } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hotel 사이트",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextProviders>
          <NextLayout>{children}</NextLayout>
        </NextProviders>
      </body>
    </html>
  )
}
