import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { NavBarProps } from '../types';

const NavBar = ({ onSearch }: NavBarProps) => {
  return (
    <HStack padding={10}>
      <Image src={logo} boxSize={45} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
