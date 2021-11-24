import { Flex, Icon } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/system';
import React from 'react';
import NextLink from 'next/link';

type Props = {
  href?: string;
  icon?: React.ComponentProps<typeof Icon>['as'];
  navItemProps?: React.ComponentProps<typeof Flex>;
};

const NavItem: React.FC<Props> = (props) => {
  const { href, icon, navItemProps, children } = props;

  const containerProps = navItemProps ?? {};
  if (href) {
    containerProps['as'] = 'a';
  }

  const Item = (
    <Flex
      align='center'
      px='4'
      pl='4'
      py='3'
      cursor='pointer'
      color={useColorModeValue('inherit', 'gray.400')}
      _hover={{
        bg: useColorModeValue('gray.100', 'gray.900'),
        color: useColorModeValue('gray.900', 'gray.200'),
      }}
      role='group'
      fontWeight='semibold'
      transition='.15s ease'
      {...containerProps}
    >
      {icon && (
        <Icon
          mr='2'
          boxSize='4'
          _groupHover={{
            color: 'gray.300',
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );

  if (!href) return Item;

  return (
    <NextLink href={href} passHref>
      {Item}
    </NextLink>
  );
};

export { NavItem };
