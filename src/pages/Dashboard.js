import React from 'react';
import {
  Box,
  Flex,
  HStack,
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

const LandingPage = () => {
  const [isDesktop] = useMediaQuery('(min-width: 48em)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  let { path } = useRouteMatch();

  return (
    <Box minH="100vh" transition="0.3s ease" as="section" overflow="hidden">
      {isDesktop ? (
        <SideBar />
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
            <SideBar w="full" />
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
                Floppa
              </Heading>
            </Container>
            <Avatar size="md" name="Floppa" display={['none', 'flex', 'flex']}>
              <AvatarBadge boxSize="15px" bg="#0063F7" />
            </Avatar>
          </HStack>
        </Flex>

        <Box as="main" p={[3, '8']} bg="#F8F8F8" h="90.5vh">
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
            <Switch>
              <Route exact path={`${path}/`}>
                {/* <Box>Request loan</Box> */}
                <RequestLoan />
              </Route>
              <Route path={`${path}/profile`}>
                <Box>Profile</Box>
              </Route>
              <Route path={`${path}/settings`}>
                <Box>Settings</Box>
              </Route>
              <Route path={`${path}/overview`}>
                <Box>History</Box>
              </Route>
              <Route path={`${path}/share`}>
                <Box>Spread the love</Box>
              </Route>
              <Route path={`${path}/FAQs`}>
                <FAQ />
              </Route>
              <Route path={`${path}/terms&conditions`}>
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
                  <TermsConditions />
                </Box>
              </Route>
            </Switch>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
