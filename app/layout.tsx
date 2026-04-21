import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Employee Dashboard",
  description: "Day 5 project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/employees">Employees</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}
