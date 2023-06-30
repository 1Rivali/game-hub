import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    <HStack padding={10}>
      <Image src={logo} boxSize={45} />
      <SearchInput />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
