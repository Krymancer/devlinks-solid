import { Component } from "solid-js"

import Dropdown from "@components/Dropdown";

const Layout: Component = () => {
  return(
    <div class="h-screen w-screen flex flex-col items-center justify-center p-96">
      <h1>layout</h1>
      <Dropdown />
    </div>
  )
};

export default Layout;