import React from "react";
import { motion } from "framer-motion";

// Foto diambil dari public/rikoformal.jpg
const profileImage = "/rikoformal.jpg";

export default function Portfolio() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto p-6 flex items-center justify-between"
      >
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight">M. Riko Ardiansyah</h1>
          <p className="text-sm opacity-80">Computer Engineering • Web Developer • Data Science Enthusiast</p>
        </div>
      </motion.header>
      <main className="max-w-5xl mx-auto p-6">
        <h2 className="text-xl font-bold">Portfolio is ready!</h2>
      </main>
    </div>
  );
}
