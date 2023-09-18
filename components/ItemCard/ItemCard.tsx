import { ItemCardStyled } from './ItemCardStyled';
import Link from 'next/link';
import Image from 'next/image';
import { Item } from '../../types/item';

const ItemCard = ( {item, imgHeight, imgWidth}: Props ) => {

  return (
<ItemCardStyled>
     <Link href={item.title? `/artworks/${item._id}`: `/authors/${item._id}`} key={item._id}> 
     <h3>{item.title || item.name}</h3>
     {item.title ? <Image src={item.image || ''} alt={item.title}
     height={imgHeight} width={imgWidth}
     ></Image> : null}
     </Link>  
</ItemCardStyled>
  )
}

export type Props = {
    item: Item
    imgHeight: number
    imgWidth: number
}

export default ItemCard