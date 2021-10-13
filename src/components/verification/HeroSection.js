import { Button } from '@chakra-ui/button'
import { Flex, HStack,Box,Text, Heading, Container, VStack, Stack, } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'

function HeroSection() {

    const [isNotSmallerScreen] = useMediaQuery('min-width:600px');

    return (
        <HStack alignSelf='flex-start'>
            <Flex>
                <HStack>
                    <Flex>
                        <Box>
                            <Text ml={32} mt={20} size='extrabold' fontWeight='bold' fontSize={isNotSmallerScreen ? "20": "44"} fontFamily='EB Garamond' color='#00072D'>
                                Are you In need of extra cash?<br />
                                Getting a loan for quick short-<br />
                                term financial crunches should<br />
                                not be so tough...
                            </Text>
                            <Text ml={32} mt={7} color='#3A3A3C' fontSize='20px'>
                                Now you can access loans upto #500,000 with a flat<br />
                                monthly interest rate of 2.5% in a few minutes.
                            </Text>
                            <Button ml={32} mt={7} bg='#0A2472' h='14' fontSize='18px'>Request Loan</Button>
                        </Box>
                        <Stack mt={8} alignItems='flex-end'>
                            <Container justifySelf='flex-end' ml={80} pl={6} pt={1} w='40' h='8' bg='#0E6BA8'>
                                Loan Calculator
                            </Container>
                            
                            <Box border='1px solid black' h='60' w='60' alignItems='center'>

                            </Box>
                            
                        </Stack>
                    </Flex>
                </HStack>
            </Flex>
        </HStack>
    )
}

export default HeroSection
