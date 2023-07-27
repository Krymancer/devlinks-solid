import { Component, createSignal } from "solid-js"

import Dropdown from "@components/Dropdown";
import TextInput from "@components/TextInput";
import Button from "@components/Button";
import ImageUpload from "@components/ImageUpload";

const Layout: Component = () => {
  const [text, setText] = createSignal('');
  return(
    <div class="w-screen flex flex-col items-center justify-center px-48 pt-10 gap-8">
      <h1 class="font-bold text-xl">Components</h1>      
      <Dropdown />      
      <TextInput text={text} setText={setText} />
      <Button label="Button" onClick={() => {}} />
      <Button label="Button" onClick={() => {}} active />
      <Button label="Button" onClick={() => {}} disabled />
      <Button label="Button" onClick={() => {}} type="secondary" />
      <Button label="Button" onClick={() => {}} type="secondary" active />
      <Button label="Button" onClick={() => {}} type="secondary"disabled />
      <ImageUpload />
    </div>
  )
};

export default Layout;