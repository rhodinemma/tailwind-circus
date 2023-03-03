import React from "react";

const DiscoverByCategories = () => {
  return (
    <>
      <div className="bg-sky-50 py-32">
        <div className="w-9/12 mx-auto">
          <div className="text-center mb-12">
            <p className="text-4xl font-bold text-gray-600">
              Discover by Categories
            </p>
            <p className="text-gray-600">Discover Places by Categories</p>
          </div>
          <div>
            <div className="grid grid-cols-4 gap-10">
              <a
                href="#"
                className="p-4 bg-white w-48 shadow hover:shadow space-y-5 rounded-lg"
              >
                <img
                  src="/images/icons/566024_coffee_cafe_cup_drink_espresso_icon.png"
                  alt=""
                  className="w-20 h-20 mx-auto rounded-full"
                />
                <div className="space-y-2 text-center">
                  <p className="text-gray-700 text-lg font-semibold mb-3">
                    Coffee & Tea
                  </p>
                </div>
              </a>
              <a
                href="#"
                className="p-4 bg-white w-48 shadow hover:shadow space-y-5 rounded-lg"
              >
                <img
                  src="/images/icons/531911_camera_device_entertainment_film_media_icon.png"
                  alt=""
                  className="w-20 h-20 mx-auto rounded-full"
                />
                <div className="space-y-2 text-center">
                  <p className="text-gray-700 text-lg font-semibold mb-3">
                    Entertainment
                  </p>
                </div>
              </a>
              <a
                href="#"
                className="p-4 bg-white w-48 shadow hover:shadow space-y-5 rounded-lg"
              >
                <img
                  src="/images/icons/hotel.png"
                  alt=""
                  className="w-20 h-20 mx-auto rounded-full"
                />
                <div className="space-y-2 text-center">
                  <p className="text-gray-700 text-lg font-semibold mb-3">
                    Hotels & Travel
                  </p>
                </div>
              </a>
              <a
                href="#"
                className="p-4 bg-white w-48 shadow hover:shadow space-y-5 rounded-lg"
              >
                <img
                  src="/images/icons/health.png"
                  alt=""
                  className="w-20 h-20 mx-auto rounded-full"
                />
                <div className="space-y-2 text-center">
                  <p className="text-gray-700 text-lg font-semibold mb-3">
                    Health & Medical
                  </p>
                </div>
              </a>
              <a
                href="#"
                className="p-4 bg-white w-48 shadow hover:shadow space-y-5 rounded-lg"
              >
                <img
                  src="/images/icons/school.png"
                  alt=""
                  className="w-20 h-20 mx-auto rounded-full"
                />
                <div className="space-y-2 text-center">
                  <p className="text-gray-700 text-lg font-semibold mb-3">
                    School
                  </p>
                </div>
              </a>
              <a
                href="#"
                className="p-4 bg-white w-48 shadow hover:shadow space-y-5 rounded-lg"
              >
                <img
                  src="/images/icons/shopping.png"
                  alt=""
                  className="w-20 h-20 mx-auto rounded-full"
                />
                <div className="space-y-2 text-center">
                  <p className="text-gray-700 text-lg font-semibold mb-3">
                    Shopping
                  </p>
                </div>
              </a>
              <a
                href="#"
                className="p-4 bg-white w-48 shadow hover:shadow space-y-5 rounded-lg"
              >
                <img
                  src="/images/icons/automotive.png"
                  alt=""
                  className="w-20 h-20 mx-auto rounded-full"
                />
                <div className="space-y-2 text-center">
                  <p className="text-gray-700 text-lg font-semibold mb-3">
                    Automotive
                  </p>
                </div>
              </a>
              <a
                href="#"
                className="p-4 bg-white w-48 shadow hover:shadow space-y-5 rounded-lg"
              >
                <img
                  src="/images/icons/home.png"
                  alt=""
                  className="w-20 h-20 mx-auto rounded-full"
                />
                <div className="space-y-2 text-center">
                  <p className="text-gray-700 text-lg font-semibold mb-3">
                    Motel & Lodge
                  </p>
                </div>
              </a>
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

export default DiscoverByCategories;
