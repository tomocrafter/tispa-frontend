import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
} from '@chakra-ui/react';
import React from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const AppDrawer: React.VFC<Props> = ({ isOpen, onClose }) => {
  return (
    <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth='1px'>めにゅー</DrawerHeader>
        <DrawerBody>
          <Stack spacing={4}>
            <Button />
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export { AppDrawer };
