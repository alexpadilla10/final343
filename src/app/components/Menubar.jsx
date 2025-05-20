import Link from "next/link";

export default function Menubar() {
  return (
    <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo or Title */}
          <div className="text-xl font-bold text-violet-600 tracking-tight">
            Final 343 ✨
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 text-sm sm:text-base font-medium text-gray-700">
            <a
              href="https://part-2-nclm.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <span className="hover:text-violet-600 transition duration-200">
                Home
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-violet-500 transition-all group-hover:w-full"></span>
            </a>

            <a
              href="https://expense-drab-xi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <span className="hover:text-violet-600 transition duration-200">
                Midterm Part 1
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-violet-500 transition-all group-hover:w-full"></span>
            </a>

            <a
              href="https://part-2-eight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <span className="hover:text-violet-600 transition duration-200">
                Midterm Part 2
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-violet-500 transition-all group-hover:w-full"></span>
            </a>

            <Link href="/faq" className="relative group">
              <span className="hover:text-violet-600 transition duration-200">
                FAQ
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-violet-500 transition-all group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
