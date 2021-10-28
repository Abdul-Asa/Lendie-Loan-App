import React, { useState, useEffect } from 'react'; //, { useState, useEffect }
import {
  Heading,
  // VStack,
  HStack,
  Box,
  Flex,
  Textarea,
  FormLabel,
  Skeleton,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogContent,
  Alert,
  AlertDescription,
  AlertTitle,
  CloseButton,
  AlertIcon,
  FormControl,
  Stack,
  useMediaQuery,
  Button,
  IconButton,
  Table,
  Thead,
  Tbody,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  // ModalFooter,
  ModalBody,
  ModalCloseButton,
  Tr,
  Th,
  Td,
  Center,
  useToast,
  // TableCaption,
  // WrapItem,
  Text,
  Input,
  InputGroup,
  Select,
  Collapse,
} from '@chakra-ui/react';
import { FaFolderOpen, FaIdCard, FaPlus, FaTrash } from 'react-icons/fa';
const CardDetails = () => {
  const [editMode, setEditMode] = useState(false);
  const [openAccordion, setAccordion] = useState(false);

  return (
    <Stack p={[2, 4, 6]} spacing="30px">
      <Heading fontSize="2xl">Card and Bank Details</Heading>
      <FormControl px={[0, 2]} w="full">
        <Stack spacing="30px" px={{ base: '3%', md: '40px' }}>
          <Flex alignItems="center" justify="space-between" width="100%">
            <Text display={['none', 'block', 'block']}>Cards and Banks</Text>
            <Button
              color="whiteAlpha.900"
              bg="brand.300"
              _hover={{
                bgColor: '#0E6BA8',
              }}
              borderRadius="full"
              size="md"
              onClick={() => {
                setAccordion(!openAccordion);
              }}
            >
              <FaPlus size="20px" />
              <Text ml="3">Add Card/Bank</Text>
            </Button>
          </Flex>
          <Collapse in={openAccordion} animateOpacity>
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
            >
              Save
            </Button>
          </Collapse>

          <Box></Box>
        </Stack>
      </FormControl>
    </Stack>
  );
};

export default CardDetails;
