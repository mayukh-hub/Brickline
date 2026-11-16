
import { motion } from "framer-motion";

import {
  House,
  LockKeyholeOpen,
  Globe,
  ArrowRight,
} from "lucide-react";

function Highlights() {

  const highlights = [
    {
      icon: House,
      title: "Anywhere feels like home",
      description:
        "Every home is thoughtfully equipped for immediate comfort, offering a space where no detail is left to chance.",
    },
    {
      icon: LockKeyholeOpen,
      title: "Live securely without boundaries",
      description:
        "Each residence is crafted to provide immediate comfort, where every element is purposefully chosen.",
    },
    {
      icon: Globe,
      title: "Just a click away the world",
      description:
        "Step into a home where comfort greets you instantly and every detail reflects refined living.",
    },
  ];

  // Parent animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Individual card animation
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-[#faf8f5] px-6 py-20 md:px-10 lg:px-16">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 flex items-center justify-between gap-4">

          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-medium tracking-tight text-neutral-900 md:text-4xl"
          >
            Outstanding highlights
          </motion.h2>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden border border-gray-300 px-5 py-3 text-xs font-medium transition hover:bg-black hover:text-white sm:inline-flex items-center gap-2"
          >
            GET STARTED
            <ArrowRight size={14} />
          </motion.a>

        </div>

        {/* Highlight Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="group bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl md:p-8"
              >

                {/* Icon */}
                <motion.div
                  className="mb-6 inline-block"
                  whileHover={{
                    scale: 1.2,
                    rotate: 8,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon
                    size={30}
                    strokeWidth={1.5}
                    className="text-[#e87952]"
                  />
                </motion.div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-medium leading-snug text-neutral-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mb-7 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>

                {/* Learn More */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-800 transition-colors group-hover:text-[#e87952]"
                >
                  LEARN MORE

                  <motion.span
                    className="inline-flex"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={14} />
                  </motion.span>
                </a>

              </motion.div>
            );
          })}

        </motion.div>

      </div>

    </section>
  );
}

export default Highlights;

