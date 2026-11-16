
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function Projects() {
  return (
    <section
      id="projects"
      className="bg-white px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl text-4xl font-medium leading-tight tracking-tight text-neutral-900 md:text-6xl"
        >
          Executed & in-progress
          <br />
          projects <span className="text-gray-400">-</span>
        </motion.h2>

        {/* Main Grid */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2">

          {/* Left Featured Project */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Main Image */}
            <div className="group overflow-hidden">
              <motion.img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=85"
                alt="Golden Horizon Villa"
                whileHover={{ scale: 1.07 }}
                transition={{ duration: 0.7 }}
                className="h-[300px] w-full object-cover md:h-[420px]"
              />
            </div>

            {/* Property Details */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-4 flex flex-wrap items-center justify-between gap-2"
            >
              <h3 className="text-2xl font-medium">
                Golden Horizon Villa
              </h3>

              <span className="text-sm text-gray-500">
                South Carolina, 2025
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 max-w-lg text-sm leading-6 text-gray-600"
            >
              Experience elevated living in luxury high-rise
              apartments offering stunning views, modern comforts,
              and convenience.
            </motion.p>
          </motion.div>

          {/* Right Content */}
          <div className="flex flex-col justify-between">

            {/* Description */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="max-w-lg text-sm leading-6 text-gray-700">
                Designed with innovation, built in prime locations,
                and rooted in sustainability—our projects redefine
                modern living with comfort and elegance.
              </p>

              {/* Slider Controls */}
              <div className="mt-8 flex items-center gap-5">

                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Previous project"
                  className="rounded-full border border-gray-300 p-3 transition-colors duration-300 hover:bg-black hover:text-white"
                >
                  <ArrowLeft size={18} />
                </motion.button>

                <div className="h-px flex-1 bg-gray-300">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "50%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="h-px bg-black"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Next project"
                  className="rounded-full border border-gray-300 p-3 transition-colors duration-300 hover:bg-black hover:text-white"
                >
                  <ArrowRight size={18} />
                </motion.button>

              </div>

              <motion.a
                href="#more-projects"
                whileHover={{ x: 8 }}
                className="mt-6 inline-block text-sm underline underline-offset-4 hover:text-orange-600"
              >
                Explore more projects that we have done
              </motion.a>
            </motion.div>

            {/* Two Small Project Cards */}
            <div className="mt-12 grid grid-cols-2 gap-5">

              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
              >
                <div className="overflow-hidden">
                  <motion.img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=85"
                    alt="Maison Noire"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                    className="h-48 w-full object-cover md:h-64"
                  />
                </div>

                <h3 className="mt-3 text-lg font-medium">
                  Maison Noire
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Oklahoma City, 2024
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="overflow-hidden">
                  <motion.img
                    src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=700&q=85"
                    alt="Villa Bellagio"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                    className="h-48 w-full object-cover md:h-64"
                  />
                </div>

                <h3 className="mt-3 text-lg font-medium">
                  Villa Bellagio
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  San Francisco, 2024
                </p>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

