import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Divider,
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
            _expanded={{ borderBottomRadius: 'none', borderBottom: '0' }}
            _hover={{ bgColor: '#E5F3FF' }}
          >
            <Box flex="1" textAlign="left" p="10px 14px">
              <Heading fontSize="20px"> Am I eligible for lendie loan</Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4} bgColor="#E5F3FF" borderBottomRadius="lg">
            <Divider borderColor="gray.200" mb={4} />
            To qualify for a loan, you must be:
            <Box pl={8}>
              <ul>
                <li>Be between 22 – 59 years old</li>
                <li>Have a verifiable source of income</li>
                <li>Live and /or work in cities where we operate </li>
                <li>
                  Have a savings or current bank account with any commercial
                  bank
                </li>
              </ul>
            </Box>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem border="none" pb={8}>
          <AccordionButton
            borderRadius="lg"
            bgColor="#E5F3FF"
            borderBottom="1px"
            borderColor="brand.200"
            _expanded={{ borderBottomRadius: 'none', borderBottom: '0' }}
            _hover={{ bgColor: '#E5F3FF' }}
          >
            <Box flex="1" textAlign="left" p="10px 14px">
              <Heading fontSize="20px"> How much can i borrow</Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} bgColor="#E5F3FF" borderBottomRadius="lg">
            <Divider borderColor="gray.200" mb={4} />
            You can get up to N1 million for up to 24 months but that is after
            your first loan is processed suceesfully in which you are only
            eligible to get a loan of just 10k
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem border="none" pb={8}>
          <AccordionButton
            borderRadius="lg"
            bgColor="#E5F3FF"
            borderBottom="1px"
            borderColor="brand.200"
            _expanded={{ borderBottomRadius: 'none', borderBottom: '0' }}
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
          <AccordionPanel pb={4} bgColor="#E5F3FF" borderBottomRadius="lg">
            <Divider borderColor="gray.200" mb={4} />A valid goverment ID
          </AccordionPanel>
        </AccordionItem>{' '}
        <AccordionItem border="none" pb={8}>
          <AccordionButton
            borderRadius="lg"
            bgColor="#E5F3FF"
            borderBottom="1px"
            borderColor="brand.200"
            _expanded={{ borderBottomRadius: 'none', borderBottom: '0' }}
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
          <AccordionPanel pb={4} bgColor="#E5F3FF" borderBottomRadius="lg">
            <Divider borderColor="gray.200" mb={4} />
            Based on your profile, as a first time user, with an incomplete
            profile, you are eligible for a maximum amount of 10k. But after
            successful processing and repayment of your first loan, you become
            eligible for higher amount upto to #500,000k. Finally, when you
            complete your profile by updating all the valid information, you
            eligible for a cash amount of upto 1 million naira
          </AccordionPanel>
        </AccordionItem>{' '}
        <AccordionItem border="none" pb={8}>
          <AccordionButton
            borderRadius="lg"
            bgColor="#E5F3FF"
            borderBottom="1px"
            borderColor="brand.200"
            _expanded={{ borderBottomRadius: 'none', borderBottom: '0' }}
            _hover={{ bgColor: '#E5F3FF' }}
          >
            <Box flex="1" textAlign="left" p="10px 14px">
              <Heading fontSize="20px">Why does Lendie need my BVN?</Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} bgColor="#E5F3FF" borderBottomRadius="lg">
            <Divider borderColor="gray.200" mb={4} />
            Your BVN gives us access to information we need to verify you are
            the real owner and, it helps us keep you safe;
            <Box pl={8}>
              <ul>
                <li>Full Name</li>
                <li>Date of birth</li>
                <li>Picture</li>
                <li>Mobile Number</li>
              </ul>
            </Box>
          </AccordionPanel>
        </AccordionItem>{' '}
      </Accordion>
    </Stack>
  );
}

export default FAQs;
