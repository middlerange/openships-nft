import React from "react";
import Navigation from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="dark">
      <div className="text-black bg-white dark:bg-black dark:text-white">
        <div className="hero flex flex-col justify-between h-screen">
          <div className="header max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
            <Navigation />
          </div>
          <main className="relative">
            <section class="sky">
              <div class="boat-container">
                <img src="/empty-ship.png" style={{ maxWidth: "240px" }} />
              </div>
            </section>
            <section class="sea"></section>
          </main>
          <div className="dark:bg-black dark:text-white">
            <div className="max-w-3xl px-4 py-24 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
              <div className="md:grid md:grid-cols-12 md:gap-6">
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6">
                  <div className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 mb-12">
                    Your new NFT vessel is waiting!
                  </div>

                  <div className="content grid gap-4">
                    <p>Gm, seafaring JPEG merchant. </p>
                    <p>
                      Your SOS signal reached our Open Shipyard. You probably
                      don't know us yet. And we can't tell you much, because
                      we're not located in any central harbor—though you can
                      always reach us at [contract address].
                    </p>
                    <p>Whether you know us or not, we've come to help!</p>
                    <p>
                      Your ship looks damaged, just like ours were. And while a
                      few now reside at a certain yacht club, nobody makes it on
                      the open waters without getting a little dinged up.
                    </p>
                    <p>
                      But don't worry, we've built a fleet of [AMOUNT OF NFTs]
                      ships ready to sail the seas flying your flag.
                    </p>
                    <p>
                      Whether you're a pirate, merchant or first-time sailor,
                      you can get a vessel you'll proudly call your own (the
                      only group we don't serve are phishermen).
                    </p>
                    <p>
                      All it takes is a small contribution of [PRICE] to our
                      humble shipyard.
                    </p>
                    <p>
                      After pressing the button and minting your vessel, it'll
                      soon arrive at your 0x or .eth address, ready for you to
                      explore the seas, further trading.
                    </p>
                    Yours sincerely,
                    <br />
                    Worldwide Association Governing Mainsail Integrity
                  </div>
                </div>
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 mt-10 px-4">
                  <img src="/sos.gif" alt="collection" className="rounded" />
                </div>
              </div>

              {/* About */}
              <div className="md:grid md:grid-cols-12 md:gap-6 py-12">
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6">
                  <p class="my-2 text-2xl leading-8 font-semibold tracking-tight dark:text-gray-300">
                    Okay, in all seriousness.
                  </p>
                  <h2 class="sm:text-4xl text-4xl leading-8 font-extrabold tracking-tight text-white">
                    What is Open Ships?
                  </h2>
                </div>
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 flex items-center justify-center">
                  <div className="">
                    <p class="mt-10 max-w-2xl text-l lg:mx-auto">
                      Centuries ago, having your own ship (instead of scrubbing
                      the decks on someone else's) gave you the freedom to
                      explore the new world, pack your bags and go anywhere you
                      wanted—just like web3 can give us the freedom to leave
                      centralized web2 platforms and explore better alternatives
                      in a new internet.
                    </p>
                    <p class="mt-4 max-w-2xl text-l lg:mx-auto">
                      Open Ships is an art project designed to embody
                      decentralization, freedom and an adventurer's spirit—some
                      of web3's core values.
                    </p>
                  </div>
                </div>
              </div>

              {/* SOS */}
              <div className="md:grid md:grid-cols-12 md:gap-6 py-12">
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6">
                  {/* <p class="my-2 text-2xl leading-8 font-semibold tracking-tight dark:text-gray-300">
                  
                </p> */}
                  <h2 class="sm:text-4xl text-4xl leading-8 font-extrabold tracking-tight text-white">
                    Why $SOS?
                  </h2>
                </div>
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 flex items-center justify-center">
                  <div>
                    <p class="mt-10 max-w-2xl text-l lg:mx-auto">
                      The enthusiasm around the $SOS airdrop showed there's a
                      demand for decentralization in the NFT space.
                    </p>
                    <p class="mt-10 max-w-2xl text-l lg:mx-auto">
                      But decentralization doesn't happen by itself. We have to
                      build it.
                    </p>
                    <p class="mt-10 max-w-2xl text-l lg:mx-auto">
                      That's why we decided to create one of the first NFT drops
                      which only accepts $SOS for minting.
                    </p>
                    <p class="mt-10 max-w-2xl text-l lg:mx-auto">
                      Your Open Ship NFT will still be secured by the Ethereum
                      blockchain.
                    </p>
                  </div>
                </div>
              </div>

              {/* ROADMAP */}
              <div className="md:grid md:grid-cols-12 md:gap-6 py-12">
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6">
                  {/* <p class="my-2 text-2xl leading-8 font-semibold tracking-tight dark:text-gray-300">
                  
                </p> */}
                  <h2 class="sm:text-4xl text-4xl leading-8 font-extrabold tracking-tight text-white">
                    What's the Roadmap?
                  </h2>
                </div>
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 flex items-center justify-center">
                  <div>
                    <p class="mt-10 max-w-2xl text-l lg:mx-auto">
                      We see Open Ships as an art project, something you love to
                      own because it embodies values you and your work stand
                      for.
                    </p>
                    <p class="mt-10 max-w-2xl text-l lg:mx-auto">
                      As such, we don't have a roadmap, although you're free to
                      build a community, create derivative art or use the ships
                      you own in any way you want!
                    </p>
                  </div>
                </div>
              </div>

              {/* ROADMAP */}
              <div className="md:grid md:grid-cols-12 md:gap-6 py-12">
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6">
                  {/* <p class="my-2 text-2xl leading-8 font-semibold tracking-tight dark:text-gray-300">
                  
                </p> */}
                  <h2 class="sm:text-4xl text-4xl leading-8 font-extrabold tracking-tight text-white">
                    Who are we?
                  </h2>
                </div>
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 flex items-center justify-center">
                  <div>
                    <p class="mt-10 max-w-2xl text-l lg:mx-auto">Team info</p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="mt-24">
                <h2 class="sm:text-4xl text-4xl leading-8 font-extrabold tracking-tight text-white">
                  FAQs
                </h2>
                <ul class="flex items-start gap-8 flex-wrap">
                  <li class="w-3/6 mt-24">
                    <p class="leading-8 font-medium tracking-tight dark:text-white text-xl">
                      When is the mint?
                    </p>
                    <p class="mt-2">
                      <p class="text-sm leading-6 text-gray-300">
                        Dec 29th, 2021 at 6PM CT
                      </p>
                    </p>
                    <p class="mt-12 leading-8 font-medium tracking-tight dark:text-white text-xl">
                      What is the price of a OpenShip?
                    </p>
                    <p class="mt-2">
                      <p class="text-sm leading-6 text-gray-300">TBD</p>
                    </p>
                  </li>
                  <li class="w-2/5">
                    <img src="/sos-3.png" alt="mock" className="rounded-lg" />
                  </li>
                  <li class="w-3/6">
                    <p class="mt-12 leading-8 font-medium tracking-tight dark:text-white text-xl">
                      What am i buying when i buy an OpenShips NFT?
                    </p>
                    <p className="mt-2">
                      <p className="text-sm leading-6 text-gray-300">TBD</p>
                    </p>
                  </li>
                  <li class="w-2/5">
                    <p class="mt-12 leading-8 font-medium tracking-tight dark:text-white text-xl">
                      Which charities are being donated to?
                    </p>
                    <p class="mt-2">
                      <p class="text-sm leading-6 text-gray-300">
                        X% of net proceeds will go to ---
                      </p>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
