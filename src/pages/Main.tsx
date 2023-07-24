import { Component } from "solid-js";

import IlustrationEmpty from '@images/illustration-empty.svg';
import Header from "@components/Header";
import Card from "@components/Card";
import Button from "@components/Button";

const Main : Component = () => {
  return (
    <div class="bg-light-gray min-h-screen">
      <Header />
      <main class="p-4 md:px-6 py-0">
        <Card>
          <div class="flex flex-col gap-10">
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
    <div class="flex flex-col rounded-xl bg-light-gray px-5 py-10 gap-6">
      <div class="h-20 flex items-center justify-center">
        <IlustrationEmpty class="scale-50 " />
      </div>
      <div class="font-bold text-lg">Let's get you started</div>
      <div>Use the "Add new link" button to get started. Once you have more than one link, you can reorder and edit them. We're here to help you share you profiles with everyone!</div>
    </div>
  );
}

export default Main;