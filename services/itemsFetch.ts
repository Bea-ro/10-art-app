import { Item } from "../types/item";

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export const ItemsFetch = (
  useState: (initialState: Item[]) => [Item[], SetState<Item[]>],
  useEffect: any
) => {
  const [artworks, setArtworks] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const getArtworks = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/artworks`
      );
      const artworksData = await res.json();
      return artworksData;
    };
    const getAuthors = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/authors`
      );
      const authorsData = await res.json();
      return authorsData;
    };
    getArtworks()
      .then((artworksData) => setArtworks(artworksData))
      .catch((error) => console.log("Data not found", error));
    getAuthors()
      .then((authorsData) => setAuthors(authorsData))
      .catch((error) => console.log("Data not found", error));
  }, []);

  return { artworks, setArtworks, authors, setAuthors };
};
