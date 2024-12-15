"use client";

import React, { Suspense } from "react";
import localFont from "next/font/local";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Loading from "./loading";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = React.useMemo(() => new QueryClient(), []);

  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <React.Fragment>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <Suspense fallback={<Loading />} />
            <ClerkProvider
              appearance={{
                baseTheme: dark,
              }}
            >
              <div className="w-full h-full">
                <SignedOut />
                <SignedIn />
                {children}
              </div>
            </ClerkProvider>
          </QueryClientProvider>
        </React.Fragment>
      </body>
    </html>
  );
}
