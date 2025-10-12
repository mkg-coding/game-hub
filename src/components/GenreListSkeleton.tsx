import { HStack, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <ListItem>
      <Skeleton height="32px" />
      <SkeletonText />
    </ListItem>
  );
};

export default GenreListSkeleton;
