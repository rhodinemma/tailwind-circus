import React from "react";

const Hero = () => {
  return (
    <>
      <div className="relative h-screen">
        <img
          src="/public/images/hero/hero_4.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 h-full w-full">
          <div className="flex min-h-full w-full items-center justify-center">
            <div className="space-y-4">
              <div className="text-white text-center">
                <p className="text-4xl capitalize font-bold mb-4 font-comf">
                  Discover places that people love
                </p>
                <p className="text-lg">
                  We will help you to find the best places in the World.
                </p>
              </div>
              <div className="flex gap-5 mb-5">
                <div>
                  <input
                    type="text"
                    placeholder="Location"
                    className="rounded-md w-80 bg-white text-gray-600 py-3 px-4 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="I'm Looking for....."
                    className="rounded-md w-80 bg-white text-gray-600 py-3 px-4 focus:outline-none"
                  />
                </div>
                <div>
                  <button className="rounded-md py-2.5 px-6 bg-amber-500 text-lg text-white hover:bg-amber-600">
                    <span className="material-icons align-middle">search</span>{" "}
                    Search
                  </button>
                </div>
              </div>
              <div>
                <ul className="flex gap-5 justify-center text-sm text-white">
                  <li className="capitalize">
                    <a href="#" className="hover:text-amber-500">
                      <span className="material-icons align-middle hidden md:inline-flex">
                        restaurant_menu
                      </span>{" "}
                      restaurants
                    </a>
                  </li>
                  <li className="capitalize">
                    <a href="#" className="hover:text-amber-500">
                      <span className="material-icons align-middle hidden md:inline-flex">
                        local_cafe
                      </span>{" "}
                      cafe
                    </a>
                  </li>
                  <li className="capitalize">
                    <a href="#" className="hover:text-amber-500">
                      <span className="material-icons align-middle hidden md:inline-flex">
                        fitness_center
                      </span>{" "}
                      gym
                    </a>
                  </li>
                  <li className="capitalize">
                    <a href="#" className="hover:text-amber-500">
                      <span className="material-icons align-middle hidden md:inline-flex">
                        school
                      </span>{" "}
                      school
                    </a>
                  </li>
                  <li className="capitalize">
                    <a href="#" className="hover:text-amber-500">
                      <span className="material-icons align-middle hidden md:inline-flex">
                        shopping_cart
                      </span>{" "}
                      shopping
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
