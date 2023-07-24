import { Component, JSXElement } from "solid-js";

const Card : Component<{children: JSXElement }> = (props) => {
  return(
    <div class="rounded-xl bg-white p-6 md:p-6">
      {props.children}
    </div>
  );
};

export default Card;