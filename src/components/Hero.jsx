
import { motion } from "framer-motion";

import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[620px] items-center overflow-hidden bg-cover bg-center md:min-h-[680px]"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=90&w=2000&auto=format&fit=crop')",
        }}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-10 md:px-10">

        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block rounded-full border border-white/50 px-4 py-2 text-xs text-white"
        >
          Signature Home
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="mt-6 max-w-2xl text-5xl font-light leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl"
        >
          Your high-end
          <br />
          Haven awaits
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-5 max-w-md text-sm leading-6 text-white/90 md:text-base"
        >
          Discover lavish interiors, curated design, premium
          amenities, and personalized services that define an
          elevated lifestyle.
        </motion.p>

        {/* Find Property */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="mt-9 inline-flex items-center gap-3 bg-white px-6 py-4 text-xs font-semibold text-black transition-colors duration-300 hover:bg-orange-600 hover:text-white"
        >
          FIND PROPERTY
          <ChevronRight size={17} />
        </motion.a>

        {/* Bottom Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <div className="flex w-full max-w-xs items-center justify-center gap-5">

            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: 1.15, backgroundColor: "#ffffff", color: "#000000" }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous slide"
              className="rounded-full border border-white/60 p-2.5 text-white transition-colors"
            >
              <ArrowLeft size={18} />
            </motion.button>

            {/* Progress Line */}
            <div className="h-px flex-1 bg-white/50">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "50%" }}
                transition={{ duration: 1.5, delay: 1.5 }}
                className="h-px bg-white"
              />
            </div>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.15, backgroundColor: "#ffffff", color: "#000000" }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next slide"
              className="rounded-full border border-white/60 p-2.5 text-white transition-colors"
            >
              <ArrowRight size={18} />
            </motion.button>

          </div>

          <p className="max-w-md text-center text-xs leading-5 text-white/90 md:text-sm">
            Unlock the potential of real estate with strategic insights,
            innovative solutions, and exceptional service.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;

