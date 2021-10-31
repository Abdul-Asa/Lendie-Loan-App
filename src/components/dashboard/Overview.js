import {
  Box,
  Heading,
  Text,
  Table,
  Thead,
  Flex,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';

const Overview = () => {
  return (
    <Box borderRadius={5} p={[6, 15, 5, 10]} bg="brand.100">
      <Heading ml={2} fontSize={16}>
        Loan Overview
      </Heading>
      <Flex
        display="flex"
        direction={['column', 'row', 'row']}
        justify="space-between"
      >
        <Box w="full" borderRadius={5} m="2" p={6} bg="#fff">
          <Text fontSize={20}>#10,000</Text>
          <Text fontSize={9}>15/10/2021</Text>
          <Box mt={7} borderRadius="50" w={5} p={3} bg="brand.success"></Box>
          <Text mt={2} fontSize={9}>
            Active loans
          </Text>
        </Box>
        <Box w="full" borderRadius={5} m="2" p={6} bg="#fff">
          <Text fontSize={20}>#10,000</Text>
          <Text fontSize={9}>15/10/2021</Text>
          <Box mt={7} borderRadius="50" w={5} p={3} bg="brand.success"></Box>
          <Text mt={2} fontSize={9}>
            Active loans
          </Text>
        </Box>
        <Box w="full" borderRadius={5} m="2" p={6} bg="#fff">
          <Text fontSize={20}>#10,000</Text>
          <Text fontSize={9}>15/10/2021</Text>
          <Box mt={7} borderRadius="50" w={5} p={3} bg="brand.success"></Box>
          <Text mt={2} fontSize={9}>
            Active loans
          </Text>
        </Box>
        <Box w="full" borderRadius={5} m="2" p={6} bg="#fff">
          <Text fontSize={20}>#10,000</Text>
          <Text fontSize={9}>15/10/2021</Text>
          <Box mt={7} borderRadius="50" w={5} p={3} bg="brand.success"></Box>
          <Text mt={2} fontSize={9}>
            Active loans
          </Text>
        </Box>
      </Flex>
      <Heading mb={5} mt={5} ml={2} fontSize={16}>
        Loan History
      </Heading>
      <Box p={1} overflowX="auto">
        <Table bg="#fff" variant="simple">
          <Thead bg="#faf8f5">
            <Tr>
              <Th
                fontSize={10}
                fontFamily="fonts.body"
                style={{ textTransform: 'none' }}
              >
                Loan Type
              </Th>
              <Th
                fontSize={10}
                fontFamily="fonts.body"
                style={{ textTransform: 'none' }}
              >
                Status
              </Th>
              <Th
                fontSize={10}
                fontFamily="fonts.body"
                style={{ textTransform: 'none' }}
              >
                Loan Amount
              </Th>
              <Th
                fontSize={10}
                fontFamily="fonts.body"
                style={{ textTransform: 'none' }}
              >
                Interest rate
              </Th>
              <Th
                fontSize={10}
                fontFamily="fonts.body"
                style={{ textTransform: 'none' }}
              >
                Start Date
              </Th>
              <Th
                fontSize={10}
                fontFamily="fonts.body"
                style={{ textTransform: 'none' }}
              >
                Due Date
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td fontSize={10}>Others</Td>
              <Td fontSize={10}>
                <Text
                  color="#fff"
                  bg="brand.success"
                  textAlign="center"
                  borderRadius="5"
                  pt={1}
                  pb={1}
                  pl={4}
                  pr={4}
                >
                  Completed
                </Text>
              </Td>
              <Td fontSize={10}>#10,000</Td>
              <Td fontSize={10}>#750</Td>
              <Td fontSize={10}>15/10/21</Td>
              <Td fontSize={10}>01/01/22</Td>
            </Tr>
            <Tr>
              <Td fontSize={10}>Education</Td>
              <Td fontSize={10}>
                <Text
                  color="#fff"
                  bg="#0E6BA8"
                  textAlign="center"
                  borderRadius="5"
                  pt={1}
                  pb={1}
                  pl={4}
                  pr={4}
                >
                  Pending
                </Text>
              </Td>
              <Td fontSize={10}>#50,000</Td>
              <Td fontSize={10}>#3750</Td>
              <Td fontSize={10}>01/10/21</Td>
              <Td fontSize={10}>01/02/21</Td>
            </Tr>
            <Tr>
              <Td fontSize={10}>Data</Td>
              <Td fontSize={10}>
                <Text
                  color="#fff"
                  bg="#0E6BA8"
                  textAlign="center"
                  borderRadius="5"
                  pt={1}
                  pb={1}
                  pl={4}
                  pr={4}
                >
                  Pending
                </Text>
              </Td>
              <Td fontSize={10}>#5,000</Td>
              <Td fontSize={10}>#125</Td>
              <Td fontSize={10}>15/10/21</Td>
              <Td fontSize={10}>15/11/21</Td>
            </Tr>
            <Tr>
              <Td fontSize={10}>Medical</Td>
              <Td fontSize={10}>
                <Text
                  color="#fff"
                  bg="#0E6BA8"
                  textAlign="center"
                  borderRadius="5"
                  pt={1}
                  pb={1}
                  pl={4}
                  pr={4}
                >
                  Pending
                </Text>
              </Td>
              <Td fontSize={10}>#100,000</Td>
              <Td fontSize={10}>#2500</Td>
              <Td fontSize={10}>03/10/21</Td>
              <Td fontSize={10}>03/10/21</Td>
            </Tr>
            <Tr>
              <Td fontSize={10}>Business</Td>
              <Td fontSize={10}>
                <Text
                  color="#fff"
                  bg="brand.error"
                  textAlign="center"
                  borderRadius="5"
                  pt={1}
                  pb={1}
                  pl={4}
                  pr={4}
                >
                  Pending
                </Text>
              </Td>
              <Td fontSize={10}>#500,000</Td>
              <Td fontSize={10}>-------</Td>
              <Td fontSize={10}>-------</Td>
              <Td fontSize={10}>-------</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
      <Heading mb={5} mt={5} ml={2} fontSize={16}>
        Disbursment Overview
      </Heading>
      <Flex display="flex" direction={['column', 'row', 'row']} mb={[10, 0]}>
        <Box w="220px" borderRadius={5} mr={14} mt={1} mb={6} p={3} bg="#fff">
          <Box mb={7} display="flex" justifyContent="space-between">
            <Text fontSize={12}>Duration</Text>
            <Text fontSize={12} color="brand.info">
              3 Months
            </Text>
          </Box>
          <Box mb={7} display="flex" justifyContent="space-between">
            <Text fontSize={12}>Interest rate</Text>
            <Text fontSize={12} color="brand.info">
              2.5%
            </Text>
          </Box>
          <Box mb={7} display="flex" justifyContent="space-between">
            <Text fontSize={12}>Repayment Interest</Text>
            <Text fontSize={12} color="brand.info">
              #750
            </Text>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Text fontSize={12}>Start date</Text>
            <Text fontSize={12} color="brand.info">
              15/10/21
            </Text>
          </Box>
        </Box>
        <Box
          w="220px"
          borderRadius={5}
          mt={1}
          mb={6}
          p={6}
          bgGradient="linear(to-l, blue, #00008F)"
        >
          <Box pt={3} pb={3}>
            <Text fontSize={12} color="#fff">
              Expected Repayments
            </Text>
            <Text fontSize={23} color="#fff">
              #10,750
            </Text>
          </Box>
          <Box pt={5}>
            <Text fontSize={12} color="#fff">
              Due Date
            </Text>
            <Text fontSize={23} color="gold">
              15/01/22
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Overview;
