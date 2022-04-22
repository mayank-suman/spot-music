import React, { createContext, useState, ReactNode, ReactElement, useContext } from 'react';

type AccessTokenProviderProps = {
  children: ReactNode,
};

const AccessTokenContext = createContext();



export default function AccessTokenProvider({ children }: AccessTokenProviderProps): ReactElement {
  const [accessToken, setAccessToken] = useState('');
  return (
    <AccessTokenContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AccessTokenContext.Provider>
  );
}

export function useAccessTokenContext() {
  return useContext(AccessTokenContext);
}



