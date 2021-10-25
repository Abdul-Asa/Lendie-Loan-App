import React from 'react';
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Text,
  WrapItem,
  Container,
  Button,
  Stack,
  Spinner,
  AlertDialog,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogContent,
  Center,
} from '@chakra-ui/react';
import { FiHome, FiSettings, FiSearch, FiUser, FiLogOut } from 'react-icons/fi';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { removeUser } from '../../utils/LocalStorage';

const SideBar = ({ ...rest }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  let { path } = useRouteMatch();
  const history = useHistory();

  return (
    <Box
      w="250px"
      bg="brand.300"
      color="whiteAlpha.900"
      pos="fixed"
      h="full"
      mt={[0, 0, '72px']}
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mx="8"
        justifyContent="space-between"
        display={['flex', 'none']}
      >
        <HStack
          marginTop="10"
          marginBottom="5"
          height="fit-content"
          borderRadius="lg"
          _hover={{ background: 'gray.100' }}
          padding="2"
          as="button"
        >
          <WrapItem>
            <Avatar size="md" name="Floppa" />
          </WrapItem>
          <WrapItem mx="10">
            <Container maxW="200px">
              <Text fontSize="md">Floppa</Text>
            </Container>
          </WrapItem>
        </HStack>
      </Flex>
      <Flex
        direction="column"
        align="center"
        justifyContent="space-between"
        h="80vh"
      >
        <Stack mt="16" w="100%" align="center" spacing="30px">
          <Button
            width="80%"
            align="left"
            justifyContent="flex-start"
            as="a"
            href={`${path}/`}
            textDecoration="none"
            bg="transparent"
          >
            <FiHome /> <Text mx="5">Request loan</Text>
          </Button>
          <Button
            width="80%"
            align="left"
            as="a"
            href={`${path}/profile`}
            textDecoration="none"
            justifyContent="flex-start"
            bg="transparent"
          >
            <FiUser /> <Text mx="5">Profile</Text>
          </Button>
          <Button
            width="80%"
            align="left"
            justifyContent="flex-start"
            as="a"
            href={`${path}/overview`}
            textDecoration="none"
            bg="transparent"
          >
            <IoPaperPlaneOutline /> <Text mx="5">Dashboard</Text>
          </Button>
          <Button
            width="80%"
            align="left"
            justifyContent="flex-start"
            bg="transparent"
            as="a"
            href={`${path}/settings`}
            textDecoration="none"
          >
            <FiSettings /> <Text mx="5">Settings</Text>
          </Button>
          <Button
            width="80%"
            align="left"
            justifyContent="flex-start"
            bg="transparent"
            as="a"
            href={`${path}/share`}
            textDecoration="none"
          >
            <FiSearch /> <Text mx="5">Spread the love</Text>
          </Button>
          <Button
            width="80%"
            align="left"
            justifyContent="flex-start"
            bg="transparent"
            as="a"
            href={`${path}/terms&conditions`}
            textDecoration="none"
          >
            <FiSettings /> <Text mx="5">T & C</Text>
          </Button>
        </Stack>
        <Button
          width="80%"
          align="left"
          justifyContent="flex-start"
          bg="transparent"
          onClick={() => {
            setIsOpen(true);
            removeUser();
            setTimeout(() => {
              setIsOpen(false);
              history.push('/');
            }, 1000);
          }}
        >
          <FiLogOut /> <Text mx="5">Logout</Text>
          <AlertDialog isOpen={isOpen}>
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  <Center>
                    <Text mx="20px">Logging out</Text>
                    <Spinner />
                  </Center>
                </AlertDialogHeader>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Button>
      </Flex>
    </Box>
  );
};

export default SideBar;
