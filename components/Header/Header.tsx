import { HeaderStyled } from "./HeaderStyled";
import { useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext, MessageContext } from "../../pages/_app";

import Link from "next/link";
import Navbar from "../ui/Navbar/Navbar";
import Image from "next/legacy/image";

const Header = () => {
  const router = useRouter();
  const { action } = router.query;
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const { setMessage } = useContext(MessageContext);

  const handleButtonClick = () => {
    isAuth && localStorage.removeItem("userStored");
    isAuth && setIsAuth(false);
    setMessage("");
  };

  return (
    <HeaderStyled>
      <Navbar></Navbar>
      <Link
        className="button" id="login-text"
        href={action === undefined && !isAuth ? "/user?action=login" : "/"}
        onClick={handleButtonClick}
      >
        {action === "register" || action === "login"
          ? "Home"
          : isAuth
          ? "Logout"
          : "Login"}
      </Link>
      <Link
        className="button" id="user-icon"
        href={action === undefined && !isAuth ? "/user?action=login" : "/"}
        onClick={handleButtonClick}
      >
        <Image src={action === "register" || action === "login"
       ? "/home-icon.svg"
       : isAuth
       ? "/logout-icon.svg"
       : "/login-icon.svg"}
       alt="user-icon" height={24} width={24} />
      </Link>
    </HeaderStyled>
  );
};

type Props = {
  action: string | undefined;
};

export default Header;
