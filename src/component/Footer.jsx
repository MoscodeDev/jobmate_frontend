import { Github, Linkedin, MailCheck, MailCheckIcon, MapPin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-semibold text-white">JobMate</h2>
          <p className="text-sm mt-2">
            Your all-in-one job tracker and career growth tool.
          </p>
        </div>

        {/* Contacts */}
        <div>
          <h3 className="text-md font-semibold mb-2 text-white">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-3">
              <MailCheckIcon className="w-5 h-5 text-white" />
              <a
                href="mailto:mosscode101@gmail.com"
                className="hover:text-white"
              >
                mosscode101@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-white" />
              Nairobi, Kenya
            </li>
            <li className="flex items-center gap-3">
              <Github className="w-5 h-5 text-white" />
              <a
                href="https://github.com/MoscodeDev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                github.com/MoscodeDev
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Linkedin className="w-5 h-5 text-white" />
              <a
                href="https://www.linkedin.com/in/moses-karani-githinji-0a138322a/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                linkedin.com/in/moses-karani-githinji
              </a>
            </li>
          </ul>
        </div>

        {/* Credits */}
        <div>
          <h3 className="text-md font-semibold mb-2 text-white">Credits</h3>
          <p className="text-sm">Built by Moses Karani</p>
          <p className="text-sm mt-1">
            © {new Date().getFullYear()} JobMate. All rights reserved.
          </p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        Made with ❤️ using the MERN Stack.
      </div>
    </footer>
  );
};

export default Footer;
