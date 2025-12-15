import { useQuery } from "@tanstack/react-query";
import type { GetResponse } from "../types";
import axios from "axios";
import { API_KEY } from "../../constants/api";

interface MovesParams {
  type: "tv" | "movie";
}

export const useMoves = ({ type }: MovesParams) =>
  useQuery({
    queryKey: ["moves"],
    queryFn: async () => {
      const response = await axios.get<GetResponse>(
        `https://api.themoviedb.org/3/discover/${type}?api_key=${API_KEY}
`
      );
      return response.data.results;
    },
  });
