import { useNavigate } from "@solidjs/router";
import { Component } from "solid-js";

import Button from "@components/Button";

const PreviewHeader: Component = () => {
  const navigate = useNavigate();

  const backToEditor = () => navigate("/");
  const shareLink = () => console.log("share link");

  return (
    <div class="flex px-6 py-4 gap-4 bg-white rounded-xl justify-between w-full">
      <div class="w-full md:max-w-[153px]">
        <Button onClick={backToEditor} secondary label="Back to editor" />
      </div>
      <div class="w-full md:max-w-[153px]">
        <Button onClick={shareLink} label="Share Link" />
      </div>
    </div>
  );
};

export default PreviewHeader;
