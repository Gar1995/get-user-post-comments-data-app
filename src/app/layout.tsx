import type { Metadata } from "next";
import Sidebar from "./components/sidebar/Sidebar";
import "@/src/app/ui/globals.css";

export const metadata: Metadata = {
  title: "User and Post Data Management Application",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          <aside>
            <Sidebar/>
          </aside>
          <main>{children}</main>
      </body>
    </html>
  );
}