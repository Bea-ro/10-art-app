import React, { useState, useEffect, createContext, useContext } from "react";

import { AuthContext, MessageContext } from './_app';
import { ItemsFetch } from '../services/itemsFetch';
import { Artwork } from '../types/artwork';
import { Author } from '../types/author';

import Link from 'next/link';
import Layout from '../components/ui/Layout/Layout';
import PageTitle from '../components/ui/PageTitle/PageTitle';
import Subtitle from '../components/ui/Subtitle/Subtitle';
import Container from '../components/ui/Container/Container';
import Text from '../components/ui/Text/Text';
import ItemsInHome from '../components/ItemsInHome/ItemsInHome';

export const ItemsContext = createContext<ItemsContextType>({
  artworks: [],
  setArtworks: () => {},
  authors: [],
  setAuthors: () => {},
});

const Home = () => {
  const { isAuth } = useContext(AuthContext);
  const { setMessage } = useContext(MessageContext);
  const { artworks, setArtworks, authors, setAuthors } = ItemsFetch(
    useState,
    useEffect
  );

  return (
    <Layout
      title="Art App"
      description="Find information about artists from all movements and artworks of pinture, sculpture and arquitecture."
      auth={isAuth.toString()}
    >
      <PageTitle fontSize={isAuth ? "54px" : "80px"} title="Your Art App" />
   
      {!isAuth &&
        <>
          <Subtitle subtitle="Find your favourite artists and artworks" />
          <Container direction="column" height="57vh">
            <Text text="Still without account?"></Text>
            <Text fontSize='18px' 
            text="Register and see artworks and artists details. You will be able to add new artworks and artists and also update or delete existing ones."></Text>
            <Link
              className="button"
              href="/user?action=register"
              onClick={() => setMessage("")}
            >
              Free Register
            </Link>
          </Container>
        </>
      }

        <ItemsContext.Provider
          value={{
            artworks: artworks as Artwork[],
            setArtworks: setArtworks,
            authors: authors as Author[],
            setAuthors: setAuthors,
          }}
        >
          <ItemsInHome items={artworks} itemType="artworks"></ItemsInHome>
          <ItemsInHome items={authors} itemType="authors"></ItemsInHome>
        </ItemsContext.Provider>
      
        
    </Layout>
  );
};

export type ItemsContextType = {
  artworks: Artwork[];
  setArtworks: (arg0: Artwork[]) => void;
  authors: Author[];
  setAuthors: (arg0: Author[]) => void;
};

export default Home;
