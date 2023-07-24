import { Component } from "solid-js";

import IlustrationEmpty from '@images/illustration-empty.svg';
import Header from "@components/Header";
import Card from "@components/Card";

const Main : Component = () => {
  return (
    <div class="bg-light-gray min-h-screen">
      <Header />
      <main class="p-4 md:px-6 py-0">
        <Card>
          <span> test </span>
        </Card>
      </main>
    </div>
  );
}

export default Main;