import { ItemCardStyled } from './ItemCardStyled';
import { useContext } from 'react';
import { AuthContext, MessageContext } from '../../pages/_app';
import { deleteFetch } from '../../services/deleteFetch';

import { Item } from '../../types/item';

import Link from 'next/link';
import Image from 'next/legacy/image';
import Button from '../ui/Button/Button';
import Container from '../ui/Container/Container';
import Message from '../ui/Message/Message';

const CarouselItemCard = ( {item, itemType, display, width, imageFit, openModal, closeModal, setModalContent, modalDisplay}: Props ) => {

  const {setMessage} = useContext(MessageContext)
  const {token} = useContext(AuthContext)

    const randomArtwork = (artworks : Item[]) => artworks[Math.floor(Math.random () * artworks.length)]

    const handleDeleteModal = (item: Item) => {
        setModalContent(
          <>
              <p>Are you sure you want to delete {item.title || item.name}?</p>
              <Container>
              <Button buttonText="Yes" type="button" onClick={
                () => {
                  deleteFetch(itemType, item, token, setMessage)
                  setModalContent(
                  <>
                <Button type="button" buttonText="x" onClick={closeModal}/>
                <Message shadow="transparent"></Message>
                 </>
                 )}
                } ></Button>
              <Button buttonText="No" type="button" onClick={closeModal}></Button> 
              </Container>
            </>
              )
        openModal(); 
      }

  return (
<ItemCardStyled display={display} width={width} imageFit={imageFit}>
<h2>{item.title || item.name}</h2>
              <p>{item.title ? item.author : item.movement} </p>
      <Link href={`/${itemType}/${item._id}`} key={item._id}>             
              <Image 
              src={item.title ? item.image || '' :  item.mainArtworks && Array.isArray(item.mainArtworks) && item.mainArtworks[0] &&
              randomArtwork(item.mainArtworks).image} 
              alt={item.title ? item.title || item.name || '' : `Ramdom Artwork by ${item.name}`} 
              height={400} width={400 * (16 / 9)} 
              ></Image>
               </Link>
               {modalDisplay && <Button buttonText="Delete" type="button" onClick={()=>handleDeleteModal(item)}/>
              }
</ItemCardStyled>
  )
}

export type Props = {
    item: Item
    itemType: string
    display: string
    width: string
    imageFit: string
    openModal:  ()=> void
    closeModal:  ()=> void
    setModalContent: (arg0: React.ReactNode) => void
    modalDisplay: boolean
}

export default CarouselItemCard