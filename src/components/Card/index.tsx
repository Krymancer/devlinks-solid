import { Component, JSXElement, Show } from "solid-js";

import Button from "@components/Button";

interface CardProps {
  children: JSXElement;
  button?: boolean;
}

const Card : Component<CardProps> = (props) => {
  return(
    <div class="flex flex-col rounded-xl bg-white justify-between w-full">
      <div class="p-6 h-full">
        {props.children}
      </div>
      <Show when={props.button}>
        <div class="w-full border-boders border-t  p-6 md:p-6 flex gap-1 flex-col md:justify-end md:items-end">
          <div class="w-full md:w-[91px]">
            <Button disabled label="Save" onClick={() => {}} />
          </div>
        </div>
      </Show>
    </div>
  );
};

export default Card;