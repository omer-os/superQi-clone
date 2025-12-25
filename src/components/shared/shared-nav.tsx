"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface SharedNavProps {
  title: string;
  children?: React.ReactNode;
  bg?: string;
}

export default function SharedNav({ title, children, bg }: SharedNavProps) {
  const router = useRouter();

  return (
    <div className={cn("flex p-2 justify-between items-center", bg)}>
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
          aria-label="Go back"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="text-lg font-bold">{title}</div>
      </div>
      {children && <div>{children}</div>}
    </div>
  );
}
