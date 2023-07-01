import { Text } from '@chakra-ui/react';
import { EmojiProps } from '../types';

const Emoji = ({ rating }: EmojiProps) => {
  if (rating < 3) return;
  const emojiMap: { [key: number]: string } = {
    3: '🤣',
    4: '👍',
    5: '🎯',
  };
  return (
    <Text marginTop={1} fontSize={'2xl'}>
      {emojiMap[rating]}
    </Text>
  );
};

export default Emoji;
