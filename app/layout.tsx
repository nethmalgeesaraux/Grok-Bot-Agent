import { AuthProvider } from "@/components/session-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";

export const metadata: Metadata = {
  title: "Agent-Nova",
  description:
    "AgentNova AI is a next-generation AI agent platform powered by intelligent automation. Connect AI agents to tools, automate complex tasks, browse the web, and interact with cloud desktops through a powerful AI workspace.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const figtree = Figtree({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ margin: 0, padding: 0 }}
        className={figtree.className}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}