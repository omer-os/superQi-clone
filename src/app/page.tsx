"use client";

import { motion } from "motion/react";
import HomeActionsCard from "../components/modules/home/cards/actions/card";
import MiniAppsCard from "../components/modules/home/cards/mini-apps/card";
import HomeTransactionsWrapper from "../components/modules/home/cards/transactions/wrapper";
import MainAppbar from "../components/modules/layouts/main-appbar";
import MainNavbar from "../components/modules/layouts/main-navbar";

export default function HomePage() {
  return (
    <motion.div
      key="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex-1 flex flex-col"
    >
      <MainNavbar />
      <div className="p-4 flex flex-col gap-4 flex-1">
        <HomeActionsCard />
        <MiniAppsCard />
        <HomeTransactionsWrapper />
      </div>
      <MainAppbar />
    </motion.div>
  );
}
