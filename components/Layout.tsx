import Header from '../components/Header';
import { Box, Drawer, DrawerContent, DrawerOverlay, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { SidebarContent } from '../components/SidebarContent';

const Layout: React.FC = ({ children }) => {
  const sidebar = useDisclosure();

  return (
    <>
      <SidebarContent display={{ base: 'none', md: 'unset' }} />
      <Drawer isOpen={sidebar.isOpen} onClose={sidebar.onClose} placement='left'>
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w='full' borderRight='none' />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition='.3s ease'>
        <Header onClickOpenSidebar={sidebar.onOpen} />
        <Box as='main' p='4'>
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
