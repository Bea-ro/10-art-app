import { Item } from '../types/item';

export const deleteFetch = async (
  itemType: string,
  item: Item,
  token: string,
  setMessage: (arg0: string) => void
) => {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${itemType}/${item._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("data en delete", data);
      setMessage(data);
    })
    .catch((error) => {
      console.log("error:", error.message);
      setMessage("This item could not been deleted.");
    });
};
