import type { AppProps } from 'next/app'
import { Global } from '../styles/globals';
import { useState, createContext } from 'react';

export const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  setIsAuth: () => {}
})

export default function App({ Component, pageProps }: AppProps) {
  const [isAuth, setIsAuth] = useState<boolean>(false)
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