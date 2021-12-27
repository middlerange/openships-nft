import React from "react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <a href="/">
          <div className="flex items-center justify-between">
            <div class="mr-3">
              <img style={{ width: "50px" }} src="/empty-ship.png" alt="logo" />
            </div>
            <div class="hidden h-6 text-2xl font-semibold sm:block">
              Openships
            </div>
          </div>
        </a>
      </div>
      <div class="flex items-center text-base leading-5">
        <div class="hidden sm:block">
          <a
            class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4 "
            href="https://opensea.com/"
          >
            Opensea
          </a>
          <a
            class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4 "
            href="https://twitter.com/"
          >
            Twitter
          </a>
          <a
            class="p-1 mr-4 font-medium text-gray-900 dark:text-gray-100 sm:p-4 "
            href="https://discord.gg/"
          >
            Discord
          </a>
          <a
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700"
          >
            Connect wallet
          </a>
        </div>
        <div class="sm:hidden">
          <button
            type="button"
            className="text-gray-900 dark:text-gray-200 w-8 h-8 ml-1 mr-1 rounded"
            aria-label="Toggle Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          {isMobileMenuOpen && (
            <div
              class={`fixed bg-gray-200 dark:bg-gray-800 w-full h-full top-24 right-0 bg-gray-200 opacity-95 z-10 transform ease-in-out duration-300 translate-x-${
                isMobileMenuOpen ? "full" : "0"
              }`}
            >
              <button
                type="button"
                aria-label="toggle modal"
                class="fixed w-full h-full cursor-auto focus:outline-none"
              ></button>
              <nav class="fixed h-full mt-8">
                <div class="px-8 py-4">
                  <a
                    class="text-xl p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4 "
                    href="https://opensea.com/"
                  >
                    Opensea
                  </a>
                </div>
                <div class="px-8 py-4">
                  <a
                    class="text-xl p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4 "
                    href="https://twitter.com/"
                  >
                    Twitter
                  </a>
                </div>
                <div class="px-8 py-4">
                  <a
                    class="text-xl p-1 mr-4 font-medium text-gray-900 dark:text-gray-100 sm:p-4 "
                    href="https://discord.gg/"
                  >
                    Discord
                  </a>
                </div>
                <div class="px-8 py-4">
                  <a
                    href="/"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700"
                  >
                    Connect wallet
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
