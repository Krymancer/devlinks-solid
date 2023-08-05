import { Component } from "solid-js";

interface ButtonProps {
  label: string;
  onClick: () => void;
  secondary?: boolean;
  disabled?: boolean;
  active?: boolean;
}
const baseClass = 'py-[10px] font-bold text-base rounded-lg flex items-center justify-center transition-all select-none w-full md:px-4';
const primaryClass = "bg-purple text-white hover:opacity-25 cursor-pointer";
const primaryDeactive = "bg-purple-hover text-white cursor-pointer hover:opacity-25";
const primaryDisabled = "bg-purple opacity-25 text-white cursor-not-allowed hover:opacity-25";
const secondaryClass = "text-purple border border-purple cursor-pointer hover:bg-purple-hover";
const secondaryDesactive = "text-purple border border-purple bg-light-purple cursor-pointer hover:opacity-25";
const secondaryDisabled = "text-purple opacity-25 border border-purple cursor-not-allowed hover:opacity-25";

const Button: Component<ButtonProps> = (props) => {
  const style = `${baseClass} 
  ${props.secondary ? (
    props.disabled ? secondaryDisabled : props.active ? secondaryDesactive : secondaryClass
  ) : ''}
  ${!props.secondary ? (
    props.disabled ? primaryDisabled : props.active ? primaryDeactive : primaryClass
  ) : ''}
  `;

  return(
    <div class={style} onClick={props.onClick}>
      <div class="h-6">{props.label}</div>
    </div>
  )
};

export default Button;