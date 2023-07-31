import { Component } from "solid-js";

import Link from "@components/Link";
import Card from "@components/Card";
import PreviewHeader from '@components/PreivewHeader';

const Preview: Component = () => {
  return(
    <div class="min-h-screen flex flex-col bg-white md:bg-light-gray items-center">
      <div class="hidden md:flex bg-purple rounded-b-[32px] h-[357px] w-full absolute z-10"></div>
      <div class="z-20 flex flex-col items-center w-full">
        <div class="md:p-6 w-full">
          <PreviewHeader />
        </div>
        <div class="min-w-fit flex items-center md:mt-[82px] md:w-[349px]">
          <Card>
            <div class="flex flex-col items-center gap-14 flex-1 mt-[36px]">
              <div class="flex flex-col items-center gap-[25px]">
                <div class="w-[104px] h-[104px] border-purple border-4 rounded-full"></div>
                <div class="flex flex-col gap-2 text-center">
                  <div class="font-bold text-xl h-12">Ben Wright</div>
                  <div class="text-gray text-base h-6">ben@example.com</div>
                </div>
              </div>
              <div class="w-[237px]">
                <Link label="Github" href="https://github.com/krymancer"/>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Preview;