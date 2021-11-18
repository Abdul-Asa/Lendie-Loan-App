import {
  Box,
  Flex,
  Text,
  Heading,
  Center,
  Image,
  IconButton,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import Abdullah from '../icons/Abdullah.jpg';
import Precious from '../icons/Precious.jpeg';
import Office from '../icons/office.png';
import { MdWork } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

function TeamInfo() {
  return (
    <Box>
      <Center
        pos="relative"
        h="500px"
        _before={{
          content: '""',
          bgImage: Office,
          bgSize: 'cover',
          pos: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          opacity: 0.4,
        }}
      >
        <Box textAlign="center" maxW="700px" zIndex="dropdown">
          <Heading color="brand.300" fontSize={['md', '3xl']}>
            A global-standard team of impassionate talents
          </Heading>
          <Text color="brand.400" fontSize={['sm', 'md']}>
            We are a team of diverse talents that utilized our individual
            strengths inorder to build a product that serves the character of
            its purpose
          </Text>
        </Box>
      </Center>
      <Stack m={[4, 6, 12]} px={[2, 4, 8]} py={24} spacing="20px">
        <Flex
          direction={['column', 'column', 'row']}
          justify="space-around"
          align="center"
        >
          <Flex alignItems="center" justifyContent="center">
            <Box w="300px" mx="auto" shadow="sm" rounded="lg" overflow="hidden">
              <Image
                w="full"
                h={56}
                fit="cover"
                objectPosition="center"
                src={Precious}
                fallbackSrc="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                alt="avatar"
              />
              <Box py={4} px={6} textAlign="center">
                <Heading color="brand.400" fontSize="2xl">
                  Oguazu Precious. C
                </Heading>
                <Text>UI/UX Designer</Text>
                <Flex justify="center" p={3}>
                  <IconButton
                    as="a"
                    href="http://linkedin.com/in/precious-oguazu"
                    icon={<FaLinkedin size="20px" />}
                    target="_blank"
                    variant="ghost"
                  />
                  <IconButton
                    as="a"
                    href="http://linkedin.com/in/precious-oguazu"
                    icon={<MdWork size="20px" />}
                    variant="ghost"
                    target="_blank"
                  />
                </Flex>
              </Box>
            </Box>
          </Flex>
          <Flex alignItems="center" justifyContent="center">
            <Box w="300px" mx="auto" shadow="sm" rounded="lg" overflow="hidden">
              <Image
                w="full"
                h={56}
                fit="cover"
                objectPosition="center"
                src=""
                fallbackSrc="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                alt="avatar"
              />
              <Box py={4} px={6} textAlign="center">
                <Heading color="brand.400" fontSize="2xl">
                  Edet Ebek
                </Heading>
                <Text>UI/UX Designer</Text>
                <Flex justify="center" p={3}>
                  <IconButton
                    as="a"
                    href="/"
                    icon={<FaLinkedin size="20px" />}
                    target="_blank"
                    variant="ghost"
                  />
                  <IconButton
                    as="a"
                    href="/"
                    icon={<MdWork size="20px" />}
                    variant="ghost"
                    target="_blank"
                  />
                </Flex>
              </Box>
            </Box>
          </Flex>
          <Flex alignItems="center" justifyContent="center">
            <Box w="300px" mx="auto" shadow="sm" rounded="lg" overflow="hidden">
              <Image
                w="full"
                h={56}
                fit="cover"
                objectPosition="center"
                src=""
                fallbackSrc="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                alt="avatar"
              />
              <Box py={4} px={6} textAlign="center">
                <Heading color="brand.400" fontSize="2xl">
                  Adedotun Oluwaseyi
                </Heading>
                <Text>UI/UX Designer</Text>
                <Flex justify="center" p={3}>
                  <IconButton
                    as="a"
                    href="/"
                    icon={<FaLinkedin size="20px" />}
                    target="_blank"
                    variant="ghost"
                  />
                  <IconButton
                    as="a"
                    href="/"
                    icon={<MdWork size="20px" />}
                    variant="ghost"
                    target="_blank"
                  />
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Flex>
        <Flex
          direction={['column', 'column', 'row']}
          justify="space-around"
          align="center"
        >
          <Flex alignItems="center" justifyContent="center">
            <Box w="300px" mx="auto" shadow="sm" rounded="lg" overflow="hidden">
              <Image
                w="full"
                h={56}
                fit="cover"
                objectPosition="center"
                src={Abdullah}
                fallbackSrc="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                alt="avatar"
              />
              <Box py={4} px={6} textAlign="center">
                <Heading color="brand.400" fontSize="2xl">
                  Abdullah Shehu
                </Heading>
                <Text>Full Stack Developer</Text>
                <Flex justify="center" p={3}>
                  <IconButton
                    as="a"
                    href="https://github.com/Abdul-Asa/"
                    icon={<FaLinkedin size="20px" />}
                    target="_blank"
                    variant="ghost"
                  />
                  <IconButton
                    as="a"
                    href="https://abdul-asa.github.io/My-Portfolio/"
                    icon={<MdWork size="20px" />}
                    variant="ghost"
                    target="_blank"
                  />
                </Flex>
              </Box>
            </Box>
          </Flex>
          <Flex alignItems="center" justifyContent="center">
            <Box w="300px" mx="auto" shadow="sm" rounded="lg" overflow="hidden">
              <Image
                w="full"
                h={56}
                fit="cover"
                objectPosition="center"
                src=""
                fallbackSrc="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                alt="avatar"
              />
              <Box py={4} px={6} textAlign="center">
                <Heading color="brand.400" fontSize="2xl">
                  Oluwafunmibi Oyelusi
                </Heading>
                <Text>Front-end Developer</Text>
                <Flex justify="center" p={3}>
                  <IconButton
                    as="a"
                    href="/"
                    icon={<FaLinkedin size="20px" />}
                    target="_blank"
                    variant="ghost"
                  />
                  <IconButton
                    as="a"
                    href="/"
                    icon={<MdWork size="20px" />}
                    variant="ghost"
                    target="_blank"
                  />
                </Flex>
              </Box>
            </Box>
          </Flex>
          <Flex alignItems="center" justifyContent="center">
            <Box w="300px" mx="auto" shadow="sm" rounded="lg" overflow="hidden">
              <Image
                w="full"
                h={56}
                fit="cover"
                objectPosition="center"
                src=""
                fallbackSrc="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                alt="avatar"
              />
              <Box py={4} px={6} textAlign="center">
                <Heading color="brand.400" fontSize="2xl">
                  Ayodeji Omoloja
                </Heading>
                <Text>Full Stack Developer</Text>
                <Flex justify="center" p={3}>
                  <IconButton
                    as="a"
                    href="/"
                    icon={<FaLinkedin size="20px" />}
                    target="_blank"
                    variant="ghost"
                  />
                  <IconButton
                    as="a"
                    href="/"
                    icon={<MdWork size="20px" />}
                    variant="ghost"
                    target="_blank"
                  />
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Stack>
    </Box>
  );
}

export default TeamInfo;
