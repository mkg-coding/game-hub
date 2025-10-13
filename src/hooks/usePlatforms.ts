import parent_platform from "../data/parent_platform";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({
  data: parent_platform,
  isLoading: false,
  error: null,
}); //useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
