import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { GetResponse } from "../types";
import { API_KEY } from "../../constants/api";

interface TrendingParams {
  type: "movie" | "tv";
  isDay: "day" | "week";
}

export const usePopular = ({ isDay, type }: TrendingParams) =>
  useQuery({
    queryKey: ["popular"],
    queryFn: async () => {
      const response = await axios.get<GetResponse>(
        `https://api.themoviedb.org/3/trending/${type}/${isDay}?api_key=${API_KEY}`
      );
      return response.data.results;
    },
  });