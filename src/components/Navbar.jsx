import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";




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
          <Link to="/" className="text-lg font-semibold text-black-600">
            Home
          </Link>
        </li>
        <li>
          <Link to="/protected" className="text-lg font-semibold text-black-600">
            Protected
          </Link>
        </li>
        <li>
          <Link to="/public" className="text-lg font-semibold text-black-600">
            Public
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
