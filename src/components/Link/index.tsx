import { Component } from "solid-js";

interface LinkProps {
  label: string;
  href: string;
}

interface LookcupTable {
  [key: string]: string;
}

const loockup : LookcupTable = {
  "Github": "bg-[#1A1A1A] text-white ",
  "Frontend Mentor": "bg-[#FFFFFF] text-[#000] ",
  "Codepen": "bg-[#FFFFFF] text-[#000] ",
  "Twitter": "bg-[#26A7DE] text-white ",
  "Linkedin": "bg-[#0072B1] text-white ",
  "YouTube": "bg-[#FF0000] text-white",
  "Facebook": "bg-[#3B5998] text-white ",
  "Twitch": "bg-[#9146FF] text-white ",
  "Dev.to": "bg-[#333333] text-white ",
  "Codewars": "bg-[#333333] text-white ",
  "freeCodeCamp": "bg-[#302267] text-white ",
  "GitLab": "bg-[#EB4925] text-white ",
  "Hashnode": "bg-[#2962FF] text-white ",
  "Stack Overflow": "bg-[#F48024] text-white ",
};

import RightArrow from "@images/icon-arrow-right.svg";
import SocialIcon from "@components/SocialIcon";

const Link: Component<LinkProps> = (props) => {
  return (
    <a class="w-full h-full" href={props.href} target="_blank">
      <div class={'flex px-4 py-[11px] rounded-lg items-center text-white justify-between border border-boders w-full ' + loockup[props.label]}>
        <div class={"flex gap-2 items-center w-full h-full " + loockup[props.label]}>
          <SocialIcon label={props.label} />
          <div class="flex items-center h-[18px] ">{props.label}</div>
        </div>
        <RightArrow />
      </div>
    </a>
  );
};

export default Link;
