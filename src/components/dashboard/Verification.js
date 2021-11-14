import {
  Heading,
  Box,
  Button,
  Stack,
  FormControl,
  FormLabel,
  useToast,
  Flex,
  Checkbox,
  CheckboxGroup,
  Input,
  HStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { personalInfoAction } from '../../utils/Actions';
import { useHistory } from 'react-router-dom';

const Verification = ({ user }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  // console.log(user.firstName);
  const [personalDetailsForm, setPersonaldetails] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.phoneNumber,
    NIN: '',
    BVN: '',
    address: '',
    saveDetails: false,
  });
  console.log(personalDetailsForm);

  const toast = useToast();
  const handleInput = (e) => {
    const { name, value } = e.target;
    if (e.target.type === 'checkbox') {
      const { checked } = e.target;
      return setPersonaldetails((inputDetails) => {
        return { ...inputDetails, [name]: checked };
      });
    }
    setPersonaldetails((inputDetails) => {
      return { ...inputDetails, [name]: value };
    });
  };

  const submitForm = () => {
    setLoading(true);
    // setPersonaldetails((inputDetails) => {
    //   return {
    //     ...inputDetails,
    //   };
    // });
    personalInfoAction(personalDetailsForm)
      .then((response) => {
        if (response.message === 'success') {
          if (!user.saveCard) {
            history.push(`payments`);
          } else {
            history.push(`/`);
          }
          // toast({
          //   title: 'Success',
          //   position: 'top',
          //   description: '',
          //   status: 'success',
          //   duration: 5000,
          //   isClosable: true,
          // });
        } else {
          toast({
            title: 'Error',
            position: 'top',
            description: response.message,
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
        setLoading(false);
      })
      .catch((err) => {
        // setError(err);
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <Stack p={[2, 4, 6]} spacing="30px" overflow="auto">
      <Heading fontSize="2xl">Verification</Heading>
      <FormControl px={[0, 2]} w="full">
        <Stack
          direction={['column', 'column', 'row']}
          spacing={['', '5px', '60px']}
        >
          <Box pt={3}>
            <FormLabel color="#8F90A6" fontSize="sm">
              Residential Address
            </FormLabel>
            <Input
              borderRadius="md"
              type="text"
              w={['full', 'sm']}
              placeholder="Residential Address"
              name="address"
              value={personalDetailsForm.address}
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
              onChange={handleInput}
            />
          </Box>
        </Stack>
        <Stack
          direction={['column', 'column', 'row']}
          spacing={['', '5px', '60px']}
        >
          <Box pt={3}>
            <FormLabel color="#8F90A6" fontSize="sm">
              National Identification Number (NIN)
            </FormLabel>
            <Input
              borderRadius="md"
              type="text"
              w={['full', 'sm']}
              placeholder="National Identification Number "
              name="NIN"
              value={personalDetailsForm.NIN}
              onChange={handleInput}
            />
          </Box>
          <Box pt={3}>
            <FormLabel color="#8F90A6" fontSize="sm">
              Upload any Goverment issued ID
            </FormLabel>
            <Input w={['full', 'sm']} borderRadius="md" type="file" name="ID" />
          </Box>
        </Stack>
        <CheckboxGroup>
          <Flex mt="6">
            <Checkbox
              borderColor="gray.500"
              name="saveDetails"
              checked={personalDetailsForm.saveDetails}
              onChange={handleInput}
            />
            <FormLabel color="#8F90A6" ml="10px" my="0" fontSize="sm">
              Save my details to make process faster
            </FormLabel>
          </Flex>
        </CheckboxGroup>{' '}
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
            onClick={submitForm}
          >
            Next
          </Button>
        </HStack>
      </FormControl>
    </Stack>
  );
};

export default Verification;
