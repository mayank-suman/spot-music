import React from 'react';
import { render } from 'react-dom';
import Home from './pages/home/index.jsx';
import AccessTokenContext from './context/accessTokenContext.tsx';

export default function initReactApp() {
  const mountPoint = document.querySelector('.app');
  render(
    <AccessTokenContext>
      <Home />
    </AccessTokenContext>,
    mountPoint
  );
}
