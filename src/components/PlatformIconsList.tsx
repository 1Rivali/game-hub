import { HStack, Icon } from '@chakra-ui/react';
import { PlatformIconsListProps } from '../types';
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';
const PlatformIconsList = ({
  platforms,
  selectedPlatform,
}: PlatformIconsListProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={2}>
      {platforms.map((platform) => (
        <Icon
          as={iconMap[platform.slug]}
          color={
            selectedPlatform?.slug === platform.slug ? 'green.600' : 'gray.500'
          }
          key={platform.id}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
