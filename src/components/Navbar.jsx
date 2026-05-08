import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-sky-400">
           Tursunoboyev Ziyodulla
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-slate-300">

          <li>
            <a
              href="#about"
              className="hover:text-sky-400 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-sky-400 transition"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-sky-400 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-sky-400 transition"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">

          <ul className="flex flex-col items-center py-6 gap-6 text-slate-300">

            <li>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="hover:text-sky-400 transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                onClick={() => setIsOpen(false)}
                className="hover:text-sky-400 transition"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="hover:text-sky-400 transition"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-sky-400 transition"
              >
                Contact
              </a>
            </li>

          </ul>

        </div>
      )}

    </nav>
  );
}

export default Navbar;