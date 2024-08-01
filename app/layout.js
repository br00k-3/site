import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Crt } from "@/components/crt"
export const metadata = {
  title: "Brooke Milberg",
  description: "A sound tech with a passion, based in Portland OR",
  openGraph: {
    title: "Brooke Milberg",
    description:
      "A sound tech with a passion",
    type: "website",
    images: "/images/icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brooke Milberg",
    description:
      "A sound tech with a passion",
    images: ["/images/icon.png"],
  },
};

const geist_sans = localFont({
  src: './geist_sans.woff2',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist_sans',
})

import localFont from 'next/font/local'
const vcr = localFont({
  src: './VCR.ttf',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-vcr',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist_sans.variable} ${vcr.variable}`}>
      <head>
      <meta name="google-site-verification" content="58uATzaMs1d9CTrPqgAoD_6VZC-uCGxaA8AK3qD7XEc" />
      </head>
      <body className="flex-col h-screen w-screen overflow-x-hidden light:bg-white dark:bg-black retro:bg-black light:text-black dark:text-white retro:text-cyan-500 retro:font-semibold">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Crt>
          <div className="h-full pt-20">
            <Navbar />
            <div className="h-full pt-8">
              <main className="h-full w-screen">
                <div className="h-full mx-0 sm:mx-4 md:mx-16 xl:mx-48 px-2 sm:px-8">
                  {children}
                  <Footer />
                </div>
              </main>
            </div>
            <Analytics />
            <SpeedInsights />
          </div>
          </Crt>
        </ThemeProvider>
      </body>
    </html>
  );
}
