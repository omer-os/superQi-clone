import { ChevronRight } from "lucide-react";

export default function TransactionsHeader() {
  return (
    <div className="flex justify-between items-center">
      <div className="text-sm text-muted-foreground">Transactions</div>

      <div className="flex gap-2">
        <p className="text-xs text-muted-foreground">View All</p>
        <ChevronRight className="size-3" />
      </div>
    </div>
  );
}
