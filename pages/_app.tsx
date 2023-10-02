import type { AppProps } from 'next/app'
import { Global } from '../styles/globals';
import { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext<AuthContextType>({
  isAuth: true || false,
  setIsAuth: () => {},
  token: '',
  setToken: () => {}
})

export const ErrorContext = createContext<ErrorContextType>({
  error: '',
  setError: () => {}
})

export default function App({ Component, pageProps }: AppProps) {

  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [token, setToken] = useState<string>('')

  useEffect(() => {
    const isClient = typeof window !== 'undefined';
    if (isClient) {
      const userStored = localStorage.getItem('userStored');
      userStored ? setIsAuth(true) : setIsAuth(false);
}
  },[])

  return (
<>
<AuthContext.Provider
        value={{
          isAuth: isAuth,
          setIsAuth: setIsAuth,
          token: token,
          setToken: setToken
        }}
      >
        <ErrorContext.Provider
        value={{
          error: error,
          setError: setError
        }}
      >

<Global />
<Component {...pageProps} />
</ErrorContext.Provider>
</AuthContext.Provider>
</>
    )
}

export type AuthContextType = {
  isAuth: boolean | undefined
  setIsAuth: (arg0: boolean) => void
  token: string
  setToken: (arg0: string) => void
 }

export type ErrorContextType = {
  error: string | undefined
  setError: (arg0: string) => void
 }