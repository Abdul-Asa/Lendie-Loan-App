import React from 'react';
import {
  Text,
  FormControl,
  Input,
  Textarea,
  Stack,
  Box,
  Button,
  Heading,
  InputGroup,
  Center,
} from '@chakra-ui/react';
import BG from '../icons/rafiki.svg';

function TalkToUs() {
  return (
    <Box
      id="ContactUs"
      bgColor="#0A2472"
      py={1}
      mt={[8, 6, 0]}
      color="white"
      bgImg={BG}
      bgPosition="bottom left"
      bgRepeat="no-repeat"
    >
      <Stack m={[4, 10, 20]}>
        <Heading textAlign="center" fontSize="24px">
          Talk To Us
        </Heading>
        <Text textAlign="center">
          Our customers are frequently asking these questions about loan
        </Text>
        <FormControl pt={30} pb={28}>
          <InputGroup display={{ base: 'block', md: 'flex' }} pb={2}>
            <Input placeholder="Full Name" name="fullName"></Input>
            <Input
              ml={{ base: 'none', md: 8 }}
              mt={{ base: '10px', md: '0' }}
              placeholder="Email address"
              name="email"
            ></Input>
          </InputGroup>{' '}
          <Textarea
            placeholder="Type your message here."
            minH="100px"
          ></Textarea>
          <Center w="full" mt={4}>
            <Button
              size="lg"
              color="brand.300"
              variant="outline"
              bg="#E5F3FF"
              w="40%"
              padding="14px 32px"
            >
              Submit
            </Button>
          </Center>
        </FormControl>
      </Stack>
    </Box>
  );
}

export default TalkToUs;
