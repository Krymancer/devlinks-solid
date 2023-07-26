/* @refresh reload */
import { render } from 'solid-js/web';
import {Router, Route, Routes} from '@solidjs/router';

import './index.css';

import Main from '@pages/Main';
import Layout from '@pages/Layout';

render(() => 
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/profile" element={<Main />} />
      <Route path="/layout" element={<Layout />} />
    </Routes>
  </Router>
, document.getElementById('root')!);
