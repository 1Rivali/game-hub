import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGeres';
import getCropedImageUrl from '../services/image-url';
import { GenreListProps } from '../types';

const GenreList = ({ selectedGenre, onSelectGenre }: GenreListProps) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize={'3xl'} marginBottom={2}>
        Genres
      </Heading>
      <List>
        {data?.map((genre) => (
          <ListItem key={genre.id} paddingY={2}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit={'cover'}
                src={getCropedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                fontSize={'lg'}
                variant={'link'}
                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                color={genre.id === selectedGenre?.id ? 'green.600' : undefined}
                whiteSpace={'normal'}
                textAlign={'left'}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
