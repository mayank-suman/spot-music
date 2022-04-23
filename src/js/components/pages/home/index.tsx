// import React from 'react';
import React from 'react';
import Playlist from "./playlist/index.tsx";
import {useLogin} from "../../hooks/useLogin.tsx";
import { getAccessUrl } from '../../util/login.ts';


function Home() {
  const login = () => {
    window.location.href = getAccessUrl;
}

  const {user} = useLogin();
  const accessToken = user.accessToken || 'N/A';

  return (
    <div>
      <div>
        <span>{`Token: ${accessToken}`}</span>
      </div>
      <div>
        <button type="text" onClick={login}>
          Login
        </button>
        <div>
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default Home;
