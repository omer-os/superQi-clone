"use client";

import { motion } from "motion/react";
import SharedNav from "../../components/shared/shared-nav";

export default function SettingsPage() {
  return (
    <motion.div
      key="settings"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col gap-4"
    >
      <SharedNav title="Settings" bg="bg-yellow-500" />
    </motion.div>
  );
}
