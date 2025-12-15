import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_KEY } from "../../constants/api";
import type { TrailerResponse } from "../types";

interface TrailerParams {
  type: "movie" | "tv";
  movie_id: number;
}

export const useTrailers = ({ type, movie_id }: TrailerParams) =>
  useQuery({
    queryKey: ["trailers"],
    queryFn: async () => {
      const response = await axios.get<TrailerResponse>(
        `https://api.themoviedb.org/3/${type}/${movie_id}/videos?api_key=${API_KEY}`
      );
      return response.data.results;
    },
  });
