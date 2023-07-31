import AddLink from "@components/AddLink";
import { Accessor, Component, For, createSignal } from "solid-js";

interface LinkProps {
  items: Accessor<Link[]>,
  setItems: (items: Link[]) => void
}

interface Link {
  platform: string;
  url: string;
}

const Links: Component<LinkProps> = (props) => {

  const selected = (index: Accessor<number>) => {
    return (() => props.items()[index()].platform);
  };

  const setSelected = (index: Accessor<number>, s: string) => {
    props.items()[index()].platform = s;
    props.setItems([ ...props.items()]);
  };

  const url = (index: Accessor<number>) => {
    return (() => props.items()[index()].url);
  };

  const setUrl = (index: Accessor<number>, s: string) => {
    props.items()[index()].url = s;
    props.setItems([ ...props.items()]);
  };

  return (
    <For each={props.items()}>
    {(_, index) => (
      <AddLink selected={selected(index)} setSelected={(s: string) => setSelected(index, s)} url={url(index)} setUrl={(s: string) => setUrl} />
    )}
  </For>
  )
};

export default Links;