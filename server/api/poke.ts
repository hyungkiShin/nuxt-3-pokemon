
import { useQuery } from "h3";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon"

export default async (req, res) => {
  const { search } = useQuery(req);

  if (!search) {
    return;
  }
  const response: any = await $fetch(`${BASE_URL}/${search}`, { method: "GET" });
  return response;
};
