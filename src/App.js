import React from 'react';
import { Heading, Center, Icon, Flex } from '@chakra-ui/react';
import { IoIosHourglass } from 'react-icons/io';

function App() {
  return (
    <Center h="90vh">
      <Flex align="center">
        <Icon as={IoIosHourglass} mr={2} boxSize={8} />
        <Heading>Lendie App </Heading>
      </Flex>
    </Center>
  );
}

export default App;
