import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  HStack,
  Spinner,
  AlertDialog,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogContent,
  Center,
  Badge,
  Container,
  Avatar,
  AvatarBadge,
  IconButton,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  useDisclosure,
  useMediaQuery,
  Text,
  Heading,
} from '@chakra-ui/react';
import SideBar from '../components/dashboard/SideBar';
import { BellIcon } from '../components/icons/icons';
import TermsConditions from '../components/dashboard/TermsConditions';
import FAQ from '../components/dashboard/FAQ';
import RequestLoan from '../components/dashboard/RequestLoan';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import Profile from '../components/dashboard/Profile';
import { getUserAction } from '../utils/Actions';

const LandingPage = () => {
  const [isDesktop] = useMediaQuery('(min-width: 48em)');
  const [user, setUser] = useState({ firstName: '', image: '' });
  const [loading, setLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  let { path } = useRouteMatch();

  useEffect(() => {
    const User = getUserAction();
    User.then((data) => {
      setUser(data.user);
      setLoading(false);
    }).catch((err) => {
      console.log(err);
    });
    return () => {
      setLoading(false);
    };
  }, [loading]);

  return (
    <Box minH="100vh" transition="0.3s ease" as="section" overflow="hidden">
      {isDesktop ? (
        <SideBar user={user} />
      ) : (
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton zIndex="overlay" color="whiteAlpha.900" />
            <SideBar w="full" user={user} />
          </DrawerContent>
        </Drawer>
      )}
      <Box transition=".3s ease">
        <Flex
          as="header"
          top="0"
          p="2"
          bg="whiteAlpha.900"
          justify="space-between"
          align="center"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: 'inline-flex', md: 'none' }}
            onClick={onOpen}
            icon={<FiMenu />}
            size="sm"
          />
          <Box
            alignItems="center"
            ml={[0, 12]}
            p="16px"
            borderRadius="60px"
            bg="brand.100"
          >
            <Heading size="md" color="brand.300" fontFamily="Montserrat">
              Lendie
            </Heading>
          </Box>
          <HStack mr={[6, 10, 16]} align="center">
            <Flex>
              <BellIcon position="relative" />
              <Badge
                borderRadius="100%"
                boxSize="8px"
                bg="#0063F7"
                position="absolute"
              />
            </Flex>

            <Container maxW="200px" display={['none', 'flex', 'flex']}>
              <Heading color="brand.300" fontSize="20px">
                {user.firstName}
              </Heading>
            </Container>
            <Avatar
              size="md"
              name={user.firstName}
              src={user.image}
              display={['none', 'flex', 'flex']}
            >
              <AvatarBadge boxSize="15px" bg="#0063F7" />
            </Avatar>
          </HStack>
        </Flex>

        <Box as="main" p={[3, '8']} bg="#F8F8F8" h="90.5vh">
          <Switch>
            <Route exact path={`${path}/`}>
              {/* <Box>Request loan</Box> */}

              <RequestLoan user={user} />
            </Route>
            <Route path={`${path}/profile`}>
              <Profile />
            </Route>
            <Route path={`${path}/settings`}>
              <Box
                ml={{ base: 0, md: '250px' }}
                mr={{ base: 0, md: 10 }}
                borderStyle="solid"
                bg="whiteAlpha.900"
                maxH="650px"
                minW="280px"
                shadow="lg"
                overflow="auto"
              >
                <Box>Settings</Box>
              </Box>
            </Route>
            <Route path={`${path}/overview`}>
              <Box
                ml={{ base: 0, md: '250px' }}
                mr={{ base: 0, md: 10 }}
                borderStyle="solid"
                bg="whiteAlpha.900"
                maxH="650px"
                minW="280px"
                shadow="lg"
                overflow="auto"
              >
                <Box>History</Box>
              </Box>
            </Route>
            <Route path={`${path}/share`}>
              <Box
                ml={{ base: 0, md: '250px' }}
                mr={{ base: 0, md: 10 }}
                borderStyle="solid"
                bg="whiteAlpha.900"
                maxH="680px"
                minW="280px"
                shadow="lg"
                overflow="auto"
              >
                <Box>
                  <Text
                    fontSize="2xl"
                    color={['red', 'blue', 'purple']}
                    // color={{ base: 'red', md: 'blue', lg: 'purple' }}
                  >
                    Spread the love
                  </Text>
                  <Heading fontSize="2xl" color="brand.400">
                    Spread the love
                  </Heading>
                </Box>
              </Box>
            </Route>
            <Route path={`${path}/FAQs`}>
              <Box
                ml={{ base: 0, md: '250px' }}
                mr={{ base: 0, md: 10 }}
                pb={{ base: 20, md: 3 }}
                borderStyle="solid"
                bg="whiteAlpha.900"
                maxH="680px"
                minW="280px"
                shadow="lg"
                overflow="auto"
              >
                <FAQ />
              </Box>
            </Route>
            <Route path={`${path}/terms&conditions`}>
              <Box
                ml={{ base: 0, md: '250px' }}
                mr={{ base: 0, md: 10 }}
                pb={{ base: 20, md: 3 }}
                borderStyle="solid"
                bg="whiteAlpha.900"
                maxH="680px"
                minW="280px"
                shadow="lg"
                overflow="auto"
              >
                <TermsConditions />
              </Box>
            </Route>
          </Switch>
        </Box>
      </Box>
      <AlertDialog isOpen={loading} isCentered>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              <Center>
                <Text mx="20px">Loading</Text>
                <Spinner />
              </Center>
            </AlertDialogHeader>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default LandingPage;
