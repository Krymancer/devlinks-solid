import { Component, createSignal } from "solid-js";

import Header from "@components/Header";
import Card from "@components/Card";
import ImageUpload from "@components/ImageUpload";
import TextInput from "@components/TextInput";

const Profile: Component = () => {
  const [fristName, setFristName] = createSignal('');
  const [lastName, setLastName] = createSignal('');
  const [email, setEmail] = createSignal('');

  return (
    <div class="flex flex-col bg-light-gray min-h-screen transition-all">
      <Header />
      <main class="flex p-4 gap-6 py-0 flex-1 md:px-6">
        <Card>
          <div class="flex flex-col gap-10 p-6">
            <div class="flex flex-col gap-2">
              <div class="font-bold text-xl">Profile Details</div>
              <div class="text-gray">
                Add your details to create a personal touch to your profile.
              </div>
            </div>
            <div class="flex flex-col p-5">
              <div class="flex flex-col gap-4">
                <div class="text-gray">Profile picture</div>
                <ImageUpload />
                <div class="text-gray text-sm mt-2">
                  Image must be below 1024x1024px. Use PNG or JPG format.
                </div>
              </div>
              <div>
                <div>
                  <div class="text-sm text-dark-gray">Frist Name*</div>
                  <TextInput  />
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
