import type { AppProps } from 'next/app'
import { Global } from '../styles/globals';
import { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext<AuthContextType>({
  isAuth: true || false,
  setIsAuth: () => {},
  token: '',
  setToken: () => {}
})

export const MessageContext = createContext<MessageContextType>({
  message: '',
  setMessage: () => {}
})

export default function App({ Component, pageProps }: AppProps) {

  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
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
        <MessageContext.Provider
        value={{
          message: message,
          setMessage: setMessage
        }}
      >

<Global />
<Component {...pageProps} />
</MessageContext.Provider>
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

export type MessageContextType = {
  message: string | undefined
  setMessage: (arg0: string) => void
 }