import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { GetResponse } from "../types";
import { API_KEY } from "../../constants/api";

interface TrendingParams {
  type: "movie" | "tv";
}

export const usePopular = ({ type }: TrendingParams) =>
  useQuery({
    queryKey: ["popular"],
    queryFn: async () => {
      const response = await axios.get<GetResponse>(
        `https://api.themoviedb.org/3/${type}/popular?api_key=${API_KEY}`
      );
      return response.data.results;
    },
  });
