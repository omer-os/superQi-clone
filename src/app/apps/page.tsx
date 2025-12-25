"use client";

import React from "react";
import { motion } from "motion/react";
import SharedNav from "../../components/shared/shared-nav";

export default function Page() {
  return (
    <motion.div
      key="apps"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col gap-4"
    >
      <SharedNav title="Apps" bg="bg-background" />
    </motion.div>
  );
}
