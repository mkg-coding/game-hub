import { useQuery } from "@tanstack/react-query";
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
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: parent_platform,
  }); //useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
