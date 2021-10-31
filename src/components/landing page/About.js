import {
  Box,
  // Container,
  Flex,
  HStack,
  VStack,
  Text,
  Heading,
} from '@chakra-ui/layout';
import React from 'react';
import girlIcon from '../icons/girl.svg.svg';
import Icon from '@chakra-ui/icon';
import { Button } from '@chakra-ui/button';
import { FaCheckCircle } from 'react-icons/fa';
import { Image } from '@chakra-ui/react';

function About() {
  // const {isNotSmallerScreen} = useMediaQuery('min-width:600px');

  return (
    <Box id="About" bgColor="rgba(242, 242, 245, 0.3);" py={1} mt={[8, 6, 0]}>
      <Flex
        align="center"
        m={[4, 10, 20]}
        direction={{ base: 'column', md: 'row' }}
        justify="space-around"
      >
        <Image
          src={girlIcon}
          color="#00072D"
          boxSize={['540px', '540px', '300px', '540px']}
        />
        <VStack
          alignItems={['center', 'flex-start', 'flex-start']}
          maxW="550px"
        >
          <Text color="#3A3A3C" fontSize="16" fontWeight="bold">
            Quick cash, No stress
          </Text>
          <Heading
            color="#0A2472"
            fontWeight="extrabold"
            fontSize={{ base: '24px', md: '35px' }}
            pt={4}
            pb={8}
            px={[6, 4, 0]}
          >
            Apply for a convinient loan and enjoy the added advantages of being
            a lendie user.
          </Heading>
          <HStack spacing={('20px', '30px', '60px')} pb={16} px={[6, 0, 0]}>
            <VStack alignItems="flex-start" spacing="20px">
              <Flex align="center">
                <Icon
                  as={FaCheckCircle}
                  color="#0A2472"
                  boxSize={['20px', '16px', '30px']}
                />
                <Text color="#0A2472" fontSize={['14', '16']} pt={1} ml={4}>
                  Flexible loan rates
                </Text>
              </Flex>
              <Flex align="center">
                <Icon
                  as={FaCheckCircle}
                  color="#0A2472"
                  boxSize={['20px', '16px', '30px']}
                />
                <Text color="#0A2472" fontSize={['14', '16']} pt={1} ml={4}>
                  No guarantor required{' '}
                </Text>
              </Flex>
              <Flex align="center">
                <Icon
                  as={FaCheckCircle}
                  color="#0A2472"
                  boxSize={['20px', '16px', '30px']}
                />
                <Text color="#0A2472" fontSize={['14', '16']} pt={1} ml={4}>
                  No hidden fees{' '}
                </Text>
              </Flex>
            </VStack>
            <VStack alignItems="flex-start" spacing="20px">
              <Flex align="center">
                <Icon
                  as={FaCheckCircle}
                  color="#0A2472"
                  boxSize={['20px', '16px', '30px']}
                />
                <Text color="#0A2472" fontSize={['14', '16']} pt={1} ml={4}>
                  Get Money in minutes{' '}
                </Text>
              </Flex>
              <Flex align="center">
                <Icon
                  as={FaCheckCircle}
                  color="#0A2472"
                  boxSize={['20px', '16px', '30px']}
                />
                <Text color="#0A2472" fontSize={['14', '16']} pt={1} ml={4}>
                  no collaterals needed.{' '}
                </Text>
              </Flex>
              <Flex align="center">
                <Icon
                  as={FaCheckCircle}
                  color="#0A2472"
                  boxSize={['20px', '16px', '30px']}
                />
                <Text color="#0A2472" fontSize={['14', '16']} pt={1} ml={4}>
                  Pay back convienently{' '}
                </Text>
              </Flex>
            </VStack>
          </HStack>
          <Button
            size="lg"
            color="whiteAlpha.900"
            _hover={{
              bgColor: '#0E6BA8',
            }}
            _disabled={{
              bgColor: '#9DBFF9',
              cursor: 'not-allowed',
              _hover: { bgColor: '#9DBFF9' },
            }}
            bgColor="brand.300"
            mt={12}
            w={['full', 'auto', '50%']}
            as="a"
            href="/login"
            id="WhyLendie"
          >
            Apply Now
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
}

export default About;
