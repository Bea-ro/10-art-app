import { Artwork } from "../types/artwork";
import { Author } from "../types/author";

export const ItemsFetch = (useState: any, useEffect: any) => {
  console.log('se ejecuta itemsFetch')
    const [artworks, setArtworks] = useState();
    const [authors, setAuthors] = useState();
  
    useEffect(() => {
      console.log('se ejecuta useEfect de itemsFetch')
      const getArtworks = async () => {
        const res = await fetch('https://complete-server-rtc.onrender.com/api/artworks');
        const artworksData = await res.json();
           return artworksData
      };
      const getAuthors = async () => {
        const res = await fetch('https://complete-server-rtc.onrender.com/api/authors');
        const authorsData = await res.json();
       return authorsData;
      };
      getArtworks()
        .then((artworksData) => setArtworks(artworksData))
        .catch((error) => console.log('Data not found', error));
      getAuthors()
        .then((authorsData) => setAuthors(authorsData))
        .catch((error) => console.log('Data not found', error));
    }, []);
    return {artworks, authors};
  };