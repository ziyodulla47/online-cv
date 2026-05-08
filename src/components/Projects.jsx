const projects = [
  {
    title: "IELTS Preparation App",
    description:
      "A mobile application for IELTS students with vocabulary tracking, mock tests, and progress analytics.",

    technologies: [
      "Flutter",
      "Firebase",
      "REST API",
    ],

    github: "Privacy",
    demo: "#",
  },

   {
    title: "Redder Logistics",
    description:
      "A mobile application for Logistics, which drivers ",

    technologies: [
      "Flutter",
      "Dart",
      "REST API",
    ],

    github: "https://github.com/ziyodullaTech/Redder-Logistics-App",
    demo: "#",
  },

  {
    title: "Online CV Website",
    description:
      "A responsive portfolio website built using React and Tailwind CSS with modern UI design.",

    technologies: [
      "React",
      "Tailwind",
      "Vite",
    ],

    github: "#",
    demo: "#",
  },

  {
    title: "Sales Analytics Dashboard",
    description:
      "A business intelligence dashboard for analyzing sales performance and customer trends.",

    technologies: [
      "Power BI",
      "SQL",
      "Excel",
    ],

    github: "https://github.com/ziyodullaTech/edtech-subscription-bi-project",
    demo: "#",
  },

    { title: "Agronom AI",
    description:
      "A mobile application for Agronomia",

    technologies: [
      "Flutter",
      "Dart",
      "REST API",
    ],

    github: "https://github.com/ziyodullaTech/Agranom-AI-App",
    demo: "#",
  }

];

function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-24"
    >

      {/* Title */}
      <h2 className="text-4xl font-bold text-sky-400 mb-12">
        Projects
      </h2>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project) => (
          <div
            key={project.title}
            className="
              bg-slate-800
              border border-slate-700
              rounded-2xl
              p-8
              hover:border-sky-400
              hover:-translate-y-2
              transition
            "
          >

            {/* Project Title */}
            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-slate-400 leading-7 mb-6">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-3 mb-8">

              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    bg-slate-700
                    px-4
                    py-2
                    rounded-lg
                    text-sm
                  "
                >
                  {tech}
                </span>
              ))}

            </div>

            {/* Buttons */}
            <div className="flex gap-4">

              <a
                href={project.github}
                className="
                  border border-slate-600
                  px-5 py-3
                  rounded-xl
                  hover:border-sky-400
                  transition
                "
              >
                GitHub
              </a>

              <a
                href={project.demo}
                className="
                  bg-sky-500
                  hover:bg-sky-600
                  transition
                  px-5 py-3
                  rounded-xl
                "
              >
                Live Demo
              </a>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;