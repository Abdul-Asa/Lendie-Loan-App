import React from 'react'
import {VStack, Heading,Flex,Text,Box,Spacer,Button} from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';

function TopNav() {

    const {isNotSmallerScreen} = useMediaQuery('min-width:600px');
    return (
        <VStack pb={20} pt={3} alignSelf='flex-start' w='100%' h='59' bg='#E5F3FF' >
            <Flex w='100%'>
                <Flex alignSelf='flex-start'   m={2} ml={isNotSmallerScreen ? "0": "32"} whiteSpace='nowrap' >
                    <Box w='100%'>
                        <Heading p={3} mb={5}  color='#0A2472' bg='#fff' size="lg" fontWeight="bold" w='39'  borderRadius='20' >
                            Lendie   
                        </Heading> 
                    </Box>
                    <Heading size='s' w='100%' ml={10} mt={18} pt={1} color='#0A2472' >About</Heading>
                    <Heading size='s' w='100%' ml={5} mt={18}  pt={1} color='#0A2472'>Why Lendie</Heading>
                    <Heading size='s' w='100%' ml={5} mt={18}  pt={1} color='#0A2472'>FAQs</Heading>
                    <Heading size='s' w='100%' ml={5} mt={18}  pt={1} color='#0A2472'>Contact Us</Heading>
                </Flex>

                <Spacer></Spacer>    
                <Button p={2} m={2} mr={8} mt={0} align='flex-end' color='#0A2472' border='1px solid' h='16' w='36'  as="a" href="/login">Login</Button>
                <Button p={2} m={2} mr={38} mt={0} align='flex-end' color='#0A2472' border='1px solid' h='16' w='36'  as="a" href="/signup">Signup</Button>
            </Flex>
            
            
        </VStack>
    )
}

export default TopNav
