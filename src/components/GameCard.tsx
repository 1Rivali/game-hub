import { GameCardProps } from '../types';
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import PlatformIconsList from './PlatformIconsList';
import CriticScore from './CriticScore';
import getCropedImageUrl from '../services/image-url';

const GameCard = ({ game, selectedPlatform }: GameCardProps) => {
  return (
    <Card>
      <Image src={getCropedImageUrl(game.background_image)} />
      <CardBody height={200}>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconsList
            selectedPlatform={selectedPlatform}
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
