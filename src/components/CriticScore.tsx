import React from 'react';
import { CriticScoreProps } from '../types';
import { Badge } from '@chakra-ui/react';

const CriticScore = ({ score }: CriticScoreProps) => {
  let color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
