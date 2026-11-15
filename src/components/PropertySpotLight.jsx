
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  MapPin,
} from "lucide-react";

function PropertySpotlight() {
  return (
    <section className="px-4 py-12 md:px-8">

      <div
        className="relative mx-auto flex min-h-[500px] max-w-7xl items-center overflow-hidden bg-cover bg-center md:min-h-[600px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=90&w=2000&auto=format&fit=crop')",
        }}
      >

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Content */}
        <div className="relative z-10 flex min-h-[500px] w-full flex-col justify-between p-6 text-white md:min-h-[600px] md:p-12">

          {/* Top Location */}
          <div className="flex justify-end">
            <div className="flex items-center gap-2 text-xs">
              <MapPin size={15} />
              Arizona, United States
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-2xl">

            <span className="mb-5 inline-block rounded-full border border-white/50 px-4 py-2 text-xs">
              Property Spotlight
            </span>

            <h2 className="text-4xl font-light leading-tight tracking-tight md:text-6xl">
              Where every home lives in
              <br className="hidden md:block" />
              balance with nature
            </h2>

            <p className="mt-5 text-sm text-white/80">
              Stillwater Retreat
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-3">

              <span className="border border-white/60 px-5 py-3 text-xs">
                4 BHK RENTAL
              </span>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-white px-5 py-3 text-xs font-semibold text-black transition hover:bg-orange-600 hover:text-white"
              >
                FIND PROPERTY
                <ChevronRight size={15} />
              </a>

            </div>

          </div>

          {/* Bottom Slider Controls */}
          <div className="flex justify-end gap-3">

            <button
              aria-label="Previous property"
              className="rounded-full border border-white/60 p-3 transition hover:bg-white hover:text-black"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              aria-label="Next property"
              className="rounded-full bg-orange-600 p-3 text-white transition hover:bg-orange-700"
            >
              <ArrowRight size={18} />
            </button>

          </div>

        </div>
      </div>

    </section>
  );
}

export default PropertySpotlight;
