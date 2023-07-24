import { Component, JSXElement } from "solid-js";

import Button from "@components/Button";

const Card : Component<{children: JSXElement }> = (props) => {
  return(
    <div class="flex flex-col rounded-xl bg-white">
      <div class="p-6 md:p-6">
        {props.children}
      </div>
      <div class="self-end w-full border-boders border-t  p-6 md:p-6 flex gap-1 flex-col">
        <Button type="primary" disabled label="Save" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Card;