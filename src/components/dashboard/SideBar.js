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
  Spinner,
  AlertDialog,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogContent,
  Center,
} from '@chakra-ui/react';
import { FiSettings, FiUser, FiLogOut } from 'react-icons/fi';
import {
  MoneyIcon,
  DashboardIcon,
  HeartIcon,
  FAQIcon,
  TCIcon,
} from '../icons/icons';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { removeUser } from '../../utils/LocalStorage';

const SideBar = ({ user, ...rest }) => {
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
            <Avatar size="md" name={user.firstName} src={user.image} />
          </WrapItem>
          <WrapItem mx="10">
            <Container maxW="200px">
              <Text fontSize="md">{user.firstName}</Text>
            </Container>
          </WrapItem>
        </HStack>
      </Flex>
      <Flex
        direction="column"
        align="center"
        justifyContent="space-between"
        h="83vh"
        color="white"
      >
        <Flex
          direction="column"
          mt="12"
          h="full"
          w="full"
          justify="space-between"
        >
          <Button
            pl={12}
            w="full"
            bg="transparent"
            alignItems="center"
            as="a"
            href={`${path}/`}
            justifyContent="start"
            rounded="none"
            _hover={{ bg: 'brand.200' }}
          >
            <MoneyIcon />
            <Text mx="5" fontWeight="300">
              Request loan
            </Text>
          </Button>
          <Button
            pl={12}
            w="full"
            bg="transparent"
            as="a"
            href={`${path}/profile`}
            justifyContent="start"
            rounded="none"
            _hover={{ bg: 'brand.200' }}
          >
            <FiUser />
            <Text mx="5" fontWeight="300">
              Profile
            </Text>
          </Button>
          <Button
            as="a"
            href={`${path}/overview`}
            pl={12}
            bg="transparent"
            w="full"
            alignItems="center"
            justifyContent="start"
            rounded="none"
            _hover={{ bg: 'brand.200' }}
          >
            <DashboardIcon />
            <Text mx="5" fontWeight="300">
              Dashboard
            </Text>
          </Button>
          <Button
            pl={12}
            bg="transparent"
            w="full"
            alignItems="center"
            justifyContent="start"
            rounded="none"
            _hover={{ bg: 'brand.200' }}
            as="a"
            href={`${path}/settings`}
          >
            <FiSettings />
            <Text mx="5" fontWeight="300">
              Settings
            </Text>
          </Button>
          <Button
            pl={12}
            w="full"
            bg="transparent"
            alignItems="center"
            justifyContent="start"
            rounded="none"
            _hover={{ bg: 'brand.200' }}
            as="a"
            href={`${path}/share`}
          >
            <HeartIcon />{' '}
            <Text mx="5" fontWeight="300">
              Spread the love
            </Text>
          </Button>
          <Button
            pl={12}
            w="full"
            bg="transparent"
            alignItems="center"
            justifyContent="start"
            rounded="none"
            _hover={{ bg: 'brand.200' }}
            as="a"
            href={`${path}/FAQs`}
          >
            <FAQIcon />{' '}
            <Text mx="5" fontWeight="300">
              FAQs
            </Text>
          </Button>
          <Button
            pl={12}
            w="full"
            bg="transparent"
            alignItems="center"
            justifyContent="start"
            rounded="none"
            _hover={{ bg: 'brand.200' }}
            as="a"
            href={`${path}/terms&conditions`}
          >
            <TCIcon />
            <Text mx="5" fontWeight="300">
              T & C
            </Text>
          </Button>

          <Button
            mt="25%"
            pl={12}
            w="full"
            alignItems="center"
            justifyContent="start"
            bg="transparent"
            rounded="none"
            _hover={{ bg: 'brand.200' }}
            onClick={() => {
              setIsOpen(true);
              removeUser();
              setTimeout(() => {
                setIsOpen(false);
                history.push('/');
              }, 1000);
            }}
          >
            <FiLogOut />{' '}
            <Text mx="5" fontWeight="300">
              Logout
            </Text>
          </Button>
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
        </Flex>
      </Flex>
    </Box>
  );
};

export default SideBar;
