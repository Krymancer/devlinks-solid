import { Component, Match, Switch } from "solid-js";

import Github from "@images/icon-github.svg";
import FrontendMentor from "@images/icon-frontend-mentor.svg";
import Twitter from "@images/icon-twitter.svg";
import Linkedin from "@images/icon-linkedin.svg";
import Youtube from "@images/icon-youtube.svg";
import Facebook from "@images/icon-facebook.svg";
import Twitch from "@images/icon-twitch.svg";
import DevTo from "@images/icon-devto.svg";
import Codewars from "@images/icon-codewars.svg";
import Codepen from "@images/icon-codepen.svg";
import FreeCodeCamp from "@images/icon-freecodecamp.svg";
import Gitlab from "@images/icon-gitlab.svg";
import Hashnode from "@images/icon-hashnode.svg";
import StackOverflow from "@images/icon-stack-overflow.svg";

import LinkIcon from '@images/icon-link-copied-to-clipboard.svg';


interface SocialIconProps {
  label: string;
}

const SocialIcon: Component<SocialIconProps> = (props) => {
  return (
    <Switch fallback={<LinkIcon />}>
      <Match when={props.label === "Github"}>
        <Github />
      </Match>
      <Match when={props.label === "Frontend Mentor"}>
        <FrontendMentor />
      </Match>
      <Match when={props.label === "Twitter"}>
        <Twitter />
      </Match>
      <Match when={props.label === "Linkedin"}>
        <Linkedin />
      </Match>
      <Match when={props.label === "YouTube"}>
        <Youtube />
      </Match>
      <Match when={props.label === "Facebook"}>
        <Facebook />
      </Match>
      <Match when={props.label === "Twitch"}>
        <Twitch />
      </Match>
      <Match when={props.label === "DevTo"}>
        <DevTo />
      </Match>
      <Match when={props.label === "Codewars"}>
        <Codewars />
      </Match>
      <Match when={props.label === "Codepen"}>
        <Codepen />
      </Match>
      <Match when={props.label === "freeCodeCamp"}>
        <FreeCodeCamp />
      </Match>
      <Match when={props.label === "GitLab"}>
        <Gitlab />
      </Match>
      <Match when={props.label === "Hashnode"}>
        <Hashnode />
      </Match>
      <Match when={props.label === "StackOverflow"}>
        <StackOverflow />
      </Match>
    </Switch>
  );
};

export default SocialIcon;
