import { Component, For, Match, Show, Switch, createSignal } from "solid-js";

import ChevronDown from '@images/icon-chevron-down.svg'
import SocialIcon from "@components/SocialIcon";

interface DropdownItemProps {
  label: string;
  active?: boolean;
}

const baseItemClass = 'flex gap-3 cursor-pointer items-center hover:text-purple-hover transition-all select-none';
const activeItemClass = 'flex gap-3 cursor-pointer items-center text-purple trasition-all select-none';

const DropdownItem: Component<DropdownItemProps> = (props) => {
  return (
    <div class={props.active ? activeItemClass : baseItemClass}>
      <SocialIcon label={props.label} />
      {props.label}
      </div>
  );
};

const baseClass = 'flex gap-4 border border-boders rounded-lg cursor-pointer items-center px-4 py-3 w-full justify-between hover:border-purple hover:shadow-[0_0_10px_#633CFF] select-none relative';
const activeClass = 'flex gap-4 border border-purple shadown shadown-purple rounded-lg cursor-pointer items-center px-4 py-3 w-full justify-between shadow-[0_0_10px_#633CFF] select-none relative';

interface DropdownProps {
  items: string[];
  setItem: (s: string) => void;
}

const Dropdown: Component<DropdownProps> = (props) => {
  const [active, SetActive] = createSignal(false);
  const [activeItem, setActiveItem] = createSignal(props.items[0]);

  const handleClick = () => SetActive(!active());

  const handleItemClick = (item: string) => {
    SetActive(false);
    setActiveItem(item);
    props.setItem(item);
  }

  return(
    <div class="w-full relative">
      <div class={active() ? activeClass : baseClass} onClick={handleClick}>
        <Switch fallback={<DropdownItem label="Select..." />}>
          <Match when={activeItem()}>
            <DropdownItem label={activeItem()}/>
          </Match>
        </Switch>
        <ChevronDown />
      </div>
      <Show when={active()}>
        <div class="z-10 bg-white rounded-lg  transition-all absolute mt-[10px] shadow-lg w-full">
            <For each={props.items}>
              {(item, index) => (
                <div class="cursor-pointer" onClick={() => handleItemClick(item)}>
                  <div class="px-4 py-3">
                    <DropdownItem label={item} active={item === activeItem()} />
                  </div>
                  <Show when={index() !== props.items.length - 1}>
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