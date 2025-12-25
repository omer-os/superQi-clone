import { Button } from "../../../../ui/button";
import {
  Send,
  ArrowDownLeft,
  PlusCircle,
  MinusCircle,
  type LucideIcon,
} from "lucide-react";
import React from "react";

type ActionItem = {
  label: string;
  icon: LucideIcon;
};

const actions: ActionItem[] = [
  { label: "Send", icon: Send },
  { label: "Request", icon: ArrowDownLeft },
  { label: "Cash in", icon: PlusCircle },
  { label: "Cash out", icon: MinusCircle },
];

export default function Actions() {
  return (
    <div className="p-2">
      <div className="flex space-x-2">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Button
              key={action.label}
              variant="ghost"
              className="flex flex-1 h-15 px-4 flex-col"
            >
              <Icon className="size-3" />
              <span className="text-xs">{action.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
