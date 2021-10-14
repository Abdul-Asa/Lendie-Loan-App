import { VStack, Box,HStack,Text,Flex } from '@chakra-ui/react'
import React from 'react'
import { IconButton } from "@chakra-ui/button";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter, FaYoutube   } from 'react-icons/fa';

function Footer() {
    return (
        <Box pt={160} pb={20} alignSelf='flex-start' w='100%'>
            <VStack>
                <Box>
                    <HStack justifyContent='flex-start' >
                        <Box>
                            <VStack alignItems='flex-start' >
                                <Text color='#0A2472' fontSize='20' fontWeight='bold' pt={2} pb={4} > Useful Links</Text>
                                <Text color='#00072D' pb={2}> About</Text>
                                <Text color='#00072D' pb={2}> Why Lendie</Text>
                                <Text color='#00072D' pb={2}> FAQs</Text>
                                <Text color='#00072D' pb={2}> Contact Us</Text>

                            </VStack>
                        </Box>
                        <Box>
                            <VStack alignItems='flex-start' ml={60}>
                                <Text color='#0A2472' fontSize='20' fontWeight='bold' pt={2} pb={4}> Services</Text>
                                <Text color='#00072D' pb={2}> About</Text>
                                <Text color='#00072D' pb={2}> Why Lendie</Text>
                                <Text color='#00072D' pb={2}> FAQs</Text>
                                <Text color='#00072D' pb={2}> Contact Us</Text>

                            </VStack>
                        </Box>
                        <Box alignItems='flex-start'>
                            <VStack alignItems='flex-start' ml={40} pb={28}>
                                <Text color='#0A2472' fontSize='20' fontWeight='bold'  > Follow Us</Text>
                               <HStack alignItems='flex-start'>
                                   <IconButton icon={<FaFacebook />} color='blackAlpha.800'></IconButton>
                                   <IconButton icon={<FaInstagram />} color='blackAlpha.800'></IconButton>
                                   <IconButton icon={<FaTwitter />} color='blackAlpha.800'></IconButton>
                                   <IconButton icon={<FaLinkedin />} color='blackAlpha.800'></IconButton>
                                   <IconButton icon={<FaYoutube />} color='blackAlpha.800'></IconButton>
                               </HStack>

                            </VStack>
                        </Box>
                    </HStack>
                </Box>
                <Box borderTop='1px solid black' w='100%' >
                    <Flex justifyContent='space-between'>
                        <Text color='black' ml={32} >{'© 2020, All rights reserved '} </Text>
                        <Text color='black'> Privacy Policy Cookie Policy Terms and Condition Revoke Cookie Consent</Text>
                    </Flex>
                </Box>
            </VStack> 
        </Box>
    )
}

export default Footer
