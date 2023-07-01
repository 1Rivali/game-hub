import { Heading } from '@chakra-ui/react';
import { GameHeadingProps } from '../types';

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const heading = `${gameQuery.platform?.name ?? ''} ${
    gameQuery.genre?.name ?? ''
  } Games`;
  return (
    <Heading as="h1" marginY={6} fontSize={'5xl'}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
