// import React from 'react';
import React, { useEffect } from 'react';
import { getAccessUrl } from '../../util/login.js';
import { useAccessTokenContext } from '../../context/accessTokenContext.tsx';
import { getTokenFromResponse } from '../../util/login';

function Home() {
  function handleLoginClick() {
    window.location.href = getAccessUrl;
  }

  const { accessToken, setAccessToken } = useAccessTokenContext();

  function setupAccessTokenInApp(access_token) {
    if (access_token) {
      globalThis.location.hash = '';
      setAccessToken(access_token);
    }
  }

  useEffect(() => {
    const { access_token: accessTokenFromURL = '' } = getTokenFromResponse();
    setupAccessTokenInApp(accessTokenFromURL);
  }, [accessToken]);

  return (
    <div>
      <div>
        <span>{`Token: ${accessToken || 'N/A'}`}</span>
      </div>
      <div>
        <button type="text" onClick={handleLoginClick}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Home;
