import { GameCardProps } from '../types';
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import PlatformIconsList from './PlatformIconsList';
import CriticScore from './CriticScore';
import getCropedImageUrl from '../services/image-url';
import Emoji from './Emoji';

const GameCard = ({ game, selectedPlatform }: GameCardProps) => {
  return (
    <Card height={'100%'}>
      <Image src={getCropedImageUrl(game.background_image)} />
      <CardBody height={200}>
        <HStack justifyContent="space-between">
          <PlatformIconsList
            selectedPlatform={selectedPlatform}
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={'xl'} verticalAlign={'center'} marginTop={3}>
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
