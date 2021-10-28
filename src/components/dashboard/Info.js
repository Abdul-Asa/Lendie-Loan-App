import React from 'react'
import { Stack, Box, Text, Link, Flex } from '@chakra-ui/react'
import {WarningIcon} from '@chakra-ui/icons'


function Info() {
    return (
        <Stack>
            <Box bg='#E5F3FF' >
                <Flex>
                    <WarningIcon m={4} color='#0A2472'/>
                    <Text color='#0A2472' fontFamily='Lato' fontSize='18px' m={2}>
                        Please note as a first time user you are only eligible for a loan of 10,000 Naira after which you
                        get <br /> access to upto 1 million naira.{" "}
                        <Link>
                            learn more
                        </Link>
                    </Text>
                </Flex>
            </Box>
        </Stack>
    )
}

export default Info
