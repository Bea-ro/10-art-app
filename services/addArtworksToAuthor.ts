export const addArtworksToAuthor = async (
  token: string,
  artworkId: string | string[],
  authorId: string,
  setMessage: (arg0: string) => void
) => {
  console.log("el id de la obra", artworkId);
  console.log("id del autor", authorId);
  await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/authors/${authorId}/artwork`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ mainArtwork: artworkId }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("error:", error.message);
      setMessage(error.message);
    });
};
