import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import React from "react";

type Transaction = {
  id: string;
  type: "incoming" | "outgoing";
  date: string;
  title: string;
  amount: string;
};

const transactions: Transaction[] = [
  {
    id: "1",
    type: "outgoing",
    date: "19/12/2025 23:14",
    title: "Self Transfer",
    amount: "10,000 IQD",
  },
  {
    id: "2",
    type: "incoming",
    date: "18/12/2025 15:30",
    title: "Salary Payment",
    amount: "500,000 IQD",
  },
  {
    id: "3",
    type: "outgoing",
    date: "17/12/2025 10:20",
    title: "Grocery Store",
    amount: "25,000 IQD",
  },
  {
    id: "4",
    type: "outgoing",
    date: "16/12/2025 14:45",
    title: "Electricity Bill",
    amount: "15,000 IQD",
  },
  {
    id: "5",
    type: "incoming",
    date: "15/12/2025 09:15",
    title: "Refund",
    amount: "8,500 IQD",
  },
];

export default function TransactionsContent() {
  return (
    <div className="flex bg-background p-4 rounded-lg flex-col gap-2">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex gap-2">
          <div className="rounded-full flex items-center justify-center bg-accent size-10">
            {transaction.type === "incoming" ? (
              <ArrowUpRight className="size-4" />
            ) : (
              <ArrowDownLeft className="size-4" />
            )}
          </div>

          <div className="flex flex-col gap-1">
            <div className="text-xs text-muted-foreground">
              {transaction.date}
            </div>
            <div className="text-sm font-medium">{transaction.title}</div>
            <div className="text-xs text-muted-foreground">
              {transaction.amount}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
