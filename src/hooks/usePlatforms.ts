import { useQuery } from "@tanstack/react-query";
import parent_platform from "../data/parent_platform";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["parent_platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: parent_platform.length, results: parent_platform },
  }); //useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
