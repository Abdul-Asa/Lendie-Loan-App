import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Text,
  Container,
  Avatar,
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
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

const LandingPage = () => {
  const [isDesktop] = useMediaQuery('(min-width: 48em)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  let { path } = useRouteMatch();

  return (
    <Box minH="100vh" transition="0.3s ease" as="section">
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
            <DrawerCloseButton zIndex="overlay" />
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
          <HStack mr={[0, 12]} display={['none', 'flex', 'flex']}>
            <Container maxW="200px">
              <Text fontSize="md">Floppa</Text>
            </Container>
            <Avatar size="md" name="Floppa" />
          </HStack>
          <Box display={['flex', 'none', 'none']}></Box>
        </Flex>

        <Box as="main" p="4" bg="#F8F8F8" h="90.5vh">
          <Box
            ml={{ base: 0, md: '250px' }}
            borderStyle="solid"
            bg="whiteAlpha.900"
            minH="650px"
            minW="280px"
            shadow="lg"
            overflow="auto"
          >
            <Switch>
              <Route exact path={`${path}/`}>
                <Box>Request loan</Box>
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
              <Route path={`${path}/terms&conditions`}>
                <Box>T and C</Box>
              </Route>
            </Switch>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
