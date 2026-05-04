import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GDPR Autopilot – Automate GDPR Compliance for SaaS",
  description: "Automatically generate privacy policies, cookie banners, data deletion workflows, and audit trails for your SaaS product."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4510c4f9-e24d-4b2b-8e1c-9d8d0c43a099"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
