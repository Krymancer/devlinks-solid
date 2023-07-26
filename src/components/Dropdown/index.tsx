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

const baseItemClass = 'flex gap-3 cursor-pointer items-center px-4 py-3';
const activeItemClass = 'flex gap-3 cursor-pointer items-center px-4 py-3 text-purple';

const Item: Component<ItemProps> = (props) => {
  return (
    <div class={props.active ? activeItemClass : baseItemClass}>
        <props.icon fill="red" /> {props.label}
      </div>
  );
};

const baseClass = 'flex gap-4 border border-boders rounded-lg cursor-pointer items-center px-4 py-3 w-[480px] justify-between hover:border-purple hover:shadow-[0_0_10px_#633CFF]';
const activeClass = 'flex gap-4 border border-purple shadown shadown-purple rounded-lg cursor-pointer items-center px-4 py-3 w-[480px] justify-between shadow-[0_0_10px_#633CFF]';

const Dropdown: Component = () => {
  const [active, SetActive] = createSignal(false);
  const items = [
    {
      icon: Github,
      label: 'Github',
      active: true,
    },
    {
      icon: FrontendMentor,
      label: 'Frontend Mentor',
      active: false,
    },
    {
      icon: Twitter,
      label: 'Twitter',
      active: false,
    },
    {
      icon: Linkedin,
      label: 'Linkedin',
      active: false,
    },
    {
      icon: Youtube,
      label: 'Youtube',
      active: false,
    },
    {
      icon: Facebook,
      label: 'Facebook',
      active: false,
    },
    {
      icon: Twitch,
      label: 'Twitch',
      active: false,
    },
    {
      icon: DevTo,
      label: 'DevTo',
      active: false,
    },
    {
      icon: Codewars,
      label: 'Codewars',
      active: false,
    },
    {
      icon: Codepen,
      label: 'Codepen',
      active: false,
    },
    {
      icon: freeCodeCamp,
      label: 'freeCodeCamp',
      active: false,
    },
    {
      icon: Gitlab,
      label: 'Gitlab',
      active: false,
    },
    {
      icon: Hashnode,
      label: 'Hashnode',
      active: false,
    },
    {
      icon: StackOverflow,
      label: 'StackOverflow',
      active: false,
    }
  ];

  const handleClick = () => SetActive(!active());

  const handleItemClick = (item: {label: string, active?: boolean, icon: Component<JSX.SvgSVGAttributes<SVGSVGElement>>}) => {
    SetActive(false);
    items.forEach(item => item.active = false);
    item.active = true;
  }

  const activeItem = () => items.find(item => item.active)!;

  return(
    <div>
      <div class={active() ? activeClass : baseClass} onClick={handleClick}>
        <Item label={activeItem().label} icon={activeItem().icon} />
        <ChevronDown />
      </div>
      <Show when={active()}>
        <div id="dropdown" class="z-10 bg-white rounded-lg  w-[480px] shadow-md transition-all absolute mt-[10px]">
            <For each={items}>
              {(item, index) => (
                <div onClick={() => handleItemClick(item)}>
                  <Item label={item.label} icon={item.icon} active={item.active} />
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