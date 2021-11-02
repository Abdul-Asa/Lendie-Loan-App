import {
  Box,
  Heading,
  Text,
  Table,
  Thead,
  Flex,
  Tbody,
  Tr,
  Center,
  Th,
  Td,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getLoanAction } from '../../utils/Actions';

const Overview = () => {
  const [loanInfo, setLoanInfo] = useState({
    createdAt: '',
    activeLoan: {
      amount: '',
      loanTaken: '',
      totalLoan: '',
      amountRepaid: '',
      repaymentDate: '',
    },
  });
  const [loading, setLoading] = useState(true);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    console.log('Fetching...');
    setLoading(false);
    const Loan = getLoanAction();
    Loan.then((data) => {
      if (data.loan) {
        setLoanInfo(data.loan);
      }
      console.log(data.message);
      let ode = 0;
      for (let x = 0; x < data.loan.loanHistory.length; x++) {
        ode += data.loan.loanHistory[x].amount;
      }
      setSum(ode);
    }).catch((err) => console.log(err));
  }, [loading]);

  const stringDate = (date) => {
    let confam = date.replace('-', '');
    let day = confam.substr(7, 2);
    let month = confam.substr(4, 2);
    let year = confam.substr(0, 4);

    let final = day + '/' + month + '/' + year;
    return final;
  };

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
          <Text fontSize={20}>
            {loanInfo.activeLoan
              ? '₦' + loanInfo.activeLoan.amount.toLocaleString('en-US')
              : 'No active loan'}
          </Text>
          <Text fontSize={9}>
            {loanInfo.activeLoan
              ? 'Taken on :  ' + stringDate(loanInfo.activeLoan.loanTaken)
              : '.'}
          </Text>
          <Box mt={7} borderRadius="50" w={5} p={3} bg="brand.success"></Box>
          <Text mt={2} fontSize={9}>
            Active loan
          </Text>
        </Box>{' '}
        <Box w="full" borderRadius={5} m="2" p={6} bg="#fff">
          <Text fontSize={20}>
            {loanInfo.activeLoan
              ? '₦' +
                (
                  loanInfo.activeLoan.totalLoan -
                  loanInfo.activeLoan.amountRepaid
                ).toLocaleString('en-US')
              : 'No active loan'}
          </Text>
          <Text fontSize={9}>
            {loanInfo.activeLoan
              ? 'Due on :  ' + stringDate(loanInfo.activeLoan.repaymentDate)
              : '.'}
          </Text>
          <Box mt={7} borderRadius="50" w={5} p={3} bg="brand.warning"></Box>
          <Text mt={2} fontSize={9}>
            Amount to be Repaid
          </Text>
        </Box>
        <Box w="full" borderRadius={5} m="2" p={6} bg="#fff">
          <Text fontSize={20}>
            {loanInfo.activeLoan
              ? '₦' + loanInfo.activeLoan.amountRepaid.toLocaleString('en-US')
              : 'No active loan'}
          </Text>
          <Text fontSize={9}>.</Text>
          <Box mt={7} borderRadius="50" w={5} p={3} bg="brand.info"></Box>
          <Text mt={2} fontSize={9}>
            Amount Repaid
          </Text>
        </Box>
        <Box w="full" borderRadius={5} m="2" p={6} bg="#fff">
          <Text fontSize={20}>
            {loanInfo.activeLoan
              ? '₦' +
                (sum + loanInfo.activeLoan.amount)
                  .toLocaleString('en-US')
                  .toLocaleString('en-US')
              : '₦' + sum}
          </Text>
          <Text fontSize={9}> Since : {stringDate(loanInfo.createdAt)}</Text>
          <Box mt={7} borderRadius="50" w={5} p={3} bg="brand.success"></Box>
          <Text mt={2} fontSize={9}>
            Total loan taken
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
                Interest paid
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
            {loanInfo.loanHistory
              ? loanInfo.loanHistory.map((index, no) => {
                  return (
                    <Tr key={no}>
                      <Td fontSize={10}>{index.purpose}</Td>
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
                          {index.status}
                        </Text>
                      </Td>
                      <Td fontSize={10}>₦{index.amount}</Td>
                      <Td fontSize={10}>₦{index.interest}</Td>
                      <Td fontSize={10}>{stringDate(index.loanTaken)}</Td>
                      <Td fontSize={10}>{stringDate(index.repaymentDate)}</Td>
                    </Tr>
                  );
                })
              : ''}
            {loanInfo.activeLoan && (
              <Tr>
                <Td fontSize={10}>{loanInfo.activeLoan.purpose}</Td>
                <Td fontSize={10}>
                  <Text
                    color="#fff"
                    bg={
                      loanInfo.activeLoan.status === 'Pending'
                        ? 'brand.info'
                        : 'brand.warning'
                    }
                    textAlign="center"
                    borderRadius="5"
                    pt={1}
                    pb={1}
                    pl={4}
                    pr={4}
                  >
                    {loanInfo.activeLoan.status}
                  </Text>
                </Td>
                <Td fontSize={10}>₦{loanInfo.activeLoan.amount}</Td>
                <Td fontSize={10}>₦{loanInfo.activeLoan.interest}</Td>
                <Td fontSize={10}>
                  {stringDate(loanInfo.activeLoan.loanTaken)}
                </Td>
                <Td fontSize={10}>
                  {stringDate(loanInfo.activeLoan.repaymentDate)}
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
        {loanInfo.loanHistory.length === 0 && !loanInfo.activeLoan && (
          <Box>
            <Center height="200px" bg="whiteAlpha.800">
              <Heading color="GrayText">No Past Loans</Heading>
            </Center>
          </Box>
        )}
      </Box>
      <Heading mb={5} mt={5} ml={2} fontSize={16}>
        Disbursment Overview
      </Heading>
      <Flex display="flex" direction={['column', 'row', 'row']} mb={[10, 0]}>
        <Box w="220px" borderRadius={5} mr={14} mt={1} mb={6} p={3} bg="#fff">
          <Box mb={7} display="flex" justifyContent="space-between">
            <Text fontSize={12}>Duration</Text>
            <Text fontSize={12} color="brand.info">
              {loanInfo.activeLoan
                ? loanInfo.activeLoan.time + ' week(s)'
                : 'N/A'}
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
              {loanInfo.activeLoan ? '₦' + loanInfo.activeLoan.interest : 'N/A'}
            </Text>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Text fontSize={12}>Start date</Text>
            <Text fontSize={12} color="brand.info">
              {loanInfo.activeLoan
                ? stringDate(loanInfo.activeLoan.loanTaken)
                : 'N/A'}
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
              {loanInfo.activeLoan
                ? '₦' + loanInfo.activeLoan.totalLoan
                : 'N/A'}
            </Text>
          </Box>
          <Box pt={5}>
            <Text fontSize={12} color="#fff">
              Due Date
            </Text>
            <Text fontSize={23} color="gold">
              {loanInfo.activeLoan
                ? stringDate(loanInfo.activeLoan.loanTaken)
                : 'N/A'}
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Overview;

//Update firstTimeUser
//pay loan page
//delete loan
