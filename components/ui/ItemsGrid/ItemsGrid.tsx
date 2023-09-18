import { ItemsGridStyled } from './ItemsGridStyled';

import { Item } from '../../../types/item';

import ItemCard from '../../ItemCard/ItemCard';

const ItemsGrid = ( { items } : Props ) => {
  return (
    <ItemsGridStyled>
          {items.map((item) => (
         <ItemCard key={item._id} item={item} imgHeight={100} imgWidth={100*(16/9)}></ItemCard>
))}
    </ItemsGridStyled>
  )
}
export type Props = {
    items: Item[]
}
export default ItemsGrid