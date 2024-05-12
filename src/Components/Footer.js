import {DRIBBBLE_URL, FACEBOOK_URL, Footer_IMG_URL, GITHUB_URL, INSTAGRAM_URL, TWITTER_URL} from "../utils/constant"

const Footer = () => {
  return (
    <footer class="bg-black  px-12  lg:grid lg:grid-cols-5">
      <div class="relative block h-32 lg:col-span-2 lg:h-full">
        <img
          src={Footer_IMG_URL}
          alt=""
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div class="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span class="text-xs uppercase tracking-wide text-slate-100">
                {" "}
                Call us{" "}
              </span>

              <a
                href="#"
                class="block text-2xl font-medium text-slate-100 hover:opacity-75 sm:text-3xl"
              >
                0123456789
              </a>
            </p>

            <ul class="mt-8 space-y-1 text-sm text-slate-200">
              <li>Monday to Friday: 10am - 5pm</li>
              <li>Weekend: 10am - 3pm</li>
            </ul>

            <ul class="mt-8 flex gap-6">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  class="text-slate-300 transition hover:opacity-75"
                >
                  <span class="sr-only">Facebook</span>

                {  FACEBOOK_URL}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  class="text-slate-300 transition hover:opacity-75"
                >
                  <span class="sr-only">Instagram</span>

                  {INSTAGRAM_URL}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  class="text-slate-300 transition hover:opacity-75"
                >
                  <span class="sr-only">Twitter</span>

                  {TWITTER_URL}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  class="text-slate-300 transition hover:opacity-75"
                >
                  <span class="sr-only">GitHub</span>

                  {GITHUB_URL}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  class="text-slate-300 transition hover:opacity-75"
                >
                  <span class="sr-only">Dribbble</span>

                  {DRIBBBLE_URL}
                </a>
              </li>
            </ul>
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p class="font-medium text-slate-100">Services</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" class="text-gray-100 transition hover:opacity-75">
                    {" "}
                    1on1 Coaching{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="text-slate-100 transition hover:opacity-75"
                  >
                    {" "}
                    Company Review{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="text-slate-100 transition hover:opacity-75"
                  >
                    {" "}
                    Accounts Review{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="text-slate-100 transition hover:opacity-75"
                  >
                    {" "}
                    HR Consulting{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="text-slate-100 transition hover:opacity-75"
                  >
                    {" "}
                    SEO Optimisation{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p class="font-medium text-slate-100">Company</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    class="text-slate-100 transition hover:opacity-75"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="text-slate-100 transition hover:opacity-75"
                  >
                    {" "}
                    Meet the Team{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="text-slate-100 transition hover:opacity-75"
                  >
                    {" "}
                    Accounts Review{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="mt-12 border-t border-gray-100 pt-12">
          <div class="sm:flex sm:items-center sm:justify-between">
            <ul class="flex flex-wrap gap-4 text-xs">
              <li>
                <a href="#" class="text-slate-400 transition hover:opacity-75">
                  {" "}
                  Terms & Conditions{" "}
                </a>
              </li>

              <li>
                <a href="#" class="text-slate-400 transition hover:opacity-75">
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>

              <li>
                <a href="#" class="text-slate-400 transition hover:opacity-75">
                  {" "}
                  Cookies{" "}
                </a>
              </li>
            </ul>

            <p class="mt-8 text-xs text-slate-400 sm:mt-0">
              &copy; 2022. Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
