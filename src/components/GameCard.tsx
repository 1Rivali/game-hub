import { GameCardProps } from '../types';
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
import PlatformIconsList from './PlatformIconsList';

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <PlatformIconsList
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatformIconsList>
      </CardBody>
    </Card>
  );
};

export default GameCard;
