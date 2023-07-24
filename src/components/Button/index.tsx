import { Component, Match, Switch } from "solid-js";

interface ButtonProps {
  label: string;
  onClick: () => void;
  type: "primary" | "secondary";
  disabled?: boolean;
  active?: boolean;
}

const Button: Component<ButtonProps> = (props) => {
  return(
    <Switch fallback={<ButtonPrimaryDefault label={props.label}/>}>
      <Match when={props.type === "primary"}>
        <Switch fallback={<ButtonPrimaryDefault label={props.label}/>}>
          <Match when={props.disabled}>
            <ButtonPrimaryDisabled label={props.label}/>
          </Match>
          <Match when={props.active}>
            <ButtonPrimaryActive label={props.label}/>
          </Match>
        </Switch>
      </Match>
      <Match when={props.type === "secondary"}>
        <Switch fallback={<ButtonSecondaryDefault label={props.label}/>}>
          <Match when={props.disabled}>
            <ButtonSecondaryDisabled label={props.label}/>
          </Match>
          <Match when={props.active}>
            <ButtonSecondaryActive label={props.label}/>
          </Match>
        </Switch>
      </Match>
    </Switch>
  )
};

const ButtonPrimaryDefault: Component<{label: string}> = (props) => {
  return (
    <div class="bg-purple text-white font-bold font-base rounded-lg flex items-center justify-center py-3 cursor-pointer hover:opacity-25 transition-all">
      {props.label}
    </div>
  );
};

const ButtonPrimaryActive: Component<{label: string}> = (props) => {
  return (
    <div class="bg-purple-hover text-white font-bold font-base rounded-lg flex items-center justify-center py-3 cursor-pointer hover:opacity-25 transition-all">
      {props.label}
    </div>
  );
};

const ButtonPrimaryDisabled: Component<{label: string}> = (props) => {
  return (
    <div class="bg-purple opacity-25 text-white font-bold font-base rounded-lg flex items-center justify-center py-3 cursor-not-allowed hover:opacity-25 transition-all">
      {props.label}
    </div>
  );
};

const ButtonSecondaryDefault: Component<{label: string}> = (props) => {
  return (
    <div class="text-purple border border-purple font-bold font-base rounded-lg flex items-center justify-center py-3 cursor-pointer hover:bg-purple-hover transition-all">
      {props.label}
    </div>
  );
};

const ButtonSecondaryActive: Component<{label: string}> = (props) => {
  return (
    <div class="text-white border border-purple bg-purple-hover font-bold font-base rounded-lg flex items-center justify-center py-3 cursor-pointer hover:opacity-25 transition-all">
      {props.label}
    </div>
  );
};

const ButtonSecondaryDisabled: Component<{label: string}> = (props) => {
  return (
    <div class="text-purple opacity-25 border border-purple font-bold font-base rounded-lg flex items-center justify-center py-3 cursor-not-allowed hover:opacity-25 transition-all">
      {props.label}
    </div>
  );
};

export default Button;