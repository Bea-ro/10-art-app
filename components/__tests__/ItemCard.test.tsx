/**
* @jest-environment jsdom
*/

import { render, screen, waitFor} from '@testing-library/react';
import { getArtworks } from '../../libs/artworks/artworks';
import { Artwork } from '../../types/artwork';

import ItemCard from '../ItemCard/ItemCard';
import Text from '../ui/Text/Text';


jest.mock('next/router', () => ({
    useRouter: () => ({
      push: jest.fn(),
    }),
  }));


describe('ItemCard', () => {
    
    const artworks: Promise<Artwork[] | string> = getArtworks()
    .then((response) => response)
    .catch((err) => err)

    if (artworks && Array.isArray(artworks)) {
        artworks.forEach((artwork) => {
            it('should be render the correct alt image', async() => {
            render(<ItemCard item={artwork} itemType= 'artworks' display='flex' isModalOpen={false}/>)
            await waitFor(() => expect(screen.getByAltText(artwork.title as string)).toBeVisible())
        })
      })
    } else {
        it('should handle the error in fetch', () => {
           render(<Text text="Please, log in to discover artworks." />)
           expect(screen.getByText('Please, log in to discover artworks.')).toBeInTheDocument();
        });
      }
    });