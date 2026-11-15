
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

  return (
    <section className="bg-[#faf8f5] px-6 py-20 md:px-10 lg:px-16">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 flex items-center justify-between gap-4">
          <h2 className="text-3xl font-medium tracking-tight text-neutral-900 md:text-4xl">
            Outstanding highlights
          </h2>

          <a
            href="#projects"
            className="hidden border border-gray-300 px-5 py-3 text-xs font-medium transition hover:bg-black hover:text-white sm:inline-flex items-center gap-2"
          >
            GET STARTED
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
              >

                {/* Icon */}
                <div className="mb-6">
                  <Icon
                    size={30}
                    strokeWidth={1.5}
                    className="text-[#e87952]"
                  />
                </div>

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
                  className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-800 transition group-hover:text-[#e87952]"
                >
                  LEARN MORE
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Highlights;
