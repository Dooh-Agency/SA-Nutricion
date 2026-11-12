"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { fadeInUp } from "@/lib/motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  accentColor,
}: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(35,67,63,0.08)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(35,67,63,0.14)] transition-all duration-300 cursor-default"
      style={{ borderLeft: `3px solid ${accentColor}` }}
    >
      <div
        className="inline-flex p-3 rounded-xl mb-4"
        style={{ backgroundColor: `${accentColor}22` }}
      >
        <Icon size={22} style={{ color: accentColor }} />
      </div>
      <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">{title}</h3>
      <p className="text-[#5c5c5c] text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
