import { Box } from '@chakra-ui/react';
import { GameCardContainerProps } from '../types';

const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box width={300} borderRadius={10} overflow={'hidden'}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
