"use client";

import { AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="bg-muted h-dvh overflow-auto">
      <main className="pb-16">
        <AnimatePresence mode="wait" initial={false}>
          <div key={pathname}>{children}</div>
        </AnimatePresence>
      </main>
    </div>
  );
}
