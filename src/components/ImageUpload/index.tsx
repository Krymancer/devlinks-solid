import { Component } from "solid-js";


import UploadImageIcon from '@images/icon-upload-image.svg'


const ImageUpload: Component = () => {
  return(
    <div class="flex flex-col items-center justify-center text-purple bg-light-purple w-48 h-48 rounded-lg cursor-pointer">
      <UploadImageIcon />
      <div class="text-center text-purple font-bold flex items-center">+ Upload Image</div>
    </div>
  );
};

export default ImageUpload;