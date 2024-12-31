import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";




const Navbar = () => {
  return (
    <nav className="flex justify-center items-center">
      <ul className="flex justify-center space-x-6 p-4 bg-white shadow-lg w-full rounded-full border border-gray-300">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        <li>
          <a href="/" className="text-lg font-semibold text-black-600">
            Home
          </a>
        </li>
        <li>
          <a href="/protected" className="text-lg font-semibold text-black-600">
            Protected
          </a>
        </li>
        <li>
          <a href="/public" className="text-lg font-semibold text-black-600">
            Public
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
