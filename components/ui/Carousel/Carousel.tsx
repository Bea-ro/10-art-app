import { CarouselStyled } from './CarouselStyled';
import React, { useState, useContext } from 'react';
import { ModalContext } from '../../../pages/_app';
import { Item } from '../../../types/item';

import CarouselItemCard from '../../../components/ItemCard/CarouselItemCard';
import Container from '../Container/Container';
import Button from '../Button/Button';

const Carousel = ({ carouselItems, isModalOpen }: Props) => {
  const { closeModal } = useContext(ModalContext);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevItem = () => {
    currentIndex > 0
      ? setCurrentIndex(currentIndex - 4)
      : setCurrentIndex(carouselItems.length - 4);
    closeModal();
  };

  const nextItem = () => {
    currentIndex < carouselItems.length - 4
      ? setCurrentIndex(currentIndex + 4)
      : setCurrentIndex(0);
    closeModal();
  };

  return (
    <CarouselStyled>
      <Container isModalOpen={isModalOpen}>
        <Button type="button" text="<" onClick={() => prevItem()}></Button>
        <ul>
          {carouselItems.map((item, index) => (
            <CarouselItemCard
              key={item._id}
              item={item}
              // itemType={itemType}
              display={
                index >= currentIndex && index < currentIndex + 4
                  ? "flex"
                  : "none"
              }
              mobile={
                index >= currentIndex && index < currentIndex + 10
                  ? "flex"
                  : "none"
              }
              tablet={
                index >= currentIndex && index < currentIndex + 3
                  ? "flex"
                  : "none"
              }
              width="25%"
              imageFit="contain"
            ></CarouselItemCard>
          ))}
        </ul>
        <Button type="button" text=">" onClick={() => nextItem()}></Button>
      </Container>
    </CarouselStyled>
  );
};

export type Props = {
  carouselItems: Item[];
  // itemType: string;
  isModalOpen: boolean;
};

export default Carousel;
