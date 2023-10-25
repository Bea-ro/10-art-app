import { LayoutStyled } from "./LayoutStyled";

import Head from "next/head";
import Image from "next/legacy/image";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

const Layout = ({ title, description, children, auth }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="webasite" />
        <meta property="og:url" content="URL IMG PREVIW WEB <300KB" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="URL IMG PREVIW WEB <300KB" />
      </Head>
      <div className="background-image-container">
        <Image
          className="background-image"
          src="https://res.cloudinary.com/dnlceaase/image/upload/v1694962965/art-api/portada_jyuzfq.jpg"
          alt="creation"
          layout="fill"
          priority
        ></Image>
      </div>
      <Header></Header>
      <LayoutStyled auth={auth}>{children}</LayoutStyled>
      <Footer></Footer>
    </>
  );
};

export type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
  auth?: string;
};

export default Layout;
