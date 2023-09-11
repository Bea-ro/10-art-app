import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from "../Container/Container"
import Button from '../Button/Button';

import { Item } from '../../../types/item';


const Carousel = ({carouselItems}: Props) => {
  
    const aspectRatio = 16 / 9;
    const calculatedWidth = 400 * aspectRatio;
  
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevArtwork = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        console.log('Prev button clicked');
      }
    };
    const nextArtwork = () => {
      if (currentIndex < carouselItems.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    };
    console.log(currentIndex)
    
return (
    <>
        <Container direction='column'>
<Button type="button" buttonText="<" onClick={() => prevArtwork()}></Button>
<ul>
          {carouselItems.map((item, index) => (
           
            <li key={item._id} style={{display: index === currentIndex ? 'block' : 'none'}}>
            
            {item.title ? (
               <Link href="/artworks"> 
               <Container direction='column' color='var(--color-blue)' >
              <h3>{item.title}</h3>
              <p>{item.author}, {item.year} </p>
              <Image src={item.image ? item.image : ''} alt={item.title} 
              height={400} width={400*(16/9)}
              ></Image>
               <p>{item.area}</p>
               <p>{item.movement}</p>
               </Container>
               </Link>)
               :
               (
                <Link href="/authors"> 
                   <h3>{item.name}</h3>
                    <ul>
                     {item.mainArtworks?.map((artwork) => (
                       <li key={artwork._id}>
                        <p>{artwork.title}</p>
                       </li>
                    ))}
                     </ul> 
                    <p>{item.area}</p>
                    <p>{item.movement}</p>
                   </Link>)
                   }
                   </li>
          ))}

        </ul>
        <Button type="button" buttonText=">" onClick={() => nextArtwork()}></Button>
        </Container>
        </>
  )
}


export type Props = {
    carouselItems: Item[]
}
  

export default Carousel