import "./App.css";

function App() {
  return (
    <>
      <nav className="absolute right-0 left-0 z-10 text-white">
        <div className="w-9/12 mx-auto py-5 flex justify-between items-center font-comf">
          <div>
            <a href="#" className="text-lg">
              Tail Listing
            </a>
          </div>
          <div>
            <button className="py-2 px-4 rounded-md border text-amber-500 border-amber-500 bg-transparent hover:bg-amber-500 hover:text-white transition-all">
              Add Listing
            </button>
          </div>
          <div className="space-x-4">
            <button className="text-lg">Sign In</button>
            <button className="text-lg">Sign Up</button>
          </div>
        </div>
      </nav>

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

      <div>
        <div className="bg -gray-50 py-32">
          <div className="w-9/12 mx-auto">
            <div className="text-center mb-12">
              <p className="text-4xl font-bold text-gray-600 mb-3">
                Popular Places
              </p>
              <p className="text-gray-600">Discover Most Searched Places</p>
            </div>

            <div className="grid grid-cols-3 gap-6 mx-auto">
              <div className="bg-white rounded-md shadow mx-w-xl overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/public/images/skynews-dentist-generic_5393494.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-6 py-4 space-y-2">
                  <div className="flex items-center text-sm">
                    <span className="material-icons text-amber-400">grade</span>
                    <span className="material-icons text-amber-400">grade</span>
                    <span className="material-icons text-amber-400">grade</span>
                    <span className="material-icons text-amber-400">grade</span>
                    <span className="material-icons text-amber-400">
                      star_half
                    </span>
                    <span className="ml-2 text-xs text-gray-600">
                      294 Reviews
                    </span>
                  </div>
                  <p className="text-lg font-bold text-gray-600">
                    Dr. Someone Clinic
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="material-icons align-middle text-gray-500 -ml-1">
                      place
                    </span>
                    {""} Somewhere, Uganda
                  </p>
                  <div className="flex gap-3">
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      clinic
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      hospital
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      $$
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md shadow mx-w-xl overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/public/images/20210221-KXCoffeeGym29.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-6 py-4 space-y-2">
                  <div className="flex items-center text-sm">
                    <span className="material-icons text-amber-400">grade</span>
                    <span className="material-icons text-amber-400">grade</span>
                    <span className="material-icons text-amber-400">grade</span>
                    <span className="material-icons text-amber-400">grade</span>
                    <span className="material-icons text-amber-400">
                      star_half
                    </span>
                    <span className="ml-2 text-xs text-gray-600">
                      294 Reviews
                    </span>
                  </div>
                  <p className="text-lg font-bold text-gray-600">Grade Gym</p>
                  <p className="text-sm text-gray-600">
                    <span className="material-icons align-middle text-gray-500 -ml-1">
                      place
                    </span>
                    {""} Somewhere, Uganda
                  </p>
                  <div className="flex gap-3">
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      clinic
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      hospital
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      $$
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md shadow mx-w-xl overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/public/images/download.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-6 py-4 space-y-2 relative">
                  <div className="flex items-center text-sm">
                    <span className="material-icons text-amber-400">grade</span>
                    <span className="material-icons text-amber-400">grade</span>
                    <span className="material-icons text-amber-400">grade</span>
                    <span className="material-icons text-amber-400">grade</span>
                    <span className="material-icons text-amber-400">
                      star_half
                    </span>
                    <span className="ml-2 text-xs text-gray-600">
                      294 Reviews
                    </span>
                  </div>
                  <p className="text-lg font-bold text-gray-600">
                    Insane Burgers
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="material-icons align-middle text-gray-500 -ml-1">
                      place
                    </span>
                    {""} Somewhere, Uganda
                  </p>
                  <div className="flex gap-3">
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      clinic
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      hospital
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      $$
                    </span>
                  </div>
                  <div className="absolute right-3 bottom-3">
                    <span className="material-icons text-red-500">
                      local_fire_department
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md shadow mx-w-xl overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/public/images/images (1).jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-6 py-4 space-y-2">
                  <div className="flex items-center text-sm">
                    <span className="material-icons text-amber-400">grade</span>
                    <span className="material-icons text-amber-400">grade</span>
                    <span className="material-icons text-amber-400">grade</span>
                    <span className="material-icons text-amber-400">grade</span>
                    <span className="material-icons text-amber-400">
                      star_half
                    </span>
                    <span className="ml-2 text-xs text-gray-600">
                      294 Reviews
                    </span>
                  </div>
                  <p className="text-lg font-bold text-gray-600">
                    Dr. Someone Clinic
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="material-icons align-middle text-gray-500 -ml-1">
                      place
                    </span>
                    {""} Somewhere, Uganda
                  </p>
                  <div className="flex gap-3">
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      clinic
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      hospital
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      $$
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md shadow mx-w-xl overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/public/images/res-pic (7).jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-6 py-4 space-y-2">
                  <div className="flex items-center text-sm">
                    <span className="material-icons text-amber-400">grade</span>
                    <span className="material-icons text-amber-400">grade</span>
                    <span className="material-icons text-amber-400">grade</span>
                    <span className="material-icons text-amber-400">grade</span>
                    <span className="material-icons text-amber-400">
                      star_half
                    </span>
                    <span className="ml-2 text-xs text-gray-600">
                      294 Reviews
                    </span>
                  </div>
                  <p className="text-lg font-bold text-gray-600">
                    Fancy Restaurant
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="material-icons align-middle text-gray-500 -ml-1">
                      place
                    </span>
                    {""} Somewhere, Uganda
                  </p>
                  <div className="flex gap-3">
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      clinic
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      hospital
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      $$
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md shadow mx-w-xl overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/public/images/hero/hero_1.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-6 py-4 space-y-2">
                  <div className="flex items-center text-sm">
                    <span className="material-icons text-amber-400">grade</span>
                    <span className="material-icons text-amber-400">grade</span>
                    <span className="material-icons text-amber-400">grade</span>
                    <span className="material-icons text-amber-400">grade</span>
                    <span className="material-icons text-amber-400">
                      star_half
                    </span>
                    <span className="ml-2 text-xs text-gray-600">
                      294 Reviews
                    </span>
                  </div>
                  <p className="text-lg font-bold text-gray-600">
                    Shopping Stall
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="material-icons align-middle text-gray-500 -ml-1">
                      place
                    </span>
                    {""} Somewhere, Uganda
                  </p>
                  <div className="flex gap-3">
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      clinic
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      hospital
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      $$
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <button className="rounded-md py-2.5 px-6 bg-white border border-gray-100 text-lg shadow hover:shadow-lg text-gray-600">
                🚀Discover More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
