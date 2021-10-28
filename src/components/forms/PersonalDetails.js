import {
  Heading,
  Avatar,
  Box,
  Button,
  Stack,
  Select,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const PersonalDetails = () => {
  const [editMode, setEditMode] = useState(false);
  return (
    <Stack p={[2, 4, 6]} spacing="30px">
      <Heading fontSize="2xl">Personal Details</Heading>
      <FormControl px={[0, 2]} w="full">
        <Avatar size="lg" name="Floppa" mb={2} />
        <Stack
          direction={['column', 'column', 'row']}
          spacing={['', '5px', '60px']}
        >
          <Box pt={3} maxW="sm">
            <FormLabel color="#8F90A6" fontSize="sm">
              First Name
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
              Last Name
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
          <Box pt={3} maxW="sm">
            <FormLabel color="#8F90A6" fontSize="sm">
              Email
            </FormLabel>
            <Input
              borderRadius="md"
              type="email"
              w={['full', 'sm']}
              placeholder="Email address"
              name="email"
              value="floppa"
              isDisabled={!editMode}
            />
          </Box>
          <Box pt={3}>
            <FormLabel color="#8F90A6" fontSize="sm">
              Phone Number
            </FormLabel>
            <Input
              borderRadius="md"
              type="tel"
              w={['full', 'sm']}
              placeholder="Phone Number"
              name="phoneNumber"
              value="floppa"
              isDisabled={!editMode}
            />
          </Box>
        </Stack>
        <Stack
          direction={['column', 'column', 'row']}
          spacing={['', '5px', '60px']}
        >
          <Box pt={3} maxW="sm">
            <FormLabel color="#8F90A6" fontSize="sm">
              National Identification Number
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
              Bank Verification Number{' '}
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

        <Box pt={3}>
          <FormLabel color="#8F90A6" fontSize="sm">
            Residential Address
          </FormLabel>
          <Input
            borderRadius="md"
            type="text"
            maxW="lg"
            placeholder="Residential Address"
            name="address"
            value="floppa"
            isDisabled={!editMode}
          />
        </Box>

        <Button
          w={['full', '30%']}
          padding="14px 32px"
          alignSelf={{ sm: 'center', md: 'auto' }}
          color="whiteAlpha.900"
          _hover={{
            bgColor: '#0E6BA8',
          }}
          mt={8}
          mb={[32, 28, 0]}
          bgColor="brand.300"
          onClick={() => {
            setEditMode(!editMode);
          }}
        >
          {editMode ? 'Save Profile' : 'Edit Profile'}
        </Button>
        {editMode && (
          <Button
            w={['full', '30%']}
            padding="14px 32px"
            alignSelf={{ sm: 'center', md: 'auto' }}
            color="whiteAlpha.900"
            _hover={{
              bgColor: '#0E6BA8',
            }}
            mt={8}
            mb={[32, 28, 0]}
            bgColor="brand.300"
            onClick={() => {
              setEditMode(!editMode);
            }}
          >
            Cancel
          </Button>
        )}
      </FormControl>
    </Stack>
  );
};

export default PersonalDetails;
