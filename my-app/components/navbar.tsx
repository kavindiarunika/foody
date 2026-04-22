import React from "react";
import { Button } from "./ui/button";
import { Home, Contact, NotebookTabs, Store } from "lucide-react";
import Link from "next/link";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

function Navbar() {
  const navlinks = [
    {
      name: "Home",
      link: "/",
      icon: Home,
    },
    {
      name: "About",
      link: "/about",
      icon: NotebookTabs,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: Contact,
    },
    {
      name: "online store",
      link: "/food",
      icon: Store,
    },
  ];

  return (
    <div className="w-full h-20 bg-gray-600/50 flex">
      {/* desktop view */}
      <div className="w-full flex flex-row justify-between items-center px-4">
        {/* icon */}
        <img src="/logo.png" alt="logo" className="w-20 h-16" />

        {/* navlinks */}
        <div className="flex gap-24">
          {navlinks.map((links, index) => (
            <Link href={links.link} key={index} className="flex gap-2">
              <links.icon />
              <span>{links.name}</span>
            </Link>
          ))}
        </div>

        {/* auth buttons */}

        <div>
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <Show when="signed-out">
              <SignInButton />
              <SignUpButton>
                <button className="bg-purple-700 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </header>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
