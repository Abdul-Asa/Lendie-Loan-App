import {
  Box,
  Container,
  Flex,
  HStack,
  VStack,
  Text,
  Heading,
} from '@chakra-ui/layout';
import React from 'react';
// import { useMediaQuery } from '@chakra-ui/media-query';
import Icon from '@chakra-ui/icon';
import { Button } from '@chakra-ui/button';
import { FaCheckCircle } from 'react-icons/fa';
import { Image } from '@chakra-ui/react';

function About() {
  // const {isNotSmallerScreen} = useMediaQuery('min-width:600px');

  return (
    <HStack ml={32} justifyItems="flex-start">
      <Flex justify="space-between">
        <Image src="../images/girl.svg" color="#00072D" />
        <Container>
          <VStack justifySelf="flex-end" alignItems="flex-start">
            <Text color="#3A3A3C" fontSize="16">
              {' '}
              Quick cash, No stress
            </Text>
            <Heading
              color="#0A2472"
              fontWeight="extrabold"
              fontSize="20"
              pt={4}
              pb={8}
            >
              {' '}
              Apply for a convinient loan and enjoy the added <br />
              advantages of being a lendie user.
            </Heading>
            <Box>
              <HStack justifyItems="space-between">
                <Flex>
                  <Box>
                    <VStack alignItems="flex-start" mb={8}>
                      <Box>
                        <Flex mb={2}>
                          <Icon
                            as={FaCheckCircle}
                            w="8"
                            h="8"
                            color="#0A2472"
                          />
                          <Text color="#0A2472" fontSize="16" pt={1} ml={4}>
                            {' '}
                            Flexible loan rates
                          </Text>
                        </Flex>
                      </Box>
                      <Box>
                        <Flex mb={2}>
                          <Icon
                            as={FaCheckCircle}
                            w="8"
                            h="8"
                            color="#0A2472"
                          />
                          <Text color="#0A2472" fontSize="16" pt={1} ml={4}>
                            {' '}
                            No guarantor required
                          </Text>
                        </Flex>
                      </Box>
                      <Box>
                        <Flex mb={2}>
                          <Icon
                            as={FaCheckCircle}
                            w="8"
                            h="8"
                            color="#0A2472"
                          />
                          <Text color="#0A2472" fontSize="16" pt={1} ml={4}>
                            No hidden fees
                          </Text>
                        </Flex>
                      </Box>
                    </VStack>
                  </Box>
                  <Box>
                    <VStack alignItems="flex-start" ml={12} mb={8}>
                      <Box>
                        <Flex mb={2}>
                          <Icon
                            as={FaCheckCircle}
                            w="8"
                            h="8"
                            color="#0A2472"
                          />
                          <Text color="#0A2472" fontSize="16" pt={1} ml={4}>
                            Get Money in minutes
                          </Text>
                        </Flex>
                      </Box>
                      <Box>
                        <Flex mb={2}>
                          <Icon
                            as={FaCheckCircle}
                            w="8"
                            h="8"
                            color="#0A2472"
                          />
                          <Text color="#0A2472" fontSize="16" pt={1} ml={4}>
                            No collaterals needed
                          </Text>
                        </Flex>
                      </Box>
                      <Box>
                        <Flex mb={2}>
                          <Icon
                            as={FaCheckCircle}
                            w="8"
                            h="8"
                            color="#0A2472"
                          />
                          <Text color="#0A2472" fontSize="16" pt={1} ml={4}>
                            {' '}
                            Pay back convienently
                          </Text>
                        </Flex>
                      </Box>
                    </VStack>
                  </Box>
                </Flex>
              </HStack>
            </Box>
            <Button bg="#0A2472" h="14" w="36" mt={12}>
              Apply Now
            </Button>
          </VStack>
        </Container>
      </Flex>
    </HStack>
  );
}

export default About;
