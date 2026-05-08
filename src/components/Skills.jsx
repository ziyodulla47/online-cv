const skills = [
  "Flutter",
  "Dart",
  "React",
  "JavaScript",
  "Firebase",
  "REST API",
  "SQL",
  "MongoDB",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "Power BI",
];

function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-24"
    >

      {/* Title */}
      <h2 className="text-4xl font-bold text-sky-400 mb-12">
        Skills
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {skills.map((skill) => (
          <div
            key={skill}
            className="
              bg-slate-800
              border border-slate-700
              rounded-2xl
              p-6
              text-center
              hover:border-sky-400
              hover:-translate-y-1
              transition
            "
          >
            <p className="text-lg font-medium">
              {skill}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;