import { Component, createSignal } from "solid-js";

import Header from "@components/Header";
import Card from "@components/Card";
import Button from "@components/Button";
import Preview from "@components/Preview";
import GetStarted from "@components/GetStarted";

const Main: Component = () => {
  const [links, setLinks] = createSignal([]);

  return (
    <div class="flex flex-col bg-light-gray min-h-screen transition-all">
      <Header />
      <main class="flex p-4 gap-6 md:px-6 flex-1">
        <Preview />
        <Card button buttonDisabled={!links().length}>
          <div class="flex flex-col gap-10 h-full">
            <div class="flex flex-col gap-2">
              <div class="font-bold text-lg"> Customize your links</div>
              <div class="text-base text-gray">
                Add/edit/remove links bellow and then share all you profiles
                with the world!
              </div>
            </div>
            <div class="flex flex-col gap-6 h-full">
              <Button
                secondary
                label="+ Add new link"
                onClick={() => {}}
              />
              <GetStarted />
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Main;
