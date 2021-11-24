import { NewItineraryDialog } from '../components/NewItineraryDialog';
import { Box, Container, Heading, Select } from '@chakra-ui/react';
import React, { useState } from 'react';
import { NextPageWithLayout } from 'next';
import Layout from '../components/Layout';

const Index: NextPageWithLayout = () => {
  const [name, setName] = useState('tomo');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setName(event.target.value);
  };

  const dummyNames = ['tomo', 'setsuna', 'kusutohu'];

  //const [value, setValue] = useState(0);

  const [isNewItineraryOpen, setIsNewItineraryOpen] = useState(false);

  const handleDialogClose = () => {
    setIsNewItineraryOpen(false);
  };

  return (
    <>
      <Container maxWidth='xl'>
        <Box sx={{ my: 4 }}>
          <Heading>第一回とも鯖修学旅行</Heading>
        </Box>
        <Box sx={{ my: 4 }}>
          <Select value={name} onChange={handleChange}>
            {dummyNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </Select>
        </Box>
      </Container>

      <NewItineraryDialog isOpen={isNewItineraryOpen} onClose={handleDialogClose} />
    </>
  );
};

Index.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Index;
