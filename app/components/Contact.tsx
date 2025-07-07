"use client";

import { Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-16"
    >
      <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-200 text-transparent bg-clip-text drop-shadow-lg select-none">
        Let’s Connect
      </h2>

      <p className="mb-12 text-center max-w-xl text-lg text-slate-300">
        Reach out to me via WhatsApp, phone call, email, or LinkedIn. I&apos;m
        ready to connect and collaborate.
      </p>

      <div className="flex flex-col sm:flex-row gap-8">
        {/* WhatsApp */}
        <a
          href="https://wa.me/27735339942"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-full bg-gradient-to-r from-slate-600 to-slate-500 shadow-lg hover:from-slate-700 hover:to-slate-600 transition flex items-center space-x-3"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.88 11.88 0 0012 0C5.372 0 0 5.372 0 12c0 2.114.55 4.082 1.513 5.838L0 24l6.406-1.5A11.966 11.966 0 0012 24c6.627 0 12-5.372 12-12 0-3.202-1.255-6.203-3.48-8.52zm-3.363 12.507c-.283.797-1.447 1.493-2.02 1.6-.53.104-1.213.145-2.37-.277a8.88 8.88 0 01-3.472-2.49 7.59 7.59 0 01-1.594-2.118c-.142-.25-.144-.464-.012-.639l.36-.462c.12-.157.336-.403.49-.512.19-.143.26-.22.39-.21l.434.037c.21.02.446.102.68.264a2.63 2.63 0 011.009 1.299c.138.3.123.53.088.618-.038.116-.12.157-.252.23a.908.908 0 01-.374.127c-.117.013-.234-.02-.345-.066-.22-.093-.63-.44-.741-.61-.11-.165-.182-.23-.31-.355l-.207-.205c-.045-.045-.092-.077-.098-.09a.39.39 0 01.02-.136c.034-.086.199-.345.304-.457a2.27 2.27 0 01.637-.493c.476-.295.79-.41 1.17-.52.25-.067.416-.087.662-.087.2 0 .4.048.59.105a3.866 3.866 0 012.528 2.413c.28.758.26 1.367.185 1.67z" />
          </svg>
          <span className="text-slate-200 font-semibold text-lg">WhatsApp</span>
        </a>

        {/* Phone Call */}
        <a
          href="tel:+27735339942"
          className="px-8 py-4 rounded-full bg-gradient-to-r from-slate-600 to-slate-500 shadow-lg hover:from-slate-700 hover:to-slate-600 transition flex items-center space-x-3"
          aria-label="Call me"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-sky-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.465 4.399a1 1 0 01-.217 1.09l-2.607 2.607a11.042 11.042 0 005.516 5.516l2.607-2.607a1 1 0 011.09-.217l4.399 1.465a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C7.82 21 3 16.18 3 10V5z"
            />
          </svg>
          <span className="text-slate-200 font-semibold text-lg">Call</span>
        </a>

        {/* Email */}
        <a
          href="mailto:peace15008511@gmail.com"
          className="px-8 py-4 rounded-full bg-gradient-to-r from-slate-600 to-slate-500 shadow-lg hover:from-slate-700 hover:to-slate-600 transition flex items-center space-x-3"
          aria-label="Send me an email"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-rose-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 12h.01M8 12h.01M12 16h.01M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"
            />
          </svg>
          <span className="text-slate-200 font-semibold text-lg">Email</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/peace-mulovhedzi-880092168/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-full bg-gradient-to-r from-slate-600 to-slate-500 shadow-lg hover:from-slate-700 hover:to-slate-600 transition flex items-center space-x-3"
          aria-label="Visit LinkedIn profile"
        >
          <Linkedin className="h-6 w-6 text-blue-400" />
          <span className="text-slate-200 font-semibold text-lg">LinkedIn</span>
        </a>
      </div>
    </section>
  );
}
