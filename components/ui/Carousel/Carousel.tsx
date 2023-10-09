import { CarouselStyled } from './CarouselStyled';
import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/legacy/image';

import { deleteFetch } from '../../../services/deleteFetch';
import { Item } from '../../../types/item';
import { AuthContext, MessageContext } from '../../../pages/_app';
import { useModal } from '../../../customHooks/useModal'

import Container from "../Container/Container"
import Button from '../Button/Button';
import ItemsGrid from '../ItemsGrid/ItemsGrid';
import Modal from '../Modal/Modal';
import EditForm from '../Form/EditForm';
import Message from '../Message/Message';


const Carousel = ({carouselItems}: Props) => {

  const router = useRouter();
  const currentPath = router.pathname

  const {message, setMessage} = useContext(MessageContext)
  const {token} = useContext(AuthContext)
  const {openModal, closeModal, isModalOpen, setIsModalOpen, modalContent, setModalContent, display, setDisplay} = useModal()

    
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const prevItem = () => {  
    currentIndex > 0 ? setCurrentIndex(currentIndex - 1): setCurrentIndex(carouselItems.length -1)
    closeModal()
  };

    const nextItem = () => {
      currentIndex < carouselItems.length - 1 ? setCurrentIndex(currentIndex + 1) : setCurrentIndex(0)
      closeModal()
    };

    const handleEditModal = (item: Item) => {
      openModal();
      setModalContent(
     <EditForm item={item} currentPath={currentPath} closeModal={closeModal}/>
    );
    }
        

    const handleDeleteModal = (item: Item) => {
      setModalContent(
        <>
            <p>Are you sure you want to delete {item.title || item.name}?</p>
            <Container>
            <Button buttonText="Yes" type="button" onClick={() => deleteFetch(currentPath, item, token, setMessage, nextItem)} ></Button>
            <Button buttonText="No" type="button" onClick={closeModal}></Button> 
            </Container>
            <Message shadow="transparent"></Message> 
          </>
            )
      openModal(); 
    }
    
return (
<CarouselStyled>
          {carouselItems.map((item, index) => (
               
            <li key={item._id} style={{display: index === currentIndex ? 'flex' : 'none',
            flexDirection: 'column'
            }}>           
              {/* <Link href={item.title? `/artworks/${item._id}` : `/authors/${item._id}`} key={item._id}>  */}
              <h2>{item.title || item.name}</h2>
              <p>{item.title ? `${item.author},  ${item.year}` : null} </p>
              <p>{item.movement}  {
              item.name && (item.area).length > 0 &&
               (item.area).map((area, index) => (
      <span key={index}>{area}{index < item.area.length - 1 && ', '}</span>
    ))}</p>
              <Container>
              <Button type="button" buttonText="<" onClick={() => prevItem()}></Button>
              {item.title? <Image src={item.image || ''} alt={item.title || item.name || ''} 
              height={400} width={400 * (16 / 9)} 
              ></Image> : null}
          
{
  item.mainArtworks && <ItemsGrid items={item.mainArtworks}
  flow="column"
  ></ItemsGrid>
  }
               <Button type="button" buttonText=">" onClick={() => nextItem()}></Button>
               </Container>
   
               {display && <Container>
               <Button buttonText="Edit" type="button" onClick={()=>handleEditModal(item)}/>
               <Button buttonText="Delete" type="button" onClick={()=>handleDeleteModal(item)}/>
              </Container>}
   
              {isModalOpen && <Modal>{modalContent}</Modal>}
   
             
              {/* </Link> */}
              </li>             
          ))}
      </CarouselStyled>
  )
}

export type Props = {
    carouselItems: Item[]
}
  

export default Carousel