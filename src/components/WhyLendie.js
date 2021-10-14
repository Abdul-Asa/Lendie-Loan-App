import { Button } from '@chakra-ui/button'
import { Box, Heading, HStack, VStack, Text, Stack, Center, } from '@chakra-ui/layout'
import React from 'react'
import { Image } from '@chakra-ui/image';
//import  from '../components/images/girl.svg';

function WhyLendie() {
    return (
        <Box  pt={160}>
            <VStack>
                <Text color='#0A2472' fontSize='18' fontWeight='bold' justifySelf='center'>
                    How Does Lendie Work?
                </Text>
                <Box>
                    <HStack>
                        <Box justifyItems='center' h='40'>
                            <Center>
                                <VStack >
                                    <Image></Image>
                                    <Text color='#0A2472'> Sign Up</Text>
                                    <Text color='#0A2472' justifySelf='center'> sign up to create your<br /> Account</Text>
                                </VStack>
                            </Center>
                        </Box>
                        <Box justifyItems='center' h='40'>
                            <Center>
                                <VStack>
                                    <Image></Image>
                                    <Text color='#0A2472'>Apply</Text>
                                    <Text color='#0A2472'>Choose a loan amount and apply<br /> with your valid IDs </Text>
                                </VStack>
                            </Center>
                        </Box>
                        <Box alignItems='center' h='40'>
                            <VStack>
                                <Image></Image>
                                <Text color='#0A2472'>Verify</Text>
                                <Text color='#0A2472'>You would then need to verify<br /> information you have provided</Text>
                            </VStack>
                        </Box>
                        <Box alignItems='center' h='40'>
                            <VStack>
                                <Image></Image>
                                <Text color='#0A2472'> Get Funded</Text>
                                <Text color='#0A2472' justifySelf='center'>After completing previous steps,<br /> you would receive loan amount <br /> requested in your bank account in<br /> few minutes.</Text>
                            </VStack>
                        </Box>
                        
                    </HStack>
                </Box>
                <Center>
                    <Button color='#0A2472'>Sign up</Button>
                </Center>
            </VStack> 
        </Box>
    )
}

export default WhyLendie