import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

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
      </head>
      <body className="bg-white dark:bg-black min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
