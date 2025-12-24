"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";

interface SharedNavProps {
  title: string;
  children?: React.ReactNode;
}

export default function SharedNav({ title, children }: SharedNavProps) {
  const router = useRouter();

  return (
    <div className="flex p-2 bg-background justify-between items-center">
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
