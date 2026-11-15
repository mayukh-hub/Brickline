
import { ArrowLeft, ArrowRight } from "lucide-react";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-white px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-tight text-neutral-900 md:text-6xl">
          Executed & in-progress
          <br />
          projects <span className="text-gray-400">-</span>
        </h2>

        {/* Main Grid */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2">

          {/* Left Featured Project */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=85"
              alt="Golden Horizon Villa"
              className="h-[300px] w-full object-cover md:h-[420px]"
            />

            {/* Property Details */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-2xl font-medium">
                Golden Horizon Villa
              </h3>

              <span className="text-sm text-gray-500">
                South Carolina, 2025
              </span>
            </div>

            <p className="mt-4 max-w-lg text-sm leading-6 text-gray-600">
              Experience elevated living in luxury high-rise
              apartments offering stunning views, modern comforts,
              and convenience.
            </p>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-between">

            {/* Description */}
            <div>
              <p className="max-w-lg text-sm leading-6 text-gray-700">
                Designed with innovation, built in prime locations,
                and rooted in sustainability—our projects redefine
                modern living with comfort and elegance.
              </p>

              {/* Slider Controls */}
              <div className="mt-8 flex items-center gap-5">

                <button
                  aria-label="Previous project"
                  className="rounded-full border border-gray-300 p-3 transition hover:bg-black hover:text-white"
                >
                  <ArrowLeft size={18} />
                </button>

                <div className="h-px flex-1 bg-gray-300">
                  <div className="h-px w-1/2 bg-black"></div>
                </div>

                <button
                  aria-label="Next project"
                  className="rounded-full border border-gray-300 p-3 transition hover:bg-black hover:text-white"
                >
                  <ArrowRight size={18} />
                </button>

              </div>

              <a
                href="#more-projects"
                className="mt-6 inline-block text-sm underline underline-offset-4 hover:text-orange-600"
              >
                Explore more projects that we have done
              </a>
            </div>

            {/* Two Small Project Cards */}
            <div className="mt-12 grid grid-cols-2 gap-5">

              {/* Card 1 */}
              <div>
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=85"
                  alt="Maison Noire"
                  className="h-48 w-full object-cover md:h-64"
                />

                <h3 className="mt-3 text-lg font-medium">
                  Maison Noire
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Oklahoma City, 2024
                </p>
              </div>

              {/* Card 2 */}
              <div>
                <img
                  src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=700&q=85"
                  alt="Villa Bellagio"
                  className="h-48 w-full object-cover md:h-64"
                />

                <h3 className="mt-3 text-lg font-medium">
                  Villa Bellagio
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  San Francisco, 2024
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
