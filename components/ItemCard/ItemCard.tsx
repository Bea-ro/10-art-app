import { ItemCardStyled } from './ItemCardStyled';
import Link from 'next/link';
import Image from 'next/image';
import { Item } from '../../types/item';

const ItemCard = ( {item }: Props ) => {

  return (
<ItemCardStyled>
     <Link href={item.title? `/artworks/${item._id}`: `/authors/${item._id}`} key={item._id}> 
     <h3>{item.title || item.name}</h3>
     {item.title ? <Image src={item.image || ''} alt={item.title}
     layout="responsive" 
     width={100}
     height={100} 
     ></Image> : null}
     </Link>  
</ItemCardStyled>
  )
}

export type Props = {
    item: Item
}

export default ItemCard