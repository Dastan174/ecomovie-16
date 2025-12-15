import { useQuery } from "@tanstack/react-query";
import type { GetResponse } from "../types";
import axios from "axios";
import { API_KEY } from "../../constants/api";

interface TrendingParams {
  type: "movie" | "tv";
  isDay: "day" | "week";
}

export const useRated = ({ isDay, type }: TrendingParams) =>
  useQuery({
    queryKey: ["rated"],
    queryFn: async () => {
      const response = await axios.get<GetResponse>(
        `https://api.themoviedb.org/3/trending/${type}/${isDay}?api_key=${API_KEY}`
      );
      return response.data.results;
    },
  });