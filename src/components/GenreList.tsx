import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Spinner,
  Text,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGeres';
import getCropedImageUrl from '../services/image-url';

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <List>
        {data?.map((genre) => (
          <ListItem key={genre.id} paddingY={2}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCropedImageUrl(genre.image_background)}
              />
              <Text fontSize={'lg'}>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
