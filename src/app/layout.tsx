"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a");
      if (
        link &&
        link.href.startsWith("http") &&
        !link.href.includes(window.location.host)
      ) {
        e.preventDefault();
        router.push(
          `/external-link-handler?url=${encodeURIComponent(link.href)}`
        );
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [router]);

  return (
    <html lang="en">
      <head />
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
