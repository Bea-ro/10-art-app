import React, { useState, useEffect, createContext, useContext } from 'react';

import { AuthContext, MessageContext } from './_app';
import { ItemsFetch } from '../services/itemsFetch';
import { Item } from '../types/item';
import { Artwork } from '../types/artwork'
import { Author } from '../types/author'

import Link from 'next/link';
import Layout from '../components/ui/Layout/Layout'
import PageTitle from '../components/ui/PageTitle/PageTitle';
import Subtitle from '../components/ui/Subtitle/Subtitle';
import Container from '../components/ui/Container/Container';
import Text from '../components/ui/Text/Text';
import ItemsInHome from '../components/ui/ItemsInHome/ItemsInHome';


export const ItemsContext = createContext<ItemsContextType>({
  artworks: [],
  setArtworks: () => {},
  authors: [],
  setAuthors: () => {}
})

const Home = () => {

  const { isAuth } = useContext(AuthContext) 
  const {setMessage} = useContext(MessageContext)
  const { artworks, setArtworks, authors, setAuthors } = ItemsFetch(useState, useEffect)


  return (
      <Layout title="Art App" 
      description="Find information about artists from all movements and artworks of pinture, sculpture and arquitecture."
      >
      <PageTitle title="Your Art App"/>
      
{isAuth? 
(
 <>
 <ItemsContext.Provider
        value={{
          artworks: artworks,
          setArtworks: setArtworks,
          authors: authors,
          setAuthors: setAuthors
        }}
      >
 <ItemsInHome items={artworks} itemType='artworks'></ItemsInHome>
<ItemsInHome items={authors} itemType='authors'></ItemsInHome>
</ItemsContext.Provider>
</> 
)
:
(<>
<Subtitle subtitle="Find your favourite artists and artworks"/>
<Container direction="column">
<Text text="Still without account?"></Text>
<Link className="button" href="/user?action=register" onClick={() => setMessage('')}>Free Register</Link>
</Container>
</>)
}
</Layout>
  )
}

export type ItemsContextType = {
  artworks: Artwork[]
  setArtworks: (arg0: Artwork[]) => void
  authors: Author[]
  setAuthors: (arg0: Author[]) => void
 }

export default Home