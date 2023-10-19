import { ItemsGridStyled } from './ItemsGridStyled';
import { Item } from '../../../types/item';

import ItemCard from '../../ItemCard/ItemCard';


const ItemsGrid = ( { items, flow, isModalOpen, itemType } : Props ) => {

  return (
    <ItemsGridStyled flow={flow} isModalOpen={isModalOpen} itemType={itemType}>
          {items.map((item) => (
         <ItemCard key={item._id} item={item}></ItemCard>
))}
    </ItemsGridStyled>
  )
}
export type Props = {
    items: Item[]
  flow?: string
  isModalOpen?: boolean
  itemType?: string
 }

export default ItemsGrid