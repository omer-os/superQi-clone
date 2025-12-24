import React from "react";
import { Home, CreditCard, Grid3x3, Settings } from "lucide-react";
import Link from "next/link";

type NavItem = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
};

const navItems: NavItem[] = [
  {
    id: "home",
    label: "Home",
    icon: Home,
    href: "/",
  },
  {
    id: "cards",
    label: "Cards",
    icon: CreditCard,
    href: "/cards",
  },
  {
    id: "apps",
    label: "Apps",
    icon: Grid3x3,
    href: "/apps",
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export default function MainAppbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              href={item.href}
              className="flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors hover:bg-accent rounded-lg active:bg-accent/80"
            >
              <Icon className="size-5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
