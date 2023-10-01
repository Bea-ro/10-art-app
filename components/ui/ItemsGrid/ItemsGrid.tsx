import { ItemsGridStyled } from './ItemsGridStyled';

import { Item } from '../../../types/item';

import ItemCard from '../../ItemCard/ItemCard';

const ItemsGrid = ( { items, flow } : Props ) => {
  return (
    <ItemsGridStyled flow={flow}>
          {items.map((item) => (
         <ItemCard key={item._id} item={item}></ItemCard>
))}
    </ItemsGridStyled>
  )
}
export type Props = {
    items: Item[]
  flow?: string
 }

export default ItemsGrid