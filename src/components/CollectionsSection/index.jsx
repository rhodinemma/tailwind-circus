import React from "react";

const CollectionsSection = () => {
  return (
    <>
      <div className="bg-slate-100 py-32">
        <div className="w-8/12 mx-auto">
          <div className="text-center mb-12">
            <p className="text-4xl font-bold text-gray-600 mb-3">Collections</p>
            <p className="text-gray-600">
              Discover List of Top Places By Collection
            </p>
          </div>

          <div>
            <div className="grid grid-cols-4 gap-10">
              <div className="relative w-56 h-64 overflow-hidden shadow-md hover:shadow-lg">
                <img
                  src="/images/dental 1.jpg"
                  className="rounded w-full h-full object-cover shadow"
                  alt=""
                />
                <div className="bg-gradient-to-t from-black via-transparent inset-0 absolute rounded"></div>
                <div className="absolute bottom-2 left-3">
                  <p className="text-white text-lg font-semibold">
                    Newly Opened
                  </p>
                  <p className="text-white text-sm">21 Places</p>
                </div>
              </div>
              <div className="relative w-56 h-64 overflow-hidden shadow-md hover:shadow-lg">
                <img
                  src="/images/dental 2.jpg"
                  className="rounded w-full h-full object-cover shadow"
                  alt=""
                />
                <div className="bg-gradient-to-t from-black via-transparent inset-0 absolute rounded"></div>
                <div className="absolute bottom-2 left-3">
                  <p className="text-white text-lg font-semibold">
                    Newly Opened
                  </p>
                  <p className="text-white text-sm">21 Places</p>
                </div>
              </div>
              <div className="relative w-56 h-64 overflow-hidden shadow-md hover:shadow-lg">
                <img
                  src="/images/dental 3.jpg"
                  className="rounded w-full h-full object-cover shadow"
                  alt=""
                />
                <div className="bg-gradient-to-t from-black via-transparent inset-0 absolute rounded"></div>
                <div className="absolute bottom-2 left-3">
                  <p className="text-white text-lg font-semibold">
                    Newly Opened
                  </p>
                  <p className="text-white text-sm">21 Places</p>
                </div>
              </div>
              <div className="relative w-56 h-64 overflow-hidden shadow-md hover:shadow-lg">
                <img
                  src="/images/res-pic (1).jpg"
                  className="rounded w-full h-full object-cover shadow"
                  alt=""
                />
                <div className="bg-gradient-to-t from-black via-transparent inset-0 absolute rounded"></div>
                <div className="absolute bottom-2 left-3">
                  <p className="text-white text-lg font-semibold">
                    Newly Opened
                  </p>
                  <p className="text-white text-sm">21 Places</p>
                </div>
              </div>
              <div className="relative w-56 h-64 overflow-hidden shadow-md hover:shadow-lg">
                <img
                  src="/images/res-pic (2).jpg"
                  className="rounded w-full h-full object-cover shadow"
                  alt=""
                />
                <div className="bg-gradient-to-t from-black via-transparent inset-0 absolute rounded"></div>
                <div className="absolute bottom-2 left-3">
                  <p className="text-white text-lg font-semibold">
                    Newly Opened
                  </p>
                  <p className="text-white text-sm">21 Places</p>
                </div>
              </div>
              <div className="relative w-56 h-64 overflow-hidden shadow-md hover:shadow-lg">
                <img
                  src="/images/res-pic (6).jpg"
                  className="rounded w-full h-full object-cover shadow"
                  alt=""
                />
                <div className="bg-gradient-to-t from-black via-transparent inset-0 absolute rounded"></div>
                <div className="absolute bottom-2 left-3">
                  <p className="text-white text-lg font-semibold">
                    Newly Opened
                  </p>
                  <p className="text-white text-sm">21 Places</p>
                </div>
              </div>
              <div className="relative w-56 h-64 overflow-hidden shadow-md hover:shadow-lg">
                <img
                  src="/images/res-pic (7).jpg"
                  className="rounded w-full h-full object-cover shadow"
                  alt=""
                />
                <div className="bg-gradient-to-t from-black via-transparent inset-0 absolute rounded"></div>
                <div className="absolute bottom-2 left-3">
                  <p className="text-white text-lg font-semibold">
                    Newly Opened
                  </p>
                  <p className="text-white text-sm">21 Places</p>
                </div>
              </div>
              <div className="relative w-56 h-64 overflow-hidden shadow-md hover:shadow-lg">
                <img
                  src="/images/res-pic (5).jpg"
                  className="rounded w-full h-full object-cover shadow"
                  alt=""
                />
                <div className="bg-gradient-to-t from-black via-transparent inset-0 absolute rounded"></div>
                <div className="absolute bottom-2 left-3">
                  <p className="text-white text-lg font-semibold">
                    Newly Opened
                  </p>
                  <p className="text-white text-sm">21 Places</p>
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
};

export default CollectionsSection;
