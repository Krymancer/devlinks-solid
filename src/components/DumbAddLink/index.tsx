import { Accessor, Component, createSignal } from "solid-js";

import DragAndDropIcon from '@images/icon-drag-and-drop.svg'
import Dropdown from "@components/Dropdown";
import TextInput from "@components/TextInput";

interface Placeholder {
  [key: string]: string;
}

interface AddLinkProps {
  id: Accessor<number>;
  selected: Accessor<string>;
  url: Accessor<string>;
}

const DumbAddLink: Component<AddLinkProps> = (props) => {
  const items = [
    "Github",
    "Frontend Mentor",
    "Twitter",
    "Linkedin",
    "YouTube",
    "Facebook",
    "Twitch",
    "Dev.to",
    "Codewars",
    "Codepen",
    "freeCodeCamp",
    "GitLab",
    "Hashnode",
    "Stack Overflow",
  ];

  const placeholders: Placeholder = {
    "Github": "https://www.github.com/{username}",
    "Frontend Mentor": "https://www.frontendmentor.io/profile/{username}",
    "Twitter": "https://www.twitter.com/{username}",
    "Linkedin": "https://www.linkedin/in/{username}",
    "YouTube": "https://www.youtube.com/@{username}",
    "Facebook": "https://www.facebook.com/{username}",
    "Twitch": "https://www.twitch.com/{username}",
    "Dev.to": "https://www.dev.to/{username}",
    "Codewars": "https://www.codewars.com/users/.com/{username}",
    "Codepen": "https://www.codepen.io/{username}",
    "freeCodeCamp": "https://www.freecodecamp.com/{username}",
    "GitLab": "https://www.gitlab.com/{username}",
    "Hashnode": "https://www.hashnode.com/@{username}",
    "Stack Overflow": "https://www.stackoverflow.com/users/{userid}/{username}",
  };

  return(
    <div class="bg-light-gray flex flex-col p-5 gap-3 rounded-lg">
      <div class="flex text-gray items-center justify-between cursor-grab">
        <div class="flex items-center gap-2 text-gray">
          <DragAndDropIcon />
          <div class="font-base text-gray h-6 font-bold">Link #{props.id()}</div>
        </div>
        <div class="text-base cursor-pointer">Remove</div>
      </div>
      <div class="flex flex-col gap-1">
        <div class="text-sm">Platform</div>
        <Dropdown items={items} setItem={() => {}}/>
      </div>
      <div class="flex flex-col gap-1">
        <div class="text-sm">Link</div>
        <TextInput text={props.url} setText={() => {}} placeholder={placeholders[props.selected()]}/>
      </div>
    </div>
  );
};

export default DumbAddLink;