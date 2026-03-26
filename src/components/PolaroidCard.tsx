"use client";

import { motion } from "framer-motion";
import { Paperclip, LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface PolaroidCardProps {
  children: ReactNode;
  rotation?: string;
  delay?: number;
  color?: string;
  imageColor?: string;
  Icon?: LucideIcon;
}

export default function PolaroidCard({
  children,
  rotation = "-rotate-3",
  delay = 0,
  color = "bg-[#FFF9E6]", // Pale yellow sticky note color
  imageColor = "bg-[#4B8BBE]", // Blue image background placeholder
  Icon
}: PolaroidCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, type: "spring", bounce: 0.4 }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
      className={`relative w-80 max-w-full p-4 pb-6 shadow-[8px_8px_0px_rgba(10,38,25,1)] border-4 border-[#0A2619] flex flex-col items-center justify-center transform ${color} ${rotation}`}
      style={{ borderRadius: '12px 12px 12px 16px' }}
    >
      <div className="absolute -top-6 -left-3 z-10 text-[#0A2619]">
        {/* Quirky paperclip decoration */}
        <Paperclip size={56} strokeWidth={2.5} className="-rotate-[30deg] drop-shadow-[2px_2px_0px_rgba(10,38,25,0.4)]" />
      </div>
      
      {/* "Polaroid Image" area containing an abstract colorful dot grid as placeholder */}
      <div 
        className={`w-full h-48 border-4 border-[#0A2619] mb-4 ${imageColor} flex flex-col items-center justify-center overflow-hidden relative shadow-[inset_4px_4px_0px_rgba(0,0,0,0.1)]`}
        style={{ borderRadius: '6px' }}
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0A2619_2px,transparent_2px)] [background-size:16px_16px]"></div>
        {/* Render the passed Lucide Icon with quirky styling */}
        <div className="w-24 h-24 rounded-full border-4 border-[#0A2619] bg-white bg-opacity-80 flex items-center justify-center relative shadow-[4px_4px_0px_#0A2619]">
            {Icon && <Icon size={48} strokeWidth={2.5} className="text-[#0A2619]" />}
        </div>
      </div>

      <div className="font-display font-bold text-2xl text-center text-[#0A2619] leading-tight flex-1 flex items-center px-2">
        {children}
      </div>
      
      {/* Little tape strip on the bottom corner */}
      <div className="absolute -bottom-2 -right-2 w-16 h-6 bg-[#ffffff] opacity-70 rotate-[-15deg] mix-blend-overlay"></div>
    </motion.div>
  );
}
