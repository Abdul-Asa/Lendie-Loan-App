import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';

function FAQs() {
  return (
    <Stack m={[2, 10, 24]} py={[16, 0, 0]} alignItems="center">
      <Heading
        color="#0A2472"
        fontSize="22px"
        fontWeight="bold"
        textAlign="center"
      >
        Frequently asked Questions
      </Heading>
      <Text color="#00072D" textAlign="center">
        Our customers are frequently asking these questions about loan
      </Text>
      <Accordion allowToggle color="#0A2472" w={['95%', '70%', '50%']} pt={12}>
        <AccordionItem border="none" pb={8}>
          <AccordionButton
            borderRadius="lg"
            bgColor="#E5F3FF"
            borderBottom="1px"
            borderColor="brand.200"
            _hover={{ bgColor: '#E5F3FF' }}
          >
            <Box flex="1" textAlign="left" p="10px 14px">
              <Heading fontSize="20px"> Am I eligible for lendie loan</Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem border="none" pb={8}>
          <AccordionButton
            borderRadius="lg"
            bgColor="#E5F3FF"
            borderBottom="1px"
            borderColor="brand.200"
            _hover={{ bgColor: '#E5F3FF' }}
          >
            <Box flex="1" textAlign="left" p="10px 14px">
              <Heading fontSize="20px"> How much can i borrow</Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem border="none" pb={8}>
          <AccordionButton
            borderRadius="lg"
            bgColor="#E5F3FF"
            borderBottom="1px"
            borderColor="brand.200"
            _hover={{ bgColor: '#E5F3FF' }}
          >
            <Box flex="1" textAlign="left" p="10px 14px">
              <Heading fontSize="20px">
                {' '}
                What documents do i need to apply
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>{' '}
        <AccordionItem border="none" pb={8}>
          <AccordionButton
            borderRadius="lg"
            bgColor="#E5F3FF"
            borderBottom="1px"
            borderColor="brand.200"
            _hover={{ bgColor: '#E5F3FF' }}
          >
            <Box flex="1" textAlign="left" p="10px 14px">
              <Heading fontSize="20px">
                {' '}
                Why am i limited to a cash of 10k?
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>{' '}
        <AccordionItem border="none" pb={8}>
          <AccordionButton
            borderRadius="lg"
            bgColor="#E5F3FF"
            borderBottom="1px"
            borderColor="brand.200"
            _hover={{ bgColor: '#E5F3FF' }}
          >
            <Box flex="1" textAlign="left" p="10px 14px">
              <Heading fontSize="20px">Why does Lendie need my BNV?</Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>{' '}
      </Accordion>
    </Stack>
  );
}

export default FAQs;
