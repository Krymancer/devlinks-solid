import { Component, createSignal } from "solid-js";

import Header from "@components/Header";
import Card from "@components/Card";
import ImageUpload from "@components/ImageUpload";
import TextInput from "@components/TextInput";
import Preview from "@components/Preview";

const Profile: Component = () => {
  const [fristName, setFristName] = createSignal('');
  const [lastName, setLastName] = createSignal('');
  const [email, setEmail] = createSignal('');

  const [items, setItems] = createSignal([] as any[]);

  return (
    <div class="flex flex-col bg-light-gray min-h-screen transition-all">
      <Header />
      <main class="flex p-4 md:py-0  gap-6 md:px-6 flex-1 w-full">
        <div class="hidden md:flex">
          <Preview items={items}/>
        </div>
        <Card button>
          <div class="flex flex-col gap-10 p-6">
            <div class="flex flex-col gap-2">
              <div class="font-bold text-xl">Profile Details</div>
              <div class="text-gray">
                Add your details to create a personal touch to your profile.
              </div>
            </div>
            <div class="flex flex-col gap-6">
              <div class="flex flex-col gap-4 p-5">
                <div class="text-gray">Profile picture</div>
                <ImageUpload />
                <div class="text-gray text-sm mt-2">
                  Image must be below 1024x1024px. Use PNG or JPG format.
                </div>
              </div>
              <div class="p-5 gap-3 flex w-full flex-col">
                <div>
                  <div class="text-sm text-dark-gray">Frist Name*</div>
                  <TextInput text={fristName} setText={setFristName} />
                </div>

                <div>
                  <div class="text-sm text-dark-gray">Last Name*</div>
                  <TextInput text={lastName} setText={setLastName} />
                </div>

                <div>
                  <div class="text-sm text-dark-gray">Emai*</div>
                  <TextInput text={email} setText={setEmail} />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Profile;
