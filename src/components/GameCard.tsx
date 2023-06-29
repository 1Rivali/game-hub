import { GameCardProps } from '../types';
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import PlatformIconsList from './PlatformIconsList';
import CriticScore from './CriticScore';
import getCropedImageUrl from '../services/image-url';

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card width={350} borderRadius={10} overflow={'hidden'}>
      <Image src={getCropedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
