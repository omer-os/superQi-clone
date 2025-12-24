import { ChevronDown, EyeIcon } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <div className="p-2 bg-accent ">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <div className="text-xs text-muted-foreground flex items-center gap-1">
            Account Balance
            <EyeIcon className="size-3" />
          </div>
        </div>

        <div className="flex gap-2">
          <div className="rounded-full py-1 px-2 flex text-primary-foreground items-center gap-1 bg-primary">
            7710277365 <ChevronDown className="size-3" />
          </div>
        </div>
      </div>

      <div className="flex gap-1 items-center">
        <div className="text-lg font-bold">10,000</div>
        <div className="text-xs text-muted-foreground">IQD</div>
      </div>
    </div>
  );
}
