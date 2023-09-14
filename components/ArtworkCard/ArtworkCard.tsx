import { ArtworkCardStyled } from './ArtworkCardStyled';
import Link from 'next/link';
import Image from 'next/image';
import { Item } from '../../types/item';

const ArtworkCard = ({item, imgHeight, imgWidth} : Props) => {

return (
    <ArtworkCardStyled>
            <Link href={`/artworks/${item._id}`} key={item._id}> 
              <h3>{item.title}</h3>
              <p>{item.author}, {item.year} </p>
              <Image src={item.image ? item.image : ''} alt={item.title ? item.title : ''} 
              height={imgHeight} width={imgWidth}
              ></Image>
               <p>{item.area}</p>
               <p>{item.movement}</p>
              </Link>  
</ArtworkCardStyled>
  )
}

export type Props = {
  item: Item
  imgHeight: number
  imgWidth: number
}

export default ArtworkCard