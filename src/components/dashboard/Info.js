import React from 'react';
import {
  Text,
  Link,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Heading,
} from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';

function Info() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex bg="brand.100" align={['start', 'center']}>
      <WarningIcon m={4} color="#0A2472" />
      <Text color="#0A2472" fontSize={['12px', '15px']} m={2}>
        Please note as a first time user, you are only eligible for a loan of
        10,000 Naira after which you get access to up to 1 million naira.&nbsp;
        <Link color="blue" onClick={onOpen}>
          Learn more
        </Link>
      </Text>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent p={4}>
          <ModalHeader textAlign="center" py={8}>
            <Heading>Credit Score</Heading>
          </ModalHeader>
          <ModalCloseButton
            color="white"
            bg="red"
            rounded="full"
            _hover={{ bg: 'red.400' }}
          />
          <ModalBody pb={14}>
            <ul>
              <li>
                All users are eligible for higher amounts of up to
                <b> #500,000</b> after successful processing and repayment of
                their first loan
              </li>
              <li>
                With a complete profile setup and provision of the needed
                information for verification, you get access to loans of up to
                one million naira
              </li>
            </ul>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default Info;
