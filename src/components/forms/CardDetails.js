import React, { useState } from 'react';
import {
  Heading,
  HStack,
  Box,
  Flex,
  FormLabel,
  Image,
  FormControl,
  Stack,
  Button,
  Text,
  Input,
} from '@chakra-ui/react';
import chip from '../icons/chip.svg';
import visa from '../icons/Visa.svg';

const CardDetails = () => {
  const [editMode, setEditMode] = useState(false);

  return (
    <Stack p={[2, 4, 6]} spacing="30px" h="1000px">
      <Heading fontSize="2xl">Card and Bank Details</Heading>
      <FormControl px={[0, 2]} w="full">
        <Stack spacing="30px" px={{ base: '3%', md: '40px' }}>
          <Text fontSize="xl">Card</Text>
          <Stack
            w="350px"
            h="210px"
            rounded="lg"
            display={['none', 'block']}
            bgGradient="linear(to-bl,brand.400,brand.200)"
            color="silver"
            mb={3}
          >
            <Flex justify="space-between">
              <Image src={visa} pl={['2', '5']} pt="2"></Image>
              <Text pr={['2', '8']} pt="3">
                PayStack Card
              </Text>
            </Flex>
            <Image src={chip} pl={['2', '8']}></Image>
            <Flex p="3" color="white" justify="space-evenly">
              <Heading fontSize="2xl">6219</Heading>
              <Heading fontSize="2xl">****</Heading>
              <Heading fontSize="2xl">****</Heading>
              <Heading fontSize="2xl">8075</Heading>
            </Flex>
            <Flex justify="space-between" color="white" px={['2', '8']} pt={2}>
              <Box>
                <Text fontSize="9px">Card Holder's Name</Text>
                <Text isTruncated maxW="160px">
                  Floppa
                </Text>
              </Box>
              <Box>
                <Text fontSize="9px">Expiry Date</Text>
                <Text>08/26</Text>
              </Box>
              <Box>
                <Text fontSize="9px">CVV</Text>
                <Text>080</Text>
              </Box>
            </Flex>
          </Stack>
          <Stack
            direction={['column', 'column', 'row']}
            spacing={['', '5px', '60px']}
          >
            <Box pt={3} maxW="sm">
              <FormLabel color="#8F90A6" fontSize="sm">
                Card Number
              </FormLabel>
              <Input
                borderRadius="md"
                type="text"
                w={['full', 'sm']}
                placeholder="First Name"
                name="firstName"
                value="floppa"
                isDisabled={!editMode}
              />
            </Box>
            <Box pt={3}>
              <FormLabel color="#8F90A6" fontSize="sm">
                Card Holder's Name
              </FormLabel>
              <Input
                borderRadius="md"
                type="text"
                w={['full', 'sm']}
                placeholder="Last Name"
                name="lastName"
                value="floppa"
                isDisabled={!editMode}
              />
            </Box>
          </Stack>
          <Stack
            direction={['column', 'column', 'row']}
            spacing={['', '5px', '60px']}
            pb={2}
          >
            <Box pt={3} maxW="sm">
              <FormLabel color="#8F90A6" fontSize="sm">
                CVV
              </FormLabel>
              <Input
                borderRadius="md"
                type="text"
                w={['full', 'sm']}
                placeholder="National Identification Number      "
                name="NIN"
                value="floppa"
                isDisabled={!editMode}
              />
            </Box>
            <Box pt={3}>
              <FormLabel color="#8F90A6" fontSize="sm">
                Card Expiry Date
              </FormLabel>
              <Input
                borderRadius="md"
                type="text"
                w={['full', 'sm']}
                placeholder="Bank Verification Number"
                name="BVN"
                value="floppa"
                isDisabled={!editMode}
              />
            </Box>
          </Stack>
          <Text fontSize="xl" pt={4}>
            Bank
          </Text>{' '}
          <Stack
            direction={['column', 'column', 'row']}
            spacing={['', '5px', '60px']}
          >
            <Box pt={3} maxW="sm">
              <FormLabel color="#8F90A6" fontSize="sm">
                Account Name
              </FormLabel>
              <Input
                borderRadius="md"
                type="text"
                w={['full', 'sm']}
                placeholder="First Name"
                name="firstName"
                value="floppa"
                isDisabled={!editMode}
              />
            </Box>
            <Box pt={3}>
              <FormLabel color="#8F90A6" fontSize="sm">
                Account Number
              </FormLabel>
              <Input
                borderRadius="md"
                type="text"
                w={['full', 'sm']}
                placeholder="Last Name"
                name="lastName"
                value="floppa"
                isDisabled={!editMode}
              />
            </Box>
          </Stack>
          <Stack
            direction={['column', 'column', 'row']}
            spacing={['', '5px', '60px']}
          >
            <Box maxW="sm">
              <FormLabel color="#8F90A6" fontSize="sm">
                Name of Bank
              </FormLabel>
              <Input
                borderRadius="md"
                type="text"
                w={['full', 'sm']}
                placeholder="National Identification Number      "
                name="NIN"
                value="floppa"
                isDisabled={!editMode}
              />
            </Box>
          </Stack>
          <HStack align="center" mt={8}>
            <Button
              w={['full', '30%']}
              padding="14px 32px"
              color="whiteAlpha.900"
              _hover={{
                bgColor: '#0E6BA8',
              }}
              bgColor="brand.300"
              onClick={() => {
                setEditMode(!editMode);
              }}
            >
              {editMode ? 'Save Profile' : 'Edit Profile'}
            </Button>
            {editMode && (
              <Button
                padding="14px 32px"
                color="whiteAlpha.900"
                _hover={{
                  bgColor: '#0E6BA8',
                }}
                bgColor="brand.300"
                onClick={() => {
                  setEditMode(!editMode);
                }}
              >
                Cancel
              </Button>
            )}
          </HStack>
        </Stack>
      </FormControl>
    </Stack>
  );
};

export default CardDetails;
