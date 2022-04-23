import React, { useEffect, createContext, ReactNode,  ReactElement, useReducer} from "react";
import { getTokenFromResponse } from '../util/login.ts';
import { getUser } from "../util/api.ts";

const UPDATE_USER = 'UPDATE_USER';
const clearHashFromUrl = () => {globalThis.location.hash = ''};

export function useLogin () {
  function reducer (state, {type, payload}) {
    switch (type) {
      case UPDATE_USER:
          return {accessToken:payload.accessToken || '', user: payload.user || {}};
      default:
        break;
    }
  }

    const [user, dispatch] = useReducer(reducer, {});

    async function setupAccessTokenInApp(token:string) {
        try {
            if (token) {
              clearHashFromUrl();
              const userData = await getUser(token);
              dispatch({type: UPDATE_USER, payload: {accessToken:token, user: userData}});
            }
        } catch (error) {
            dispatch({type: UPDATE_USER, payload: {}});
        }
      }
    

  useEffect(() => {
    const { access_token: accessTokenFromURL = '' } = getTokenFromResponse();
    setupAccessTokenInApp(accessTokenFromURL);
  }, [user]);
    
    return {user};
}

type userProviderProps = {
  children: ReactNode,
};

const UserContext = createContext();

export default function userProvider({ children }: userProviderProps): ReactElement {
  const user = useLogin();
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}