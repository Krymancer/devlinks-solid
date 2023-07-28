import { Component, Match, Switch } from "solid-js";

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "primary" | "secondary";
  disabled?: boolean;
  active?: boolean;
}

interface ButtonVariantProps {
  label: string;
  onClick: () => void;
}

const Button: Component<ButtonProps> = (props) => {
  return(
    <Switch fallback={<ButtonPrimaryDefault label={props.label} onClick={props.onClick}/>}>
      <Match when={props.type === undefined || props.type === "primary"}>
        <Switch fallback={<ButtonPrimaryDefault label={props.label} onClick={props.onClick}/>}>
          <Match when={props.disabled}>
            <ButtonPrimaryDisabled label={props.label} onClick={props.onClick}/>
          </Match>
          <Match when={props.active}>
            <ButtonPrimaryActive label={props.label} onClick={props.onClick}/>
          </Match>
        </Switch>
      </Match>
      <Match when={props.type === "secondary"}>
        <Switch fallback={<ButtonSecondaryDefault label={props.label} onClick={props.onClick}/>}>
          <Match when={props.disabled}>
            <ButtonSecondaryDisabled label={props.label} onClick={props.onClick}/>
          </Match>
          <Match when={props.active}>
            <ButtonSecondaryActive label={props.label} onClick={props.onClick}/>
          </Match>
        </Switch>
      </Match>
    </Switch>
  )
};

const ButtonPrimaryDefault: Component<ButtonVariantProps> = (props) => {
  return (
    <div class="bg-purple text-white font-bold font-base rounded-lg flex items-center justify-center py-3 cursor-pointer hover:opacity-25 transition-all md:px-4 select-none w-full" onClick={props.onClick}>
      {props.label}
    </div>
  );
};

const ButtonPrimaryActive: Component<ButtonVariantProps> = (props) => {
  return (
    <div class="bg-purple-hover text-white font-bold font-base rounded-lg flex items-center justify-center py-3 cursor-pointer hover:opacity-25 transition-all md:px-4 select-none w-full" onClick={props.onClick}>
      {props.label}
    </div>
  );
};

const ButtonPrimaryDisabled: Component<ButtonVariantProps> = (props) => {
  return (
    <div class="bg-purple opacity-25 text-white font-bold font-base rounded-lg flex items-center justify-center py-3 cursor-not-allowed hover:opacity-25 transition-all md:px-4 select-none w-full" onClick={props.onClick}>
      {props.label}
    </div>
  );
};

const ButtonSecondaryDefault: Component<ButtonVariantProps> = (props) => {
  return (
    <div class="text-purple border border-purple font-bold font-base rounded-lg flex items-center justify-center py-3 cursor-pointer hover:bg-purple-hover transition-all md:px-4 select-none w-full" onClick={props.onClick}>
      {props.label}
    </div>
  );
};

const ButtonSecondaryActive: Component<ButtonVariantProps> = (props) => {
  return (
    <div class="text-purple border border-purple bg-light-purple font-bold font-base rounded-lg flex items-center justify-center py-3 cursor-pointer hover:opacity-25 transition-all md:px-4 select-none w-full" onClick={props.onClick}>
      {props.label}
    </div>
  );
};

const ButtonSecondaryDisabled: Component<ButtonVariantProps> = (props) => {
  return (
    <div class="text-purple opacity-25 border border-purple font-bold font-base rounded-lg flex items-center justify-center py-3 cursor-not-allowed hover:opacity-25 transition-all md:px-4 select-none w-full" onClick={props.onClick}>
      {props.label}
    </div>
  );
};

export default Button;