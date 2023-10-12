import { CarouselStyled } from './CarouselStyled';
import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';

import { deleteFetch } from '../../../services/deleteFetch';
import { Item } from '../../../types/item';
import { AuthContext, MessageContext } from '../../../pages/_app';
import { useModal } from '../../../customHooks/useModal'

import Container from "../Container/Container"
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Message from '../Message/Message';


const Carousel = ({carouselItems, itemType}: Props) => {

  const {message, setMessage} = useContext(MessageContext)
  const {token} = useContext(AuthContext)
  const {openModal, closeModal, isModalOpen, setIsModalOpen, modalContent, setModalContent, display, setDisplay} = useModal()

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const prevItem = () => {  
    currentIndex > 0 ? setCurrentIndex(currentIndex - 3) : setCurrentIndex(carouselItems.length -3)
    closeModal()
  };

    const nextItem = () => {
      currentIndex < carouselItems.length - 3 ? setCurrentIndex(currentIndex + 3) : setCurrentIndex(0)
      closeModal()
    };

    const handleDeleteModal = (item: Item) => {
      setModalContent(
        <>
            <p>Are you sure you want to delete {item.title || item.name}?</p>
            <Container>
            <Button buttonText="Yes" type="button" onClick={() => deleteFetch(itemType, item, token, setMessage, nextItem)} ></Button>
            <Button buttonText="No" type="button" onClick={closeModal}></Button> 
            </Container>
            <Message shadow="transparent"></Message> 
          </>
            )
      openModal(); 
    }

    const randomArtwork = (artworks : Item[]) => artworks[Math.floor(Math.random () * artworks.length)]

return (
<CarouselStyled>
<Container>
<Button type="button" buttonText="<" onClick={() => prevItem()}></Button>
<ul>
          {carouselItems.map((item, index) => (
            <li key={item._id} 
            style={{
              display: index >= currentIndex && index < currentIndex + 3 ? 'flex' : 'none',
                 flexDirection: 'column'
            }}
            >           
              <h2>{item.title || item.name}</h2>
              <p>{item.title ? item.author : null} </p>
      <Link href={`/${itemType}/${item._id}`} key={item._id}>
              {item.title && <Image src={item.image || ''} alt={item.title || item.name || ''} 
              height={400} width={400 * (16 / 9)} 
              ></Image>}
               {item.mainArtworks && Array.isArray(item.mainArtworks) && item.mainArtworks[0] &&
              <Image
              src={randomArtwork(item.mainArtworks).image} 
                alt={`Ramdom Artwork by ${item.name}`}
                height={100} 
                width={100* (16 / 9)}
                ></Image>
             }
               </Link>
               {display && 
               <Button buttonText="Delete" type="button" onClick={()=>handleDeleteModal(item)}/>
              }
              </li>             
          ))}
  </ul>
                <Button type="button" buttonText=">" onClick={() => nextItem()}></Button>
                </Container>
                {isModalOpen && <Modal>{modalContent}</Modal>}
      </CarouselStyled>
  )
}

export type Props = {
    carouselItems: Item[]
    itemType: string
}
  

export default Carousel