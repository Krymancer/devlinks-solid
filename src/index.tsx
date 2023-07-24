/* @refresh reload */
import { render } from 'solid-js/web';
import {Router, Route, Routes} from '@solidjs/router';

import './index.css';

import Main from './pages/Main';

render(() => 
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/profile" element={<Main />} />
    </Routes>
  </Router>
, document.getElementById('root')!);
