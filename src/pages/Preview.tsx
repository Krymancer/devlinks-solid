import { Component } from "solid-js";
import { useNavigate } from "@solidjs/router";

import Button from "@components/Button";
import Link from "@components/Link";

const Preview: Component = () => {
  return(
    <div class="min-h-screen flex flex-col">
      <PreviewHeader />
      <div class="flex flex-col items-center gap-14 flex-1 mt-[60px]">
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
    </div>
  );
};

const PreviewHeader: Component = () => {
  const navigate = useNavigate();

  const backToEditor = () => navigate('/');
  const shareLink = () => console.log('share link');

  return (
  <div class="flex px-6 py-4 gap-4">
    <Button onClick={backToEditor} type="secondary" label="Back to editor"/>
    <Button onClick={shareLink}  label="Share Link"/>
  </div>);
};

export default Preview;