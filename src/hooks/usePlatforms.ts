import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import parent_platform from "../data/parent_platform";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["parent_platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: parent_platform,
  }); //useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
