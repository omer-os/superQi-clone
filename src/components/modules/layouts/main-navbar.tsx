import Link from "next/link";
import { Button } from "../../ui/button";
import { Bell, Plus } from "lucide-react";

export default function MainNavbar() {
  return (
    <div className="bg-secondary flex justify-between items-center h-12 px-4">
      <Button variant="ghost">Personal</Button>

      <div className="flex gap-4">
        <Button variant="ghost" size="icon">
          <Plus className="size-3" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="size-3" />
        </Button>
      </div>
    </div>
  );
}
