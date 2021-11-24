import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  UseModalProps,
} from '@chakra-ui/modal';
import { Button, Box, Input } from '@chakra-ui/react';
import React from 'react';

const NewItineraryDialog: React.VFC<UseModalProps> = ({ ...dialogProps }) => {
  /*const [_title, setTitle] = useState<string>('');
  const _handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value as string);
  };*/

  /*const [_date, setDate] = useState<DateTime | null>(null);
  const _handleChangeDate = (date: DateTime | null) => {
    setDate(date);
  };*/

  return (
    <Modal {...dialogProps}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>新しい旅程</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            as='form'
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete='off'
          >
            <Input type='date' />
            <Input type='datetime-local' />
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button onClick={dialogProps.onClose}>キャンセル</Button>
          <Button onClick={dialogProps.onClose}>作成</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export { NewItineraryDialog };
