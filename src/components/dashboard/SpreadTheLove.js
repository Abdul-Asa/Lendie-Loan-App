import { Heading, Text, VStack, Button, Image, Stack } from '@chakra-ui/react'
import suprise  from '../icons/suprise.svg';
import React from 'react'

function SpreadTheLove() {
    return (
        <Stack h={['100vh','100vh','100vh','100vh']}>
            <VStack>
                <Heading color='black' h='48px' fontSize='36px' fontWeight='bold' mb='20px' > Earn points </Heading>
                <Text color='black' fontSize={['13px','15px', '18px','18px']} fontWeight={[ '300','300','400','400']} lineHeight='24px' align='center'> You earn points when you invite a friend. Lendie points help <br />  you unlock higher loan amounts</Text>
                <Image src={suprise} boxSize={['300px', '300px', '350px', '350px']}></Image>
                <Button color='#FFFFFF' bg='#0A2472' w={['150px', '300px', '300px', '300px']} h={['40px','40px', '40px', '40px']} borderRadius='6px' pt={['5px', '14px', '14px', '14px']} pb={['5px', '14px', '14px', '14px']} pl='120px' pr='120px'> Invite a friend </Button>
            </VStack>
        </Stack>
    )
}

export default SpreadTheLove
