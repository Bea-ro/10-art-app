import { Global } from "../styles/globals";
import type { AppProps } from "next/app";
import { useState, createContext, useEffect } from "react";
import { useModal } from "../customHooks/useModal";

export const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  setIsAuth: () => {},
  token: "",
  setToken: () => {},
});

export const MessageContext = createContext<MessageContextType>({
  message: "",
  setMessage: () => {},
});

export const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
  closeModal: () => {},
  isModalOpen: false,
  setIsModalOpen: (arg0: boolean) => {},
  modalContent: null,
  setModalContent: (arg0: React.ReactNode) => {},
  modalDisplay: false,
  setModalDisplay: (arg0: boolean) => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const {
    openModal,
    closeModal,
    isModalOpen,
    setIsModalOpen,
    modalContent,
    setModalContent,
    modalDisplay,
    setModalDisplay,
  } = useModal(setMessage);

  useEffect(() => {
    // const isClient = typeof window !== 'undefined';
    // if (isClient) {
    const userStored = localStorage.getItem("userStored");
    userStored ? setIsAuth(true) : setIsAuth(false);
    // }
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{
          isAuth: isAuth,
          setIsAuth: setIsAuth,
          token: token,
          setToken: setToken,
        }}
      >
        <MessageContext.Provider
          value={{
            message: message,
            setMessage: setMessage,
          }}
        >
          <ModalContext.Provider
            value={{
              openModal: openModal,
              closeModal: closeModal,
              isModalOpen: isModalOpen,
              setIsModalOpen: setIsModalOpen,
              modalContent: modalContent,
              setModalContent: setModalContent,
              modalDisplay: modalDisplay,
              setModalDisplay: setModalDisplay,
            }}
          >
            <Global />
            <Component {...pageProps} />
          </ModalContext.Provider>
        </MessageContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export type AuthContextType = {
  isAuth: boolean | undefined;
  setIsAuth: (arg0: boolean) => void;
  token: string;
  setToken: (arg0: string) => void;
};

export type MessageContextType = {
  message: string | undefined;
  setMessage: (arg0: string) => void;
};

export type ModalContextType = {
  openModal: () => void;
  closeModal: () => void;
  isModalOpen: boolean;
  setIsModalOpen: (arg0: boolean) => void;
  modalContent: React.ReactNode;
  setModalContent: (arg0: React.ReactNode) => void;
  modalDisplay: boolean;
  setModalDisplay: (arg0: boolean) => void;
};
