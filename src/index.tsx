/* @refresh reload */
import { render } from 'solid-js/web';
import {Router, Route, Routes} from '@solidjs/router';

import './index.css';

import Main from '@pages/Main';
import Layout from '@pages/Layout';
import Login from '@pages/Login';
import SingUp from '@pages/Singup';
import Profile from '@pages/Profile';

render(() => 
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/layout" element={<Layout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/singup" element={<SingUp />} />
    </Routes>
  </Router>
, document.getElementById('root')!);
