import React from "react";

const Footer = () => {
  return (
    <div className="max-w-3xl px-4 py-10 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
      <footer className="flex items-center justify-between py-10">
        <p>©2021 OpenShips. All rights reserved.</p>
        <div class="flex items-center text-base leading-5">
          <div class="sm:block">
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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
