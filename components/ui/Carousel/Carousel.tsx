import { CarouselStyled } from './CarouselStyled';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';

import { Item } from '../../../types/item';

import Container from "../Container/Container"
import Button from '../Button/Button';
import ItemsGrid from '../ItemsGrid/ItemsGrid';


const Carousel = ({carouselItems}: Props) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevItem = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };
    const nextItem = () => {
      if (currentIndex < carouselItems.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    };
   
return (
    <>
<ul>
          {carouselItems.map((item, index) => (
               
            <li key={item._id} style={{display: index === currentIndex ? 'block' : 'none'}}>           
              {/* <Link href={item.title? `/artworks/${item._id}` : `/authors/${item._id}`} key={item._id}>  */}
              <h3>{item.title || item.name}</h3>
              <p>{item.title ? `${item.author},  ${item.year}` : null} </p>
              
              <Container>
              <Button type="button" buttonText="<" onClick={() => prevItem()}></Button>
              {item.title? <Image src={item.image || ''} alt={item.title || item.name || ''} 
              layout="responsive" height={400} width={400 * (16 / 9)} 
              ></Image> : null}
{
  item.mainArtworks && <ItemsGrid items={item.mainArtworks}></ItemsGrid>
  }

               <Button type="button" buttonText=">" onClick={() => nextItem()}></Button>
               </Container>
               <p>{item.movement}  {
              item.name && (item.area).length > 0 &&
               (item.area).map((area, index) => (
      <span key={index}>{area}{index < item.area.length - 1 && ', '}</span>
    ))}</p>
               <Container>
              <Button buttonText="Edit" type="button"/>
              <Button buttonText="Delete" type="button"/>
              </Container>
              
              {/* </Link> */}
              </li>             
          ))}
        </ul>
       
       
        </>
  )
}

export type Props = {
    carouselItems: Item[]
}
  

export default Carousel