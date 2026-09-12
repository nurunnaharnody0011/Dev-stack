
import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t mt-16 border-gray-200 bg-white font-[Plus Jakarta Sans]">
      <div className="container mx-auto px-5 py-12 md:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <img
              src={Logo}
              alt="DevStack"
              className="w-32"/>

            <p className="mt-4 max-w-[260px] text-sm text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex items-center gap-5 text-sm font-medium text-gray-600">
              <a href="#" className="transition hover:text-pink-600"> GitHub </a>
             <a href="#" className="transition hover:text-pink-600"> Twitter</a>
              <a href="#" className="transition hover:text-pink-600">LinkedIn</a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#0F172A]">
              Product
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              <li> Home</li>

              <li> Technologies</li>

              <li> Projects </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase text-[#0F172A]">
              Company
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              <li>About</li>
              <li>Contact</li>
              <li>Career</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase text-[#0F172A]">
              Legal
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              <li>Privacy Policy</li>

              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-gray-200 pt-6 text-xs text-gray-400 md:flex-row md:items-center md:justify-between">
          <p>©️ 2026 DevStack. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-pink-600">Privacy</a>
            <a href="#" className="hover:text-pink-600"> Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;