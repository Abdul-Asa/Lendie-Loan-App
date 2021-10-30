import {
  Heading,
  Avatar,
  Box,
  Button,
  Stack,
  FormControl,
  FormLabel,
  Flex,
  IconButton,
  Input,
  HStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiFillCamera } from 'react-icons/ai';
import { profilePicAction, personalInfoAction } from '../../utils/Actions';

const PersonalDetails = () => {
  const [editMode, setEditMode] = useState(false);
  const [profilePic, setProfilePic] = useState({});
  const [imgPath, setPath] = useState({});
  const [loading, setLoading] = useState(false);
  const [personalDetailsForm, setPersonaldetails] = useState({
    firstName: 'Floppa',
    lastName: 'Floppa',
    phoneNumber: '0123456789',
    NIN: '0000000000000',
    BVN: '0000000000000',
    address: 'Floppa Island',
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setPersonaldetails((inputDetails) => {
      return { ...inputDetails, [name]: value };
    });
  };
  const handleFileChange = ({ target }) => {
    setProfilePic(target.files[0]);
    setPath(URL.createObjectURL(target.files[0]));
    console.log(loading);
  };

  const submitForm = () => {
    const imageData = new FormData();
    imageData.append('image', profilePic);
    setLoading(true);
    personalInfoAction(personalDetailsForm)
      .then((response) => {
        // setError(response);
        console.log(response);
        setLoading(false);
        setEditMode(!editMode);
      })
      .catch((err) => {
        // setError(err);
        setLoading(false);
        console.log(err);
      });

    profilePicAction(imageData)
      .then((response) => {
        // setError(response);
        console.log(response);
        setLoading(false);
        setEditMode(!editMode);
      })
      .catch((err) => {
        // setError(err);
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <Stack p={[2, 4, 6]} spacing="30px">
      <Heading fontSize="2xl">Personal Details</Heading>
      <FormControl px={[0, 2]} w="full">
        <Flex align="end" mb={2}>
          <Avatar
            size="lg"
            name="Floppa"
            src={imgPath}
            position="relative"
          ></Avatar>
          <Input
            type="file"
            id="image"
            display="none"
            name="image"
            accept="image/*"
            size="sm"
            onChange={handleFileChange}
          />
          {editMode && (
            <IconButton
              as={AiFillCamera}
              variant="link"
              boxSize="8"
              left="50"
              color="red"
              position="absolute"
              onClick={() => {
                document.getElementById('image').click();
              }}
            />
          )}
        </Flex>
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
              value={personalDetailsForm.firstName}
              isDisabled={!editMode}
              onChange={handleInput}
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
              value={personalDetailsForm.lastName}
              isDisabled={!editMode}
              onChange={handleInput}
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
              value="Floppa@gmail.com"
              isDisabled
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
              value={personalDetailsForm.phoneNumber}
              isDisabled={!editMode}
              onChange={handleInput}
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
              value={personalDetailsForm.NIN}
              isDisabled={!editMode}
              onChange={handleInput}
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
              value={personalDetailsForm.BVN}
              isDisabled={!editMode}
              onChange={handleInput}
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
            value={personalDetailsForm.address}
            isDisabled={!editMode}
            onChange={handleInput}
          />
        </Box>
        <HStack align="center" mt={8} mb={[32, 28, 0]}>
          <Button
            w={['full', '30%']}
            padding="14px 32px"
            color="whiteAlpha.900"
            isLoading={loading}
            _hover={{
              bgColor: '#0E6BA8',
            }}
            bgColor="brand.300"
            onClick={() => {
              if (editMode) {
                submitForm();
              } else {
                setEditMode(!editMode);
              }
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
      </FormControl>
    </Stack>
  );
};

export default PersonalDetails;
