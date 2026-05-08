import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-24"
    >

      {/* Title */}
      <h2 className="text-4xl font-bold text-sky-400 mb-12">
        Contact
      </h2>

      {/* Main Card */}
      <div
        className="
          bg-slate-800
          border border-slate-700
          rounded-3xl
          p-10
          text-center
        "
      >

        {/* Heading */}
        <h3 className="text-3xl font-bold mb-6">
          Let's Work Together
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-lg leading-8 max-w-2xl mx-auto mb-10">
          I am open to internships, collaborations,
          freelance projects, and international
          opportunities in software engineering
          and technology.
        </p>

        {/* Email Button */}
        <a
          href="mailto:tursunboyevziyodulla47@gmail.com"
          className="
            inline-block
            bg-sky-500
            hover:bg-sky-600
            transition
            px-8
            py-4
            rounded-xl
            font-semibold
            mb-10
          "
        >
          Send Email
        </a>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-3xl">

          <a
            href="https://github.com/ziyodulla47"
            target="_blank"
            className="
              text-slate-400
              hover:text-white
              transition
            "
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/tursunboyevziyodullatech"
            target="_blank"
            className="
              text-slate-400
              hover:text-sky-400
              transition
            "
          >
            <FaLinkedin />
          </a>

          <a
            href="https://t.me/tursunboyevziyodulla"
            target="_blank"
            className="
              text-slate-400
              hover:text-sky-400
              transition
            "
          >
            <FaTelegram />
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;