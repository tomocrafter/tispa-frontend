import { Box, Flex, Text } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/system';
import React from 'react';
import { NavItem } from './NavItem';
import { CheckIcon } from '@chakra-ui/icons';
import { MdHome } from 'react-icons/md';

type Props = React.ComponentProps<typeof Box>;

const SidebarContent: React.VFC<Props> = (props) => {
  return (
    <Box
      as='nav'
      pos='fixed'
      top='0'
      left='0'
      zIndex='sticky'
      h='full'
      pb='10'
      overflowX='hidden'
      overflowY='auto'
      bg={useColorModeValue('white', 'gray.800')}
      borderColor={useColorModeValue('inherit', 'gray.700')}
      borderRightWidth='1px'
      w='60'
      {...props}
    >
      <Flex px='4' py='5' align='center'>
        <Text
          fontSize='2xl'
          ml='2'
          color={useColorModeValue('brand.500', 'white')}
          fontWeight='semibold'
        >
          Tispa!
        </Text>
      </Flex>
      <Flex direction='column' as='nav' fontSize='sm' color='gray.600' aria-label='Main Navigation'>
        <NavItem icon={MdHome} href='/'>
          ホーム
        </NavItem>
        <NavItem icon={CheckIcon} href='/checklist'>
          チェックリスト
        </NavItem>
      </Flex>
    </Box>
  );
};

export { SidebarContent };
