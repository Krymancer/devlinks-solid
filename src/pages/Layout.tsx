import { Component, For, createSignal } from "solid-js";

import Dropdown from "@components/Dropdown";
import TextInput from "@components/TextInput";
import Button from "@components/Button";
import ImageUpload from "@components/ImageUpload";
import Link from "@components/Link";

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

const Layout: Component = () => {
  const [text, setText] = createSignal("");
  const [value, setValue] = createSignal({} as any);

  return (
    <div class="w-[800px] flex flex-col items-center justify-center px-48 pt-10 gap-8">
      <h1 class="font-bold text-xl">Components</h1>
      <Dropdown items={items} setItem={setValue} />
      <TextInput text={text} setText={setText} />
      <Button label="Button" onClick={() => {}} />
      <Button label="Button" onClick={() => {}} active />
      <Button label="Button" onClick={() => {}} disabled />
      <Button label="Button" onClick={() => {}} type="secondary" />
      <Button label="Button" onClick={() => {}} type="secondary" active />
      <Button label="Button" onClick={() => {}} type="secondary" disabled />
      <ImageUpload />
      <For each={items}>
        {(item) => (
          <Link label={item} href="#" />
        )}
      </For>
    </div>
  );
};

export default Layout;
