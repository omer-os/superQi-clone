import React from "react";
import TransactionsHeader from "./header";
import TransactionsContent from "./content";

export default function HomeTransactionsWrapper() {
  return (
    <div className="flex flex-col gap-2">
      <TransactionsHeader />
      <TransactionsContent />
    </div>
  );
}
