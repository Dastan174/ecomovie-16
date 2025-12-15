import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_KEY } from "../../constants/api";
import type { GetResponse } from "../types";

interface SimilarParams {
  type: "movie" | "tv";
  id: string;
}
export const useRecommend = ({ type, id }: SimilarParams) =>
  useQuery({
    queryKey: ["recommend"],
    queryFn: async () => {
      const response = await axios.get<GetResponse>(
        `https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${API_KEY}`
      );
      return response.data.results;
    },
  });
