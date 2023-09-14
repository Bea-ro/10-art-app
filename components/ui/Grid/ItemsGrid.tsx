import { ItemsGridStyled } from './ItemsGridStyled';

import ArtworkCard from '../../ArtworkCard/ArtworkCard';

const ItemsGrid = ( {artworks} : Props ) => {
  return (
    <ItemsGridStyled>
          {artworks.map((artwork) => (
         <ArtworkCard key={artwork._id} item={artwork} imgHeight={100} imgWidth={100*(16/9)}></ArtworkCard>
))}
    </ItemsGridStyled>
  )
}
export type Props = {
    artworks: Artwork[]
}
export default ItemsGrid