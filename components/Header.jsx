import React from "react";
import Logo from "./Logo";
import { CiMenuFries } from "react-icons/ci";
import { MdFileDownload } from "react-icons/md";
//components
import {
  Sheet,
  SheetContent,
  SheetDiscription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import NavLinks from "./NavLinks";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="2xl:hidden absolute z-40 left-0 top-0 right-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-6">
          {/* Logo go here */}
          <Logo />
          {/* Navigation mobile - (Sheet Component) Shadcn.com */}
          <Sheet>
            <SheetTrigger className="cursor-pointer text-[30px] text-white">
              <CiMenuFries />
            </SheetTrigger>
            <SheetContent
              className="bg-primary border-0 flex flex-col justify-between items-center pt-16 pb-20"
              side="left"
            >
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
                <SheetDiscription className="sr-only">
                  Navigation menu
                </SheetDiscription>
              </SheetHeader>
              <NavLinks containerStyles="flex flex-col gap-8 max-w-[100px]" />
              <div>
                <button className="btn btn-lg btn-tertiary mb-16">
                  <div className="flex items-center gap-3">
                    <span>Download CV</span>
                    <MdFileDownload className="text-xl" />
                  </div>
                </button>
                <Socials
                  containerStyles="flex gap-4"
                  iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[40px] h-[40px] text-[20px] flex items-center rounded-full cursor-pointer"
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
