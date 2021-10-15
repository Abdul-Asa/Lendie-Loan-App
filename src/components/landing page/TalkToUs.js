import React from 'react'
import {Center, Text, FormControl, FormLabel, Input, Textarea, Stack, Flex, Box, Spacer} from '@chakra-ui/react'

function TalkToUs() {
    return (
        <Box maxWidth='800' w='100%' justifySelf='center' bg='#0A2472' p={8}  >
            
            <Stack>
                <Text textAlign='center' fontWeight='extrabold' fontSize='28'> Talk To Us</Text>
                <Flex justify='space-around' pt={4}>
                    <FormControl>
                        <FormLabel> Full Name</FormLabel>
                        <Input placeholder='Full Name' type='text' />
                    </FormControl>
                    <FormControl>
                        <FormLabel> Email </FormLabel>
                        <Input placeholder='Email' type='text' />
                    </FormControl>
                </Flex>
                <Textarea placeholder='Type your message here. ' m={18}></Textarea>
            </Stack>
        </Box>
        
    )
}

export default TalkToUs

