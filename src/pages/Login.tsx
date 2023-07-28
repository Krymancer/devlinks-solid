import { Component, createSignal } from "solid-js";

import TextInput from "@components/TextInput";
import Button from "@components/Button";
import { A, useNavigate } from "@solidjs/router";

import Logo from '@images/logo-devlinks-large.svg';
import EmailIcon from '@images/icon-email.svg';
import PasswordIcon from '@images/icon-password.svg';

const Login: Component = () => {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');

  const navigate  = useNavigate();

  const login = () => navigate('/'); 

  return(
    <div class="p-8 flex flex-col gap-16">
      <div class="h-10 w-full">
        <Logo />
      </div>
      <div class="flex flex-col gap-10">
        <div class="flex flex-col gap-2">
          <div class="font-bold text-xl">Login</div>
          <div class="text-gray">
            Add your details below to get back into the app
          </div>
        </div>

        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-1">
            <div class="text-sm text-gray">Email address:</div>
            <TextInput placeholder="e.g. alex@example.com" icon={EmailIcon} text={email} setText={setEmail} />
          </div>

          <div class="flex flex-col gap-1">
            <div class="text-sm text-gray">Password:</div>
            <TextInput placeholder="Enter you password" icon={PasswordIcon} text={password} setText={setPassword} type="password" />
          </div>

          <div>
            <Button label="Login" onClick={login}/>
          </div>

          <div class="flex flex-col text-center text-gray">
            Don't have an account?
            <A href="/singup" class="text-purple"> Create account </A>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;