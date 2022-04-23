import React from 'react';
import { render } from 'react-dom';
import Home from './pages/home/index.tsx';
import UserContext from "./hooks/useLogin.tsx";


export default function initReactApp() {
  const mountPoint = document.querySelector('.app');
  render(
      <UserContext>
        <Home />
      </UserContext>,
    mountPoint
  );
}
