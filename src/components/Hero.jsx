import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >

        {/* Small Intro */}
        <p className="text-sky-400 text-lg mb-4">
          Hello, I'm
        </p>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Tursunboyev Ziyodulla
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl text-slate-300 mb-8">
          Flutter Developer • React Developer • BI Enthusiast
        </h2>

        {/* Description */}
        <p className="text-slate-400 text-lg leading-8 max-w-2xl mx-auto">
          I build modern mobile and web applications,
          explore data technologies, and prepare for
          international opportunities in technology and education.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="#projects"
            className="bg-sky-500 hover:bg-sky-600 transition px-8 py-4 rounded-xl font-semibold"
          >
            View Projects
          </a>

        <a
  href="/online-cv/cv.pdf"
  download
  className="
    border border-slate-600
    hover:border-sky-400
    transition
    px-8 py-4
    rounded-xl
  "
>
  Download CV
</a>

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;