import { Component } from 'solid-js';

import PhoneMockup from '@images/illustration-phone-mockup.svg';

const Preview: Component = () => {
  return(
    <div class="hidden lg:flex items-center justify-center bg-white p-6 w-[500px] rounded-lg">
      <PhoneMockup />
    </div>
  );
}

export default Preview;