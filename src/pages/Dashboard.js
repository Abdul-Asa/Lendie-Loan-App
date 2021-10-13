// // import {useState} from 'react';
// import { Heading, Center, Icon, Flex, Stack, Button } from '@chakra-ui/react';
// import { useHistory } from 'react-router-dom';
// import { IoIosHourglass } from 'react-icons/io';
// import { removeUser } from '../utils/LocalStorage';
// const LandingPage = () => {
//   let history = useHistory();
//   return (
//     <Center h="90vh">
//       <Stack>
//         <Flex align="center">
//           <Icon as={IoIosHourglass} mr={2} boxSize={8} />
//           <Heading> Dashboard </Heading>
//         </Flex>
//         <Button
//           size="lg"
//           colorScheme="teal"
//           ml={4}
//           onClick={() => {
//             removeUser();
//             history.push('/');
//           }}
//         >
//           Logout
//         </Button>
//       </Stack>
//     </Center>
//   );
// };

// export default LandingPage;
