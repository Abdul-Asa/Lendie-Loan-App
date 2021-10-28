import React from 'react'
import Info from './Info'

import { Box, Heading, Flex, Input, FormControl, FormLabel, FormHelperText, Select, Text, Button,InputGroup, InputLeftElement } from '@chakra-ui/react'


function RequestLoan() {
    return (
        <Box h='120vh' max-height='100%'>
            <Info />
            <Box mt='16px' pl={12}>
                <Heading color='#333333' fontSize='24px' pt={4}>
                    Hello Floppa 👋 
                </Heading>
                <Heading color='#333333' fontFamily='Lato' fontStyle='normal' fontSize='36px' fontWeight='600' pt={6}>
                    Request Loan
                </Heading>
            </Box>
            <Box pl={12} pt={10}>
                <Flex>
                    <FormControl>
                        <FormLabel color="#00072D" fontSize='14px'>
                            Select Loan Amount
                        </FormLabel>
                        <Select placeholder='10000' color='#C7C9D9' borderColor='#C7C9D9' borderRadius='8px' w='322px'>
                            <option>1000</option>
                            <option>2000</option>
                            <option>3000</option>
                            <option>5000</option>
                            <option>8000</option>
                        </Select>
                        <FormHelperText color="#0063F7" fontSize='14px'>Want a different amount?</FormHelperText>
                    </FormControl>
                    <FormControl mr={32}>
                        <FormLabel color="#00072D" fontSize='14px'>
                            Purpose of Loan
                        </FormLabel>
                        <Select color='#C7C9D9' borderColor='#C7C9D9' borderRadius='8px' w='322px'>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                        </Select>
                    </FormControl>
                </Flex>
            </Box>
            <Box pl={12} pt={8}>
                <Text color='#333333'> Loan Period </Text>
                <Flex >
                    <Button bg='#E5F3FF' color='#0A2472'mr='12px' borderRadius='none'>1 WEEK</Button>
                    <Button bg='#E5F3FF' color='#0A2472'mr='12px' borderRadius='none'>2 WEEKS</Button>
                    <Button bg='#E5F3FF' color='#0A2472'mr='12px' borderRadius='none'>1 MONTH</Button>
                    <Button bg='#E5F3FF' color='#0A2472'mr='12px' borderRadius='none'>2 MONTHS</Button>
                    <Button bg='#0A2472' color='#fff'   mr='12px' borderRadius='none'>3 MONTHS</Button>
                </Flex>
                <Flex >
                    <Box pt={8}>
                        <Text color='#00072D' fontSize='14px'>Loan Interest</Text>
                        <InputGroup>
                            <InputLeftElement
                                color='#C7C9D9'
                                pointerEvents="none"
                                children= 'N |'
                            />
                            <Input borderColor='#C7C9D9' />
                        </InputGroup>
                    </Box>
                    <Box pt={8} ml={40}>
                        <Text color='#00072D' fontSize='14px'>Total Amount Payable</Text>
                        <InputGroup>
                            <InputLeftElement
                                color='#C7C9D9'
                                pointerEvents="none"
                                children= 'N |'
                            />
                            <Input borderColor='#C7C9D9' />
                        </InputGroup>
                    </Box>
                </Flex>
                <Button color='#FFFFFF' bg='#0A2472' mt={16} w='335px' borderRadius='6px' fontSize='16px'>
                        Request Loan
                    </Button>
            </Box>
        </Box>
        
       
    )
}

export default RequestLoan
