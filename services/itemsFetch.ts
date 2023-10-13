import { Artwork } from '../types/artwork'
import { Author } from '../types/author'


type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export const ItemsFetch = (useState: (initialState: Artwork[] | Author[]) => [Artwork[] | Author[], SetState<Artwork[] | Author[]>], useEffect: any)  => {
  
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    const [authors, setAuthors] = useState<Author[]>([]);
  
    useEffect(() => {
      const getArtworks = async () => {
        const res = await fetch('https://complete-server-rtc.onrender.com/api/artworks');
        const artworksData = await res.json();
           return artworksData as Artwork[]
      };
      const getAuthors = async () => {
        const res = await fetch('https://complete-server-rtc.onrender.com/api/authors');
        const authorsData = await res.json();
       return authorsData as Author[]
      };
      getArtworks()
        .then((artworksData) => setArtworks(artworksData))
        .catch((error) => console.log('Data not found', error));
      getAuthors()
        .then((authorsData) => setAuthors(authorsData))
        .catch((error) => console.log('Data not found', error));
    }, []);
    
    return {artworks, setArtworks, authors, setAuthors};
  };