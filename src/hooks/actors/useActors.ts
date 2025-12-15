import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { ActorsResponse, GetResponse } from "../types";
import { API_KEY } from "../../constants/api";

interface ActorParams {
  type: "movie" | "tv";
  movie_id: number;
}

export const useActors = ({ type, movie_id }: ActorParams) =>
  useQuery({
    queryKey: ["actors"],
    queryFn: async () => {
      const response = await axios.get<ActorsResponse>(
        `https://api.themoviedb.org/3/${type}/${movie_id}/credits?api_key=${API_KEY}`
      );
      return response.data.cast;
    },
  });
