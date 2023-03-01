import React from "react";

const NavBar = () => {
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
    </>
  );
};

export default NavBar;
