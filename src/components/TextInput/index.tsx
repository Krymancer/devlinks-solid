import { Accessor, Component, ComponentProps, Show, createSignal } from "solid-js";

interface TextInputProps {
  text: Accessor<string>;
  setText: (text: string) => void;
  icon?: Component<ComponentProps<'svg'>>;
  placeholder?: string;
}

import LinkIcon from '@images/icon-link-copied-to-clipboard.svg'

const baseClass = 'flex px-4 py-3 gap-3 border border-boders rounded-lg w-full hover:border-purple hover:shadow-[0_0_10px_#633CFF] focus-within:border-purple focus-within:shadow-[0_0_10px_#633CFF]';
const errorClass = 'flex px-4 py-3 gap-3 border border-red rounded-lg w-full text-red';
const baseInputClass = 'bg-transparent outline-none caret-purple border-none w-full';
const errorInputClass = 'bg-transparent outline-none caret-purple border-none w-full text-red';

const TextInput: Component<TextInputProps> = (props) => {
  const [error, setError] = createSignal(false);

  return <div class={error() ? errorClass : baseClass}>
    { // @ts-ignore
      props.icon ?? 
      LinkIcon
    }
    <input 
      class={error() ? errorInputClass : baseInputClass}
      type="text"
      placeholder={props.placeholder ?? 'Text input'}
      value={props.text()} 
      onChange={(e) => props.setText(e.target.value)}/>
      <Show when={error()}>
        <div class="text-sm flex items-center whitespace-nowrap">Please check againS</div>
      </Show>
  </div>
};

export default TextInput;