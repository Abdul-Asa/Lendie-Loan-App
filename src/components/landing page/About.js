import { Box, Container, Flex, HStack, VStack, Text } from '@chakra-ui/layout';
import React from 'react';
// import { useMediaQuery } from '@chakra-ui/media-query';
import Icon from '@chakra-ui/icon';
import { Button } from '@chakra-ui/button';
import { FaCheckCircle } from 'react-icons/fa';

function About() {
  // const {isNotSmallerScreen} = useMediaQuery('min-width:600px');

  return (
    <HStack pt={160}>
      <Flex justify="space-between">
        <Box>hi</Box>
        <Container>
          <VStack alignItems="flex-start">
            <Text color="#3A3A3C"> Quick cash, No stress</Text>
            <Text color="#00072D">
              {' '}
              Apply for a convinient loan and enjoy the added <br />
              advantages of being a lendie user.
            </Text>
            <Box>
              <HStack justifyItems="space-between">
                <Flex>
                  <Box>
                    <VStack alignItems="flex-start">
                      <Box>
                        <Flex>
                          <Icon
                            as={FaCheckCircle}
                            w="8"
                            h="8"
                            color="#00072D"
                          />
                          <Text color="#00072D"> Flexible loan rates</Text>
                        </Flex>
                      </Box>
                      <Box>
                        <Flex>
                          <Icon
                            as={FaCheckCircle}
                            w="8"
                            h="8"
                            color="#00072D"
                          />
                          <Text color="#00072D"> No guarantor required</Text>
                        </Flex>
                      </Box>
                      <Box>
                        <Flex>
                          <Icon
                            as={FaCheckCircle}
                            w="8"
                            h="8"
                            color="#00072D"
                          />
                          <Text color="#00072D"> No hidden fees</Text>
                        </Flex>
                      </Box>
                    </VStack>
                  </Box>
                  <Box>
                    <VStack alignItems="flex-start">
                      <Box>
                        <Flex>
                          <Icon
                            as={FaCheckCircle}
                            w="8"
                            h="8"
                            color="#00072D"
                          />
                          <Text color="#00072D"> Get Money in minutes</Text>
                        </Flex>
                      </Box>
                      <Box>
                        <Flex>
                          <Icon
                            as={FaCheckCircle}
                            w="8"
                            h="8"
                            color="#00072D"
                          />
                          <Text color="#00072D"> No collaterals needed</Text>
                        </Flex>
                      </Box>
                      <Box>
                        <Flex>
                          <Icon
                            as={FaCheckCircle}
                            w="8"
                            h="8"
                            color="#00072D"
                          />
                          <Text color="#00072D"> Pay back convienently</Text>
                        </Flex>
                      </Box>
                    </VStack>
                  </Box>
                </Flex>
              </HStack>
            </Box>
            <Button>Apply Now</Button>
          </VStack>
        </Container>
      </Flex>
    </HStack>
  );
}

export default About;
