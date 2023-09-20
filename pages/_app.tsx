import type { AppProps } from 'next/app'
import { Global } from '../styles/globals';
import { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext<AuthContextType>({
  isAuth: true || false,
  setIsAuth: () => {}
})

export default function App({ Component, pageProps }: AppProps) {

  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    const isClient = typeof window !== 'undefined';
    if (isClient) {
      const userStored = localStorage.getItem('userStored')
      userStored ? setIsAuth(true) : setIsAuth(false);
      }
  },[])

  return (
<>
<AuthContext.Provider
        value={{
          isAuth: isAuth,
          setIsAuth: setIsAuth
        }}
      >
<Global />
<Component {...pageProps} />
</AuthContext.Provider>
</>
    )
}

export type AuthContextType = {
  isAuth: boolean | undefined
  setIsAuth: (arg0: boolean) => void
 }