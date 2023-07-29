import { Component, JSXElement } from "solid-js";

import Button from "@components/Button";

const Card : Component<{children: JSXElement }> = (props) => {
  return(
    <div class="flex flex-col rounded-xl bg-white justify-between">
      <div class="p-6">
        {props.children}
      </div>
      <div class="w-full border-boders border-t  p-6 md:p-6 flex gap-1 flex-col md:justify-end md:items-end">
        <Button type="primary" disabled label="Save" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Card;