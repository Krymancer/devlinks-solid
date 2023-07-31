import { Accessor, Component, For, createSignal } from "solid-js";

import { Id, useDragDropContext } from "@thisbeyond/solid-dnd";
import {
  DragDropProvider,
  DragDropSensors,
  DragOverlay,
  SortableProvider,
  createSortable,
  closestCenter,
} from "@thisbeyond/solid-dnd";

import AddLink from "@components/AddLink";
import Link from "@components/Link";
import DumbAddLink from "@components/DumbAddLink";

interface LinkProps {
  items: Accessor<Link[]>,
  setItems: (items: Link[]) => void
}

interface Link {
  platform: string;
  url: string;
}

const Links: Component<LinkProps> = (props) => {
  const [activeItem, setActiveItem] = createSignal(null as number | null);

  const ids = () => props.items().map((_, index) => index as Id);

  const onDragStart = ({draggable}: any) => {
    console.log(draggable);
    setActiveItem(draggable.id);}

  const onDragEnd = ({draggable, droppable} : any) => {
    console.log(draggable);
    console.log(droppable);
    if (draggable && droppable) {
      const currentItems = props.items();
      const fromIndex = draggable.id;
      const toIndex = droppable.id;

      console.log(fromIndex, toIndex);
      if (fromIndex !== toIndex) {
        const updatedItems = currentItems.slice();
        updatedItems.splice(toIndex, 0, ...updatedItems.splice(fromIndex, 1));
        props.setItems(updatedItems);
      }
    }
  };

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
    <DragDropProvider
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      collisionDetector={closestCenter}
    >
      <DragDropSensors />
      <SortableProvider ids={ids()}>
        <For each={props.items()}>
          {(_, index) => (
            <AddLink id={index} selected={selected(index)} setSelected={(s: string) => setSelected(index, s)} url={url(index)} setUrl={(s: string) => setUrl} />
          )}
        </For>
      </SortableProvider>
      <DragOverlay>
        <DumbAddLink id={() => activeItem() ?? 0} selected={() => props.items()[activeItem() ?? 0].platform} url={() => props.items()[activeItem() ?? 0].url} />
      </DragOverlay>
    </DragDropProvider>
  )
};

export default Links;