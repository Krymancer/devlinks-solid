import { Component, Match, Switch } from "solid-js";

interface ButtonProps {
  label: string;
  onClick: () => void;
  secondary?: boolean;
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
      <Match when={!props.secondary}>
        <Switch fallback={<ButtonPrimaryDefault label={props.label} onClick={props.onClick}/>}>
          <Match when={props.disabled}>
            <ButtonPrimaryDisabled label={props.label} onClick={props.onClick}/>
          </Match>
          <Match when={props.active}>
            <ButtonPrimaryActive label={props.label} onClick={props.onClick}/>
          </Match>
        </Switch>
      </Match>
      <Match when={props.secondary}>
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
    <div class="box-border py-[10px] bg-purple text-white font-bold text-base rounded-lg flex items-center justify-center cursor-pointer hover:opacity-25 transition-all md:px-4 select-none w-full" onClick={props.onClick}>
      <div class="h-6">{props.label}</div>
    </div>
  );
};

const ButtonPrimaryActive: Component<ButtonVariantProps> = (props) => {
  return (
    <div class="box-border py-[10px] bg-purple-hover text-white font-bold text-base rounded-lg flex items-center justify-center cursor-pointer hover:opacity-25 transition-all md:px-4 select-none w-full" onClick={props.onClick}>
      <div class="h-6">{props.label}</div>
    </div>
  );
};

const ButtonPrimaryDisabled: Component<ButtonVariantProps> = (props) => {
  return (
    <div class="box-border py-[10px] bg-purple opacity-25 text-white font-bold text-base rounded-lg flex items-center justify-center cursor-not-allowed hover:opacity-25 transition-all md:px-4 select-none w-full" onClick={props.onClick}>
      <div class="h-6">{props.label}</div>
    </div>
  );
};

const ButtonSecondaryDefault: Component<ButtonVariantProps> = (props) => {
  return (
    <div class="box-border py-[10px] text-purple border border-purple font-bold text-base rounded-lg flex items-center justify-center cursor-pointer hover:bg-purple-hover transition-all md:px-4 select-none w-full" onClick={props.onClick}>
      <div class="h-6">{props.label}</div>
    </div>
  );
};

const ButtonSecondaryActive: Component<ButtonVariantProps> = (props) => {
  return (
    <div class="box-border py-[10px] text-purple border border-purple bg-light-purple font-bold text-base rounded-lg flex items-center justify-center cursor-pointer hover:opacity-25 transition-all md:px-4 select-none w-full" onClick={props.onClick}>
      <div class="h-6">{props.label}</div>
    </div>
  );
};

const ButtonSecondaryDisabled: Component<ButtonVariantProps> = (props) => {
  return (
    <div class="box-border py-[10px] text-purple opacity-25 border border-purple font-bold text-base rounded-lg flex items-center justify-center cursor-not-allowed hover:opacity-25 transition-all md:px-4 select-none w-full" onClick={props.onClick}>
      <div class="h-6">{props.label}</div>
    </div>
  );
};

export default Button;