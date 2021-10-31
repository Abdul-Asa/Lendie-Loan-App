import React, { useState } from 'react';
import {
  Text,
  FormControl,
  Input,
  Textarea,
  useToast,
  Stack,
  Box,
  Button,
  Heading,
  InputGroup,
  Center,
} from '@chakra-ui/react';
import { send } from 'emailjs-com';
import BG from '../icons/rafiki.svg';

function TalkToUs() {
  const [toSend, setToSend] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(true);
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    if (toSend.message.length > 3 && toSend.from_name) {
      setValid(false);
    } else {
      setValid(true);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let templateParams = {
      from_name: toSend.from_name,
      from_email: toSend.from_email,
      to_name: 'Lendie Customer Service',
      message: toSend.message,
    };
    setLoading(true);
    send(
      'service_ii6pb52',
      'template_p1cmegd',
      templateParams,
      'user_Z9MQoCSrbuXlA5RmPqD2K'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setLoading(false);
        toast({
          title: 'Success',
          position: 'bottom',
          description: 'Message sent',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });

        setToSend({
          from_name: '',
          to_name: '',
          message: '',
        });
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setLoading(false);
        toast({
          title: 'Failed',
          position: 'bottom',
          description: 'Try again later',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  };
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
          We’re here to help and answer any question you might have
        </Text>
        <FormControl pt={30} pb={28}>
          <InputGroup display={{ base: 'block', md: 'flex' }} pb={2}>
            <Input
              placeholder="Full Name"
              value={toSend.from_name}
              onChange={handleChange}
              name="from_name"
            ></Input>
            <Input
              ml={{ base: 'none', md: 8 }}
              mt={{ base: '10px', md: '0' }}
              placeholder="Email address"
              name="from_email"
              value={toSend.from_email}
              onChange={handleChange}
            ></Input>
          </InputGroup>{' '}
          <Textarea
            placeholder="Type your message here."
            minH="100px"
            value={toSend.message}
            onChange={handleChange}
            name="message"
          ></Textarea>
          <Center w="full" mt={4}>
            <Button
              variant="outline"
              bg="#E5F3FF"
              w="40%"
              padding="14px 32px"
              size="lg"
              color="whiteAlpha.900"
              _hover={{
                bgColor: '#0E6BA8',
              }}
              _disabled={{
                bgColor: 'grey',
                cursor: 'not-allowed',
                _hover: { bgColor: 'grey' },
              }}
              bgColor="brand.300"
              onClick={onSubmit}
              isLoading={loading}
              isDisabled={valid}
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
