function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24"
    >

      {/* Section Title */}
      <h2 className="text-4xl font-bold text-sky-400 mb-12">
        About Me
      </h2>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <p className="text-slate-300 leading-8 text-lg mb-6">
            I am a junior Flutter and React developer
            from Uzbekistan, currently studying
            Information Systems and Technologies.
          </p>

          <p className="text-slate-400 leading-8 text-lg mb-6">
            I enjoy building scalable applications,
            designing modern user interfaces, and
            continuously learning new technologies.
          </p>

          <p className="text-slate-400 leading-8 text-lg">
            My goal is to become an international-level
            software engineer and study abroad at top
            universities such as KAIST.
          </p>
        </div>

        {/* Right Side */}
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">

          <div className="space-y-6">

            <div>
              <h3 className="text-sky-400 font-semibold mb-2">
                Education
              </h3>

              <p className="text-slate-300">
                Tashkent State University of Economics
              </p>
            </div>

            <div>
              <h3 className="text-sky-400 font-semibold mb-2">
                Specialization
              </h3>

              <p className="text-slate-300">
                Information Systems & Technologies
              </p>
            </div>

            <div>
              <h3 className="text-sky-400 font-semibold mb-2">
                Languages
              </h3>

              <p className="text-slate-300">
                Uzbek, Russian, and English
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;