import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { OneMovie } from "../types";
import { API_KEY } from "../../constants/api";

interface MovieParams {
  id: string | undefined;
}

export const useMovie = ({ id }: MovieParams) =>
  useQuery({
    queryKey: ["movie"],
    queryFn: async () => {
      const responce = await axios.get<OneMovie>(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      );
      return responce.data;
    },
  });
