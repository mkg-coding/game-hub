import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <>
      <Skeleton height="32px" />
      <HStack>
        <SkeletonText />
      </HStack>
    </>
  );
};

export default GenreListSkeleton;
