
   
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList
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
            <Text> 
              To qualify for a loan, you must be:
            </Text>
              <UnorderedList>
                <ListItem> Be between 22 – 59 years old</ListItem>
                <ListItem>Have a verifiable source of income</ListItem>
                <ListItem>Live and /or work in cities where we operate</ListItem>
                <ListItem>Have a savings or current bank account with any commercial bank</ListItem>
              </UnorderedList>
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
            You can get up to N1 million for up to 24 months but that is after your first loan
            is processed suceesfully in which you are only eligible to get a loan of just 10k
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
            A valid government ID 
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
            Based on your profile, as a first time user, with an incomplete profile, you are eligible for 
            a maximum amount of 10k. But after successful processing and repayment of your first loan,
            you become eligible for higher amount up to #500,000. Finally, when you complete your
            profile by updating all the valid information, you eligible for a cash amount 
            of up to 1 million naira
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
            <Text>  
              Your BNV gives us access to  information  we need tp verify you are the real owner and,
              it helps us keep you safe;
            </Text>
            <UnorderedList>
              <ListItem>Full Name</ListItem>
              <ListItem>Date of birth</ListItem>
              <ListItem>Picture</ListItem>
              <ListItem>Mobile Number</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>{' '}
      </Accordion>
    </Stack>
  );
}


export default FAQs
