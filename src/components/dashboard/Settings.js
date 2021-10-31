import React, { useState } from 'react';
import {
  Heading,
  Stack,
  Box,
  Flex,
  Spacer,
  Text,
  Button,
  IconButton,
  Collapse,
  useToast,
  Input,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogContent,
} from '@chakra-ui/react';
import { FaCaretDown, FaCaretUp, FaTrash } from 'react-icons/fa';
// import { useHistory } from 'react-router-dom';
import { changePasswordAction } from '../../utils/Actions';

const Settings = () => {
  const [openAccordion, setAccordion] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  // const history = useHistory();
  const toast = useToast();
  const [buttonLoad, setButtonLoad] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    oldPassword: '',
    newPassword: '',
  });

  const toggleAccordion = () => {
    setAccordion(!openAccordion);
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setPasswordForm((inputDetails) => {
      return { ...inputDetails, [name]: value };
    });
  };

  const handleSubmit = () => {
    setButtonLoad(true);
    changePasswordAction(passwordForm)
      .then((response) => {
        let status = 'error';
        let message = response.message;
        let title = 'Error';
        if (response.message === 'success') {
          status = 'success';
          title = 'Success';
          message = 'Password successfully changed';
        }
        toast({
          title: title,
          position: 'top',
          description: message,
          status: status,
          duration: 5000,
          isClosable: true,
        });
        setButtonLoad(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Stack p={[6, 10, 14]} color="brand.400" spacing="40px">
      <Heading>Settings</Heading>
      <Stack
        paddingLeft={{ base: 0, md: '45px' }}
        alignItems={{ base: 'center', md: 'flex-start' }}
        direction="column"
        spacing="20px"
      >
        <Flex
          width="80%"
          borderWidth="1px"
          padding="10px"
          borderColor="gray.200"
          borderRadius="md"
          alignItems="center"
        >
          <Box width="100%">
            <Flex alignItems="center" justify="space-between" width="100%">
              <Text>Change Password</Text>
              <Spacer />

              <IconButton
                icon={openAccordion ? <FaCaretUp /> : <FaCaretDown />}
                size="sm"
                onClick={toggleAccordion}
              />
            </Flex>
            <Collapse in={openAccordion} animateOpacity>
              <Stack spacing="10px" marginTop="5%">
                <Input
                  placeholder="Old Password"
                  size="sm"
                  defaultValue={passwordForm.oldPassword}
                  onChange={handleInput}
                  name="oldPassword"
                />
                <Input
                  placeholder="New Password"
                  size="sm"
                  defaultValue={passwordForm.newPassword}
                  onChange={handleInput}
                  name="newPassword"
                />
                <Button
                  variant="outline"
                  isLoading={buttonLoad}
                  onClick={() => {
                    // setButtonLoad(true);
                    // setTimeout(() => {
                    handleSubmit();

                    // }, 1000);
                  }}
                >
                  Change
                </Button>
              </Stack>
            </Collapse>
          </Box>
        </Flex>
        <Flex
          width="80%"
          justify="space-between"
          borderWidth="1px"
          padding="10px"
          borderColor="gray.200"
          borderRadius="md"
          alignItems="center"
        >
          <Text>Delete Account</Text>
          <IconButton
            icon={<FaTrash />}
            variant="solid"
            _hover={{ bg: 'red.500', color: 'white' }}
            size="sm"
            alignSelf="flex-end"
            onClick={() => {
              setIsOpen(true);
            }}
          />
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            size="sm"
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Delete User
                </AlertDialogHeader>

                <AlertDialogBody>
                  Are you sure? You can't undo this action afterwards.
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button
                    colorScheme="red"
                    // onClick={() => {
                    //   deleteAccount().then((response) => {
                    //     console.log(response);
                    //     // removeUser();
                    //     history.push('/');
                    //   });
                    // }}
                    ml={3}
                  >
                    Delete
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default Settings;
