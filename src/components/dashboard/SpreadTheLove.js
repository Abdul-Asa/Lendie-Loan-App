import {
  Heading,
  Text,
  Button,
  Image,
  useToast,
  Stack,
  useClipboard,
} from '@chakra-ui/react';
import suprise from '../icons/suprise.svg';
import React from 'react';

function SpreadTheLove() {
  const { hasCopied, onCopy } = useClipboard(
    'https://lendie-loan-app.vercel.app/'
  );
  const toast = useToast();

  return (
    <Stack p={[3, 6, 8]} align="center">
      <Heading
        color="black"
        h="48px"
        fontSize="36px"
        fontWeight="bold"
        mb="20px"
      >
        Earn points
      </Heading>
      <Text
        color="black"
        fontSize={['13px', '15px', '18px', '18px']}
        fontWeight={['300', '300', '400', '400']}
        lineHeight="24px"
        align="center"
      >
        You earn points when you invite a friend. Lendie points help <br /> you
        unlock higher loan amounts
      </Text>
      <Image
        src={suprise}
        boxSize={['300px', '300px', '350px', '350px']}
      ></Image>
      <Button
        bg="#0A2472"
        w={['150px', '300px', '300px', '300px']}
        h={['40px', '40px', '40px', '40px']}
        borderRadius="6px"
        pt={['5px', '14px', '14px', '14px']}
        pb={['5px', '14px', '14px', '14px']}
        pl="120px"
        pr="120px"
        size="lg"
        color="whiteAlpha.900"
        _hover={{
          bgColor: '#0E6BA8',
        }}
        _disabled={{
          bgColor: '#9DBFF9',
          cursor: 'not-allowed',
          _hover: { bgColor: '#9DBFF9' },
        }}
        bgColor="brand.300"
        onClick={onCopy}
      >
        Invite a friend
      </Button>
      {hasCopied &&
        toast({
          title: 'Link Copied',
          position: 'top',
          description:
            "Lendie's link has been copied into your clipboard. Now you can easily send our link to a friend of yours ",
          status: 'info',
          duration: 5000,
          isClosable: true,
        })}
    </Stack>
  );
}

export default SpreadTheLove;
