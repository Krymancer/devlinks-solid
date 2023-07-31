import Link from "@components/Link";
import { Accessor, Component, For, Show } from "solid-js";

interface PreviewProps {
  items: Accessor<{platform: string, url: string}[]>;
}

const Preview: Component<PreviewProps> = (props) => {
  const baseY = 278;
  const yIncrement = 64;

  return (
    <div class="hidden sticky top-4 lg:flex items-center justify-center bg-white p-6 w-[500px] rounded-xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="308"
        height="632"
        fill="none"
        viewBox="0 0 308 632"
      >
        <path
          stroke="#737373"
          d="M1 54.5C1 24.953 24.953 1 54.5 1h199C283.047 1 307 24.953 307 54.5v523c0 29.547-23.953 53.5-53.5 53.5h-199C24.953 631 1 607.047 1 577.5v-523Z"
        />
        <path
          fill="#fff"
          stroke="#737373"
          d="M12 55.5C12 30.923 31.923 11 56.5 11h24C86.851 11 92 16.149 92 22.5c0 8.008 6.492 14.5 14.5 14.5h95c8.008 0 14.5-6.492 14.5-14.5 0-6.351 5.149-11.5 11.5-11.5h24c24.577 0 44.5 19.923 44.5 44.5v521c0 24.577-19.923 44.5-44.5 44.5h-195C31.923 621 12 601.077 12 576.5v-521Z"
        />
        <foreignObject x="108" y="80" width="96" height="96" >
          <div class="rounded-full bg-[#EEE] w-full h-full"></div>
        </foreignObject>

        <rect width="160" height="16" x="73.5" y="185" fill="#EEE" rx="8" />
        <rect width="72" height="8" x="117.5" y="214" fill="#EEE" rx="4" />

        <For each={new Array(5)}>
          {(_, index) => (
            <foreignObject x="35" y={baseY + (index() * yIncrement)} width="237" height="44">
            <Show when={props.items()[index()]} fallback={<div class="w-full h-full flex items-center justify-center bg-[#EEE] rounded-lg "></div>}>
              <Link label={props.items()[index()].platform} href={props.items()[index()].url} />
            </Show>
          </foreignObject>
          )}
        </For>
      </svg>
    </div>
  );
};

export default Preview;
