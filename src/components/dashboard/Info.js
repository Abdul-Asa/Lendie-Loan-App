import React from 'react';
import { Text, Link, Flex } from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';

function Info() {
  return (
    <Flex bg="brand.100" align={['start', 'center']}>
      <WarningIcon m={4} color="#0A2472" />
      <Text color="#0A2472" fontSize={['12px', '15px']} m={2}>
        Please note as a first time user, you are only eligible for a loan of
        10,000 Naira after which you get access to up to 1 million naira.&nbsp;
        <Link color="blue"> Learn more</Link>
      </Text>
    </Flex>
  );
}

export default Info;
