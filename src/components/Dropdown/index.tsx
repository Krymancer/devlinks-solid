import { Component, For, JSX, JSXElement, Show, createSignal } from "solid-js";

import Github from '@images/icon-github.svg';
import FrontendMentor from '@images/icon-frontend-mentor.svg';
import Twitter from '@images/icon-twitter.svg';
import Linkedin from '@images/icon-linkedin.svg';
import Youtube from '@images/icon-youtube.svg';
import Facebook from '@images/icon-facebook.svg';
import Twitch from '@images/icon-twitch.svg';
import DevTo from '@images/icon-devto.svg';
import Codewars from '@images/icon-codewars.svg';
import Codepen from '@images/icon-codepen.svg';
import freeCodeCamp from '@images/icon-freecodecamp.svg';
import Gitlab from '@images/icon-gitlab.svg';
import Hashnode from '@images/icon-hashnode.svg';
import StackOverflow from '@images/icon-stack-overflow.svg';

import ChevronDown from '@images/icon-chevron-down.svg'

interface ItemProps {
  icon: Component<JSX.SvgSVGAttributes<SVGSVGElement>>;
  label: string;
  active?: boolean;
}

const baseItemClass = 'flex gap-3 cursor-pointer items-center px-4 py-3 hover:text-purple-hover transition-all select-none';
const activeItemClass = 'flex gap-3 cursor-pointer items-center px-4 py-3 text-purple trasition-all select-none';

const Item: Component<ItemProps> = (props) => {
  const Icon = props.icon;
  return (
    <div class={props.active ? activeItemClass : baseItemClass}>
      {// @ts-ignore /* Type 'Component<SvgSVGAttributes<SVGSVGElement>>' is not assignable to type 'string | Element'. <- Supress this error */
      props.icon}
      {props.label}
      </div>
  );
};

const baseClass = 'flex gap-4 border border-boders rounded-lg cursor-pointer items-center px-4 py-3 w-[480px] justify-between hover:border-purple hover:shadow-[0_0_10px_#633CFF] select-none';
const activeClass = 'flex gap-4 border border-purple shadown shadown-purple rounded-lg cursor-pointer items-center px-4 py-3 w-[480px] justify-between shadow-[0_0_10px_#633CFF] select-none';
const items = [
  {
    icon: Github,
    label: 'Github',
  },
  {
    icon: FrontendMentor,
    label: 'Frontend Mentor',
  },
  {
    icon: Twitter,
    label: 'Twitter',
  },
  {
    icon: Linkedin,
    label: 'Linkedin',
  },
  {
    icon: Youtube,
    label: 'Youtube',
  },
  {
    icon: Facebook,
    label: 'Facebook',
  },
  {
    icon: Twitch,
    label: 'Twitch',
  },
  {
    icon: DevTo,
    label: 'DevTo',
  },
  {
    icon: Codewars,
    label: 'Codewars',
  },
  {
    icon: Codepen,
    label: 'Codepen',
  },
  {
    icon: freeCodeCamp,
    label: 'freeCodeCamp',
  },
  {
    icon: Gitlab,
    label: 'Gitlab',
  },
  {
    icon: Hashnode,
    label: 'Hashnode',
  },
  {
    icon: StackOverflow,
    label: 'StackOverflow',
  }
];

const Dropdown: Component = () => {
  const [active, SetActive] = createSignal(false);
  const [activeItem, setActiveItem] = createSignal(items[0] as ItemProps);

  const handleClick = () => SetActive(!active());

  const handleItemClick = (item: ItemProps) => {
    SetActive(false);
    setActiveItem(item);
  }

  return(
    <div>
      <div class={active() ? activeClass : baseClass} onClick={handleClick}>
        <Item label={activeItem().label} icon={activeItem().icon} />
        <ChevronDown />
      </div>
      <Show when={active()}>
        <div id="dropdown" class="z-10 bg-white rounded-lg  w-[480px] transition-all absolute mt-[10px] shadow-lg">
            <For each={items}>
              {(item, index) => (
                <div onClick={() => handleItemClick(item)}>
                  <Item label={item.label} icon={item.icon} active={item.label === activeItem().label} />
                  <Show when={index() !== items.length - 1}>
                    <div class="px-4">
                      <div class="border-b border-boders w-full"></div>
                    </div>
                  </Show>
                </div>
              )}
            </For>
        </div>
      </Show>
    </div>
  );
};

export default Dropdown;