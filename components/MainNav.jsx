import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import DownloadCV from "./DownloadCV";

const MainNav = () => {
  return (
    <nav className="w-full pt-16">
      <div className="flex flex-col h-full items-center justify-between">
        <Logo />
        <NavLinks containerStyles="flex flex-col gap-6" />
        <DownloadCV />
      </div>
    </nav>
  );
};

export default MainNav;
