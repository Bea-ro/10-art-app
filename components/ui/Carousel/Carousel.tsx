import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from "../Container/Container"
import Button from '../Button/Button';

import { Item } from '../../../types/item';


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
            
            
              <Link href={item.title? `/artworks/${item._id}` : `/authors/${item._id}`} key={item._id}> 
               <Container direction='column' color='var(--color-blue)' >
              <h3>{item.title || item.name}</h3>
              <Container>
              <Button buttonText="Edit" type="button"/>
              <Button buttonText="Delete" type="button"/>
              </Container>
              <p>{item.title ? `${item.author},  ${item.year}` : null} </p>
              <Container>
              <Button type="button" buttonText="<" onClick={() => prevItem()}></Button>

              <Container direction="column">
              <Image src={item.image || ''} alt={item.title || item.name || ''} 
              height={400} width={400*(16/9)}
              ></Image>

{item.mainArtworks &&
 <Container>
              <ul>
                     {item.mainArtworks.map((artwork) => (
                       <li key={artwork._id}>
                        <p>{artwork.title}</p>
                       </li>
                    ))}
                     </ul>
                     </Container>
                             }
                             </Container>
               <Button type="button" buttonText=">" onClick={() => nextItem()}></Button>
               </Container>
               <p>{item.area}</p>
               <p>{item.movement}</p>
               </Container>
              </Link>
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