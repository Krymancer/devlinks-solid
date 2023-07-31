import { Component } from "solid-js";

import IlustrationEmpty from "@images/illustration-empty.svg";

const GetStarted: Component = () => {
  return (
    <div class="flex flex-col rounded-xl bg-light-gray p-5 gap-6 items-center justify-center h-full lg:p-28 md:p-20">
      <div class="flex flex-col gap-6">
        <div class="h-20 flex items-center justify-center md:h-full">
          <IlustrationEmpty class="scale-50 md:scale-100" />
        </div>
        <div class="font-bold text-lg md:text-xl text-center">Let's get you started</div>
        <div class="text-center text-gray text-base">
          Use the "Add new link" button to get started. Once you have more than
          one link, you can reorder and edit them. We're here to help you share
          you profiles with everyone!
        </div>
      </div>
    </div>
  );
};

export default GetStarted;