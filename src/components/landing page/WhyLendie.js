import {
  Button,
  VStack,
  Text,
  Center,
  Flex,
  Heading,
  Image,
} from '@chakra-ui/react';
import React from 'react';
import Goodluck from '../icons/good-luck.svg';
import Shield from '../icons/shield.svg';
import Recruitment from '../icons/recruitment.svg';
import Financial from '../icons/financial-support.svg';

//import  from '../components/images/girl.svg';

function WhyLendie() {
  return (
    <VStack m={[2, 10, 20]} py={[16, 0, 0]}>
      <Heading color="#0A2472" fontSize="22px" fontWeight="bold">
        How Does Lendie Work?
      </Heading>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        pt={12}
        w="full"
        justify="space-evenly"
        align={['center', 'center', 'start']}
      >
        <Center pb={[16, 0, 0]} maxW="230px">
          <VStack textAlign="center" spacing="10px">
            <Image src={Goodluck} boxSize="80px" mb={10} />
            <Heading color="#0A2472" fontSize="22px">
              Sign Up
            </Heading>
            <Text color="#0A2472" justifySelf="center">
              Sign up to create your <br />
              account
            </Text>
          </VStack>
        </Center>
        <Center pb={[16, 0, 0]} maxW="230px">
          <VStack textAlign="center" spacing="10px">
            <Image src={Recruitment} boxSize="80px" mb={10} />
            <Heading color="#0A2472" fontSize="22px">
              Apply
            </Heading>
            <Text color="#0A2472" justifySelf="center">
              Choose a loan amount and apply with your valid IDs
            </Text>
          </VStack>
        </Center>
        <Center pb={[16, 0, 0]} maxW="230px">
          <VStack textAlign="center" spacing="10px">
            <Image src={Shield} boxSize="80px" mb={10} />
            <Heading color="#0A2472" fontSize="22px">
              Verify
            </Heading>
            <Text color="#0A2472" justifySelf="center">
              You would then need to verify information you have provided
            </Text>
          </VStack>
        </Center>
        <Center pb={[16, 0, 0]} maxW="230px">
          <VStack textAlign="center" spacing="10px">
            <Image src={Financial} boxSize="80px" mb={10} />
            <Heading color="#0A2472" fontSize="22px">
              Get Funded
            </Heading>
            <Text color="#0A2472" justifySelf="center">
              After verification, you would be credited with loan amount
            </Text>
          </VStack>
        </Center>
      </Flex>
      <Center py="70px">
        <Button
          color="#0A2472"
          size="lg"
          _hover={{
            bgColor: '#DDE5E9',
          }}
          mt={4}
          as="a"
          w="130px"
          href="/signup"
          id="FAQs"
        >
          Sign up
        </Button>
      </Center>
    </VStack>
  );
}

export default WhyLendie;
