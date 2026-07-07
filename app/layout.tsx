import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";


const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Jetstream",
  description: 'A workspace for your team, powered by Stream Chat and Clerk.',
  icons: {
    icon: "/icons/logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>

      <ClerkProvider
      appearance={{
        elements: {
          socialButtonsBlockButtonText: "text-white",
          socialButtonsBlockButton: "bg-gray-700",
        },
        layout: {
          logoImageUrl: '/icons/logo.svg'
        },
        variables: {
          colorText: '#fff',
          colorPrimary: '#0E78F9',
          colorBackground: '#1c1f2e',
          colorInputBackground: '#252a41',
          colorInputText: '#fff'
        }
      }}>
        <body className={`${inter.className} bg-dark-2`}>
          {children}
        </body>
      </ClerkProvider>
      
    </html>
  );
}

