import { Component, JSXElement } from "solid-js";

import Button from "@components/Button";

const Card : Component<{children: JSXElement }> = (props) => {
  return(
    <div class="flex flex-col rounded-xl bg-white flex-1 justify-between">
      <div class="flex p-6 md:p-6 flex-1">
        {props.children}
      </div>
      <div class="self-end justify-self-end w-full border-boders border-t  p-6 md:p-6 flex gap-1 flex-col md:justify-end md:items-end">
        <Button type="primary" disabled label="Save" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Card;