import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export const getData = async (url: string, body: {}, token: string) => {
//   const res = await axios.post(
//     `${process.env.NEXT_PUBLIC_API_URL}${url}`,
//     body,
// {
//   headers: {
//     Authorization: `Bearer ${token}`,
//     "Content-Type": "application/json",
//     Accept: "*/*",
//     "ngrok-skip-browser-warning": "69420",
//   },
// }
//   );

//   return res.data;
// };

export const getData = async (
  url: string,
  body: any = {},
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" = "GET"
) => {
  try {
    const res = await axios({
      method: method,
      url: `${process.env.NEXT_PUBLIC_API_URL}${url}`,
      data: method !== "GET" ? body : undefined, // GET requests should not have a body
      headers: {
        Authorization: `Bearer ${await getGlobalToken()}`,
        "Content-Type": "application/json",
        Accept: "*/*",
        "ngrok-skip-browser-warning": "69420",
      },
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const base64Prefix = "data:image/png;base64,";

export const getGlobalToken = async () => {
  return await window.Clerk.session.getToken({ template: "test" });
};
export const extractHashTags = (text: string) => {
  const hashRegex = /#\w+/g;
  const hashTags = text.match(hashRegex);
  return hashTags ? hashTags.join(" ") : "";
};

export const extractTags = (text: string) => {};
