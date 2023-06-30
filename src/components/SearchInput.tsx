import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { SearchInputProps } from '../types';

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const [color, setColor] = useState('');
  const handleFocus = () => setColor('green');
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch color={color ?? undefined} />} />
        <Input
          borderRadius={20}
          placeholder="Search Games..."
          variant={'filled'}
          focusBorderColor="green.600"
          onFocus={handleFocus}
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
