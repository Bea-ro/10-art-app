import { CarouselStyled } from './CarouselStyled';
import React, { useState, useContext } from 'react';
import { MessageContext } from '../../../pages/_app';
import { useModal } from '../../../customHooks/useModal'
import { Item } from '../../../types/item';

import CarouselItemCard from '../../../components/ItemCard/CarouselItemCard';
import Container from '../Container/Container'
import Button from '../Button/Button';
import Modal from '../Modal/Modal';


const Carousel = ({carouselItems, itemType}: Props) => {
  
  const {setMessage} = useContext(MessageContext)
  const {closeModal, isModalOpen, modalContent, openModal, setModalContent, modalDisplay} = useModal(setMessage)
  const [currentIndex, setCurrentIndex] = useState<number>(0);

    const prevItem = () => {  
    currentIndex > 0 ? setCurrentIndex(currentIndex - 3) : setCurrentIndex(carouselItems.length -3)
    closeModal()
  };

    const nextItem = () => {
      currentIndex < carouselItems.length - 3 ? setCurrentIndex(currentIndex + 3) : setCurrentIndex(0)
      closeModal()
    };

   

return (
<CarouselStyled>
<Container isModalOpen={isModalOpen}>
<Button type="button" buttonText="<" onClick={() => prevItem()}></Button>
<ul>
          {carouselItems.map((item, index) => (
            <CarouselItemCard key={item._id} 
            item={item} itemType={itemType}
            display={index >= currentIndex && index < currentIndex + 3 ? 'flex' : 'none'}
            width="25%" imageFit='contain'
            openModal={openModal}
            closeModal={closeModal}
            setModalContent={setModalContent}
            modalDisplay={modalDisplay}
            ></CarouselItemCard>                      
          ))}
  </ul>
  <Button type="button" buttonText=">" onClick={() => nextItem()}></Button>
  </Container>
  {isModalOpen && <Modal top="47%">{modalContent}</Modal>}
  </CarouselStyled>
  )
}

export type Props = {
    carouselItems: Item[]
    itemType: string
}
  

export default Carousel