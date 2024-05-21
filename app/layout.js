import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GeistSans } from "geist/font/sans"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Brooke Milberg",
  description: "What am I?"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="flex-col h-full w-screen overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-white w-full dark:bg-zinc-900">
            <Navbar />
            <div className="pt-28 dark:bg-zinc-900">
            <main className="h-full w-screen">{children}</main>
            </div>
            <Footer/>
            </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
