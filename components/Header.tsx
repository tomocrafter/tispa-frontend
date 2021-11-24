import { useColorModeValue } from '@chakra-ui/color-mode';
import { useViewportScroll } from 'framer-motion';
import { Flex, IconButton } from '@chakra-ui/react';
import React, { useRef, useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';

type Props = {
  onClickOpenSidebar: () => void;
};

const Header: React.VFC<Props> = ({ onClickOpenSidebar }) => {
  const bg = useColorModeValue('white', 'gray.800');
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

  const { scrollY } = useViewportScroll();
  useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  return (
    <Flex
      as='header'
      ref={ref}
      shadow={y > height ? 'sm' : undefined}
      transition='box-shadow 0.2s'
      bg={bg}
      borderTop='6px solid'
      borderTopColor='brand.400'
      w='full'
      overflowY='hidden'
      borderBottomWidth={2}
      borderBottomColor={useColorModeValue('gray.200', 'gray.900')}
    >
      <IconButton
        aria-label='Menu'
        display={{ base: 'inline-flex', md: 'none' }}
        onClick={onClickOpenSidebar}
        icon={<FiMenu />}
        size='sm'
      />
    </Flex>
  );
};

export default Header;
