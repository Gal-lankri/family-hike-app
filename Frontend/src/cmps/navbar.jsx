import React from "react";

function navbar() {
  return (
      <nav className="p-4 w-full shrink-0 h-16  flex justify-between items-center">
        <div className=" text-2xl font-bold">Hiking App</div>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className=" hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="/hikes" className=" hover:text-gray-400">
              Hikes
            </a>
          </li>
          <li>
            <a href="/about" className=" hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className=" hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
  );
}

export default navbar;
