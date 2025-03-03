import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "bootstrap/dist/css/bootstrap.min.css";


import "styles/globals.css";

export const metadata: Metadata = {
  title: "Next JS SaaS Starter Template",
  description: "Next JS SaaS Starter Template",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Appleberry&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white min-h-screen font-sans">
        <ThemeProvider attribute="class" defaultTheme="white" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}