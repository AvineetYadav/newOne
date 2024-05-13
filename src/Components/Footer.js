import {
  DRIBBBLE_URL,
  FACEBOOK_URL,
  Footer_IMG_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
  TWITTER_URL,
} from "../utils/constant";

const Footer = () => {
  return (
    <footer className="bg-black  px-12  lg:grid lg:grid-cols-5">
      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        <img
          src={Footer_IMG_URL}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-xs uppercase tracking-wide text-slate-100">
                {" "}
                Call us{" "}
              </span>

              <a className="block text-2xl font-medium text-slate-100 hover:opacity-75 sm:text-3xl">
                0123456789
              </a>
            </p>

            <ul className="mt-8 space-y-1 text-sm text-slate-200">
              <li>Monday to Friday: 10am - 5pm</li>
              <li>Weekend: 10am - 3pm</li>
            </ul>

            <ul className="mt-8 flex gap-6">
              <li className="text-slate-300 transition hover:opacity-75">
                <span className="sr-only">Facebook</span>

                {FACEBOOK_URL}
              </li>

              <li className="text-slate-300 transition hover:opacity-75">
                <span className="sr-only">Instagram</span>

                {INSTAGRAM_URL}
              </li>

              <li className="text-slate-300 transition hover:opacity-75">
                <span className="sr-only">Twitter</span>

                {TWITTER_URL}
              </li>

              <li className="text-slate-300 transition hover:opacity-75">
                <span className="sr-only">GitHub</span>

                {GITHUB_URL}
              </li>

              <li className="text-slate-300 transition hover:opacity-75">
                <span className="sr-only">Dribbble</span>

                {DRIBBBLE_URL}
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="font-medium text-slate-100">Services</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li className="text-gray-100 transition hover:opacity-75">
                  {" "}
                  1on1 Coaching{" "}
                </li>

                <li className="text-slate-100 transition hover:opacity-75">
                  {" "}
                  Company Review{" "}
                </li>

                <li className="text-slate-100 transition hover:opacity-75">
                  {" "}
                  Accounts Review{" "}
                </li>

                <li className="text-slate-100 transition hover:opacity-75">
                  {" "}
                  HR Consulting{" "}
                </li>

                <li className="text-slate-100 transition hover:opacity-75">
                  {" "}
                  SEO Optimisation{" "}
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-slate-100">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li className="text-slate-100 transition hover:opacity-75">
                  {" "}
                  About{" "}
                </li>

                <li className="text-slate-100 transition hover:opacity-75">
                  {" "}
                  Meet the Team{" "}
                </li>

                <li className="text-slate-100 transition hover:opacity-75">
                  {" "}
                  Accounts Review{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs">
              <li className="text-slate-400 transition hover:opacity-75">
                {" "}
                Terms & Conditions{" "}
              </li>

              <li className="text-slate-400 transition hover:opacity-75">
                {" "}
                Privacy Policy{" "}
              </li>

              <li className="text-slate-400 transition hover:opacity-75">
                {" "}
                Cookies{" "}
              </li>
            </ul>

            <p className="mt-8 text-xs text-slate-400 sm:mt-0">
              &copy; 2022. Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
