import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GeistSans } from "geist/font/sans"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "Brooke Milberg",
  description: "What am I?"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="flex-col h-full w-screen overflow-x-hidden bg-white dark:bg-black">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div>
            <Navbar />
            <div className="pt-28">
            <main className="h-full w-screen">{children}</main>
            </div>
            <Footer/>
            <Analytics />
            <SpeedInsights />
            </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
