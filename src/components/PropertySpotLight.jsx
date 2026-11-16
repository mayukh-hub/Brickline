
import { motion } from "framer-motion";

import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  MapPin,
} from "lucide-react";

function PropertySpotlight() {
  return (
    <section className="w-full overflow-hidden px-4 py-12 sm:px-6 md:px-8 lg:py-16">

      <div className="relative mx-auto flex min-h-[520px] w-full max-w-7xl items-center overflow-hidden bg-neutral-900 sm:min-h-[560px] lg:min-h-[620px]">

        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=90&w=2000&auto=format&fit=crop')",
          }}
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />

        {/* Bottom Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[520px] w-full flex-col justify-between p-6 text-white sm:min-h-[560px] sm:p-8 md:p-12 lg:min-h-[620px] lg:p-16">

          {/* Top Location */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-end"
          >
            <div className="flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-4 py-2 text-xs backdrop-blur-md sm:text-sm">
              <MapPin size={15} className="text-orange-400" />
              Arizona, United States
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="max-w-3xl">

            {/* Label */}
            <motion.span
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-5 inline-block rounded-full border border-white/50 px-4 py-2 text-[11px] tracking-widest sm:text-xs"
            >
              PROPERTY SPOTLIGHT
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl font-light leading-[1.12] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Where every home lives in
              <br className="hidden md:block" />
              {" "}balance with nature
            </motion.h2>

            {/* Property Name */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-5 text-sm tracking-wide text-white/80 sm:text-base"
            >
              Stillwater Retreat
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9"
            >

              <span className="border border-white/60 bg-white/10 px-5 py-3 text-[11px] tracking-wider backdrop-blur-sm sm:text-xs">
                4 BHK RENTAL
              </span>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-3 bg-white px-5 py-3 text-[11px] font-semibold tracking-wide text-black transition-colors duration-300 hover:bg-orange-600 hover:text-white sm:text-xs"
              >
                FIND PROPERTY
                <ChevronRight size={15} />
              </motion.a>

            </motion.div>

          </div>

          {/* Bottom Slider Controls */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex justify-end gap-3"
          >

            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#ffffff", color: "#000000" }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous property"
              className="rounded-full border border-white/60 p-3 text-white transition-colors"
            >
              <ArrowLeft size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#c2410c" }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next property"
              className="rounded-full bg-orange-600 p-3 text-white transition-colors"
            >
              <ArrowRight size={18} />
            </motion.button>

          </motion.div>

        </div>
      </div>

    </section>
  );
}

export default PropertySpotlight;

