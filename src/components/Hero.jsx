
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
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=90&w=2000&auto=format&fit=crop')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-10 md:px-10">

        {/* Label */}
        <span className="inline-block rounded-full border border-white/50 px-4 py-2 text-xs text-white">
          Signature Home
        </span>

        {/* Heading */}
        <h1 className="mt-6 max-w-2xl text-5xl font-light leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
          Your high-end
          <br />
          Haven awaits
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-md text-sm leading-6 text-white/90 md:text-base">
          Discover lavish interiors, curated design, premium
          amenities, and personalized services that define an
          elevated lifestyle.
        </p>

        {/* Find Property */}
        <a
          href="#projects"
          className="mt-9 inline-flex items-center gap-3 bg-white px-6 py-4 text-xs font-semibold text-black transition duration-300 hover:bg-orange-600 hover:text-white"
        >
          FIND PROPERTY
          <ChevronRight size={17} />
        </a>

        {/* Bottom Controls */}
        <div className="mt-12 flex flex-col items-center gap-4">

          <div className="flex w-full max-w-xs items-center justify-center gap-5">

            <button
              aria-label="Previous slide"
              className="rounded-full border border-white/60 p-2.5 text-white transition hover:bg-white hover:text-black"
            >
              <ArrowLeft size={18} />
            </button>

            <div className="h-px flex-1 bg-white/50">
              <div className="h-px w-1/2 bg-white"></div>
            </div>

            <button
              aria-label="Next slide"
              className="rounded-full border border-white/60 p-2.5 text-white transition hover:bg-white hover:text-black"
            >
              <ArrowRight size={18} />
            </button>

          </div>

          <p className="max-w-md text-center text-xs leading-5 text-white/90 md:text-sm">
            Unlock the potential of real estate with strategic insights,
            innovative solutions, and exceptional service.
          </p>

        </div>
      </div>
    </section>
  );
}

export default Hero;
