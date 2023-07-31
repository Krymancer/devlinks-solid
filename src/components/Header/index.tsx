import { Component } from "solid-js";
import { useLocation, useNavigate } from "@solidjs/router";

import Logo from "@images/logo-devlinks-small.svg";
import LargeLogo from "@images/logo-devlinks-large.svg";

import LinkIcon from "@images/icon-links-header.svg";
import ProfileDeatilsIcon from "@images/icon-profile-details-header.svg";
import PreviewIcon from "@images/icon-preview-header.svg";

const baseClasses =
  "flex gap-2 font-base items-center justify-center px-7 py-[11px] text-gray hover:text-purple cursor-pointer transition-all";
const activeClasses =
  "flex gap-2 font-base items-center justify-center rounded-lg px-7 py-[11px] text-purple bg-light-purple cursor-pointer transition-all";

const Header: Component = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const linkClick = () => navigate("/");
  const profileClick = () => navigate("/profile");
  const previewClick = () => navigate("/preview");

  return (
    <header class="px-6 py-4 md:p-6 bg-white md:bg-transparent transition-all">
      <div class="bg-white flex items-center justify-between md:px-6 md:py-2 rounded-xl">
      <div class="p-[5px]">
        <div class="mr-5 md:hidden">
          <Logo />
        </div>
        <div class="hidden md:flex">
        <LargeLogo />
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div
          class={pathname === "/" ? activeClasses : baseClasses}
          onClick={linkClick}
        >
          <LinkIcon />
          <span class="hidden md:flex">Links</span>
        </div>
        <div
          class={pathname === "/profile" ? activeClasses : baseClasses}
          onClick={profileClick}
        >
          <ProfileDeatilsIcon />
          <span class="hidden md:flex">Profile Details</span>
        </div>
      </div>

      <div class="box-border border-purple border rounded-lg px-4 py-[10px] cursor-pointer hover:bg-purple-hover" onClick={previewClick}>
        <div class="md:hidden">
          <PreviewIcon />
        </div>
        <span class="hidden md:flex text-purple font-bold">Preview</span>
      </div>
      </div>
    </header>
  );
};

export default Header;
