import { Component } from "solid-js";

import IlustrationEmpty from '@images/illustration-empty.svg';
import Header from "@components/Header";
import Card from "@components/Card";
import Button from "@components/Button";
import Preview from "@components/Preview";

const Main : Component = () => {
  return (
    <div class="flex flex-col bg-light-gray min-h-screen transition-all">
      <Header />
      <main class="flex p-4 gap-6 py-0 flex-1 md:px-6">
        <Preview />
        <Card>
          <div class="flex flex-col gap-10 flex-1">
            <div class="flex flex-col gap-2">
              <div class="font-bold text-lg"> Customize your links</div>
              <div>Add/edit/remove links bellow and then share all you profiles with the world!</div>
            </div>
            <div class="flex flex-col gap-6">              
              <Button type="secondary" label="+ Add new link" onClick={() => {}} />
            </div>
            <GetStarted />
          </div>
        </Card>
      </main>
    </div>
  );
}

const GetStarted = () => {
  return (
    <div class="flex flex-col rounded-xl bg-light-gray px-5 py-10 gap-6 items-center justify-center flex-1 lg:p-28 md:p-20">
      <div class="h-20 flex items-center justify-center md:h-full">
        <IlustrationEmpty class="scale-50 md:scale-100" />
      </div>
      <div class="font-bold text-lg text-center">Let's get you started</div>
      <div class="text-center">Use the "Add new link" button to get started. Once you have more than one link, you can reorder and edit them. We're here to help you share you profiles with everyone!</div>
    </div>
  );
}

export default Main;