import { AuthFormData } from "../types/formData";

export const loginPostFetch = async (
  values: AuthFormData,
  setMessage: (arg0: string) => void,
  handleNavigate: (arg0: string) => void,
  setIsAuth: (arg0: boolean) => void,
  setToken: (arg0: string) => void
) => {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message) {
        setMessage(data.message);
      } else {
        setMessage("");
        const userStored = {
          email: data.userDB.email,
          token: data.token,
        };

        localStorage.setItem("userStored", JSON.stringify(userStored));
        handleNavigate("/");
        setIsAuth(true);
        setToken(data.token);
      }
    })
    .catch((error) => {
      console.log("error:", error.message);
    });
};
