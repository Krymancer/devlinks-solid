import { Component, Show, createSignal } from "solid-js";

import Header from "@components/Header";
import Card from "@components/Card";
import Button from "@components/Button";
import Preview from "@components/Preview";
import GetStarted from "@components/GetStarted";
import Links from "@components/Links";

interface Link {
  platform: string;
  url: string;
}

const Main: Component = () => {
  const [links, setLinks] = createSignal([] as Link[]);

  const addLinkClick = () => {
    if(links().length >= 5) return;
    setLinks([...links(), { platform: "Github", url: "" }]);
  }

  return (
    <div class="flex flex-col bg-light-gray min-h-screen transition-all">
      <Header />
      <main class="flex p-4 md:py-0  gap-6 md:px-6 flex-1 w-full">
        <div class="hidden md:flex">
          <Preview items={links} />
        </div>
        <Card button buttonDisabled={!links().length}>
          <div class="flex flex-col gap-10 p-6 h-full">
            <div class="flex flex-col gap-2">
              <div class="font-bold text-lg md:text-xl"> Customize your links</div>
              <div class="text-base text-gray">
                Add/edit/remove links bellow and then share all you profiles
                with the world!
              </div>
            </div>
            <div class="flex flex-col gap-6 h-full">
              <Button
                secondary
                label="+ Add new link"
                onClick={addLinkClick}
              />
              <div class="flex flex-col gap-6 h-full">
                <Show when={!links().length}>
                  <GetStarted />
                </Show>
                <Links items={links} setItems={setLinks}/>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Main;
