import {
  Box,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import PersonalDetails from '../forms/PersonalDetails';
import CardDetails from '../forms/CardDetails';

const Profile = () => {
  return (
    <Stack ml={{ base: 0, md: '250px' }} mr={{ base: 0, md: 10 }}>
      <Tabs variant="line">
        <TabList borderStyle="solid" bg="#F2F2F5" shadow="md">
          <Tab
            fontSize={['sm', 'md']}
            ml={[0, '4']}
            _selected={{ borderColor: 'brand.300', borderBottomWidth: '3px' }}
          >
            Personal Details
          </Tab>
          <Tab
            fontSize={['sm', 'md']}
            _selected={{ borderColor: 'brand.300', borderBottomWidth: '3px' }}
          >
            Card and Bank Details
          </Tab>
        </TabList>

        <Box
          mt="6"
          // borderStyle="solid"
          bg="whiteAlpha.900"
          maxH="610px"
          minW="280px"
          shadow="lg"
          overflow="auto"
        >
          <TabPanels>
            <TabPanel>
              <PersonalDetails />
            </TabPanel>
            <TabPanel id="payment">
              <CardDetails />
            </TabPanel>
          </TabPanels>
        </Box>
      </Tabs>
    </Stack>
  );
};

export default Profile;
