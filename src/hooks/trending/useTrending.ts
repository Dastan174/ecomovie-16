import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_KEY } from "../../constants/api";
import type { GetResponse } from "../types";

interface TrendingParams {
  type: "movie" | "tv";
  isDay: "day" | "week";
}

export const useTrending = ({ isDay, type }: TrendingParams) =>
  useQuery({
    queryKey: ["trending"],
    queryFn: async () => {
      const response = await axios.get<GetResponse>(
        `https://api.themoviedb.org/3/trending/${type}/${isDay}?api_key=${API_KEY}`
      );
      return response.data.results;
    },
  });
