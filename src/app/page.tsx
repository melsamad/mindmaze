"use client";

import { motion } from "framer-motion";
import PolaroidCard from "../components/PolaroidCard";

export default function Home() {
  return (
    <main className="min-h-screen w-full relative overflow-hidden flex flex-col items-center selection:bg-[#FFD166] selection:text-[#0A2619]">
      {/* Abstract decorative blobs in background */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#7BC4C4] rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-64 h-64 bg-[#F4D35E] rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-20 w-64 h-64 bg-[#FF9F1C] rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '4s' }}></div>

      {/* Hero Section */}
      <section className="w-full min-h-[90vh] flex flex-col items-center justify-center px-4 relative z-10 pt-16">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, duration: 0.8 }}
          className="relative text-center flex flex-col items-center"
        >
          {/* Sticker behind title */}
          <div className="absolute -inset-8 bg-[#E0FAFB] -z-10 rounded-[3rem] border-8 border-[#0A2619] shadow-[12px_12px_0px_rgba(10,38,25,1)] transform -rotate-[2deg]"></div>

          <h1 className="text-7xl md:text-9xl font-display font-black text-[#0A2619] uppercase tracking-tighter mix-blend-normal z-10 drop-shadow-md leading-[0.8]">
            MIND<br /><span className="text-[#FF9F1C] drop-shadow-[4px_4px_0px_#0A2619]">MAZE</span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 50, rotate: 10 }}
            animate={{ opacity: 1, y: 0, rotate: 2 }}
            transition={{ delay: 0.5, type: "spring", bounce: 0.6 }}
            className="mt-12 bg-[#FFD166] border-4 border-[#0A2619] px-6 py-4 rounded-xl shadow-[6px_6px_0px_rgba(10,38,25,1)] max-w-2xl relative z-20"
          >
            {/* Little pin holding the sign */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#C1121F] border-2 border-[#0A2619] shadow-sm z-30">
              <div className="absolute inset-1 rounded-full bg-white opacity-40"></div>
            </div>

            <p className="text-2xl md:text-3xl font-bold font-sans text-[#0A2619]">
              A hackathon where everyone works on everyone's project.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll indicator down arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-12 h-12 bg-white rounded-full border-4 border-[#0A2619] flex items-center justify-center shadow-[4px_4px_0px_rgba(10,38,25,1)]"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A2619" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Steps Section */}
      <section className="w-full mx-auto px-4 py-32 z-10 overflow-hidden flex flex-col items-center">
        <div className="flex justify-center mb-20 relative px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative transform rotate-3"
          >
            <h2 className="text-5xl md:text-7xl font-display font-black text-[#E0FAFB] bg-[#0A2619] inline-block px-8 py-3 border-4 border-[#0A2619] shadow-[8px_8px_0px_#FFD166] skew-x-[-5deg] break-words max-w-full text-center">
              How it works
            </h2>
            {/* Decorative squiggles */}
            <svg className="absolute -bottom-6 -right-10 w-24 h-24 text-[#C1121F] -rotate-12 hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
              <path d="M10,50 Q25,20 50,50 T90,50" />
            </svg>
          </motion.div>
        </div>

        <div className="w-full max-w-[1400px] flex flex-wrap justify-center items-center gap-12 md:gap-16 px-4">
          <PolaroidCard rotation="-rotate-3" delay={0.1} color="bg-[#FFF3B0]" imageColor="bg-[#FF9F1C]">
            Start working on any project with your team
          </PolaroidCard>

          <PolaroidCard rotation="rotate-2" delay={0.2} color="bg-[#E0FAFB]" imageColor="bg-[#2EC4B6]">
            After a few days, you switch projects with a random team at the hackathon
          </PolaroidCard>

          <PolaroidCard rotation="-rotate-4" delay={0.3} color="bg-[#F4D35E]" imageColor="bg-[#EE964B]">
            You are in charge of continuing their project until a random switch happens again!
          </PolaroidCard>

          <PolaroidCard rotation="rotate-4" delay={0.4} color="bg-[#FAD2E1]" imageColor="bg-[#C1121F]">
            Repeat until the end of the hackathon
          </PolaroidCard>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="w-full bg-[#0A2619] text-[#FFC0CB] pt-40 pb-32 mt-12 relative border-t-8 border-[#171717] flex flex-col items-center">
        {/* Curvy zig-zag divider overlay using SVG path to match the quirkiness */}
        <div className="absolute top-[-4px] left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-[calc(110%+1.3px)] h-[60px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#FFB3C6]"></path>
          </svg>
        </div>

        <div className="w-full max-w-4xl mx-auto px-4 text-center z-10 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block relative mb-16"
          >
            <h3 className="text-5xl md:text-7xl font-display font-black text-[#FFD166] transform -rotate-2">
              Inspiration
            </h3>
            {/* Sparkles! */}
            <div className="absolute -top-6 -right-10 text-4xl text-[#2EC4B6]">✨</div>
            <div className="absolute -bottom-4 -left-8 text-3xl text-[#F4D35E]">✨</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#FFF9E6] text-[#0A2619] p-8 md:p-14 border-8 border-[#171717] rounded-3xl shadow-[16px_16px_0px_rgba(255,209,102,1)] transform rotate-1 mx-4"
          >
            {/* ---------------------------------------------------- */}
            {/* USER: INSERT YOUR INSPIRATION TEXT HERE!             */}
            {/* ---------------------------------------------------- */}
            <p className="text-3xl font-sans font-bold leading-relaxed whitespace-pre-line">
              To be frank, Mind Maze was inspired by videos on social media of people switching paintings mid process and completing each other's work of art. So I thought: "Why not do this for cool projects?" and more importantly, "How cool do projects get when different minds contribute without previous communication, just pure understanding of the vision?"
            </p>
            {/* ---------------------------------------------------- */}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
