import { Component, createSignal } from "solid-js";

import TextInput from "@components/TextInput";
import Button from "@components/Button";
import { A } from "@solidjs/router";

import Logo from '@images/logo-devlinks-large.svg';
import EmailIcon from '@images/icon-email.svg';
import PasswordIcon from '@images/icon-password.svg';

const SingUp: Component = () => {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [confirmPassword, setConfirmPassword] = createSignal('');

  return(
    <div class="p-8 flex flex-col gap-16">
      <div class="h-10 w-full">
        <Logo />
      </div>
      <div class="flex flex-col gap-10">
        <div class="flex flex-col gap-2">
          <div class="font-bold text-xl">Create account</div>
          <div class="text-gray">
            Let's get you started sharing your links!
          </div>
        </div>

        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-1">
            <div class="text-sm text-gray">Email address:</div>
            <TextInput placeholder="e.g. alex@example.com" icon={EmailIcon} text={email} setText={setEmail} />
          </div>

          <div class="flex flex-col gap-1">
            <div class="text-sm text-gray">Create Password:</div>
            <TextInput placeholder="At least .8 characters" icon={PasswordIcon} text={password} setText={setPassword} type="password" />
          </div>

          <div class="flex flex-col gap-1">
            <div class="text-sm text-gray">Confirm Password:</div>
            <TextInput placeholder="At least .8 characters" icon={PasswordIcon} text={confirmPassword} setText={setConfirmPassword} type="password" />
          </div>

          <div class="text-sm text-gray">
            Password must contain at least 8 characters
          </div>

          <div>
            <Button label="Create new account" onClick={() => {}}/>
          </div>

          <div class="flex flex-col text-center text-gray">
            Already have an account? 
            <A href="/login" class="text-purple"> Login </A>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;