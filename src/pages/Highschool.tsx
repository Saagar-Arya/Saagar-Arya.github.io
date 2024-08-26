import { Box, Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react';
import HighschoolSubpage1 from './HighschoolSubpage1';
import HighschoolSubpage2 from './HighschoolSubpage2';
import HighschoolSubpage3 from './HighschoolSubpage3';

function Highschool() {
  return (
    <Box>
      <Tabs variant="soft-rounded" isLazy>
      <TabList>
          <Tab _selected={{ bg: '#2B92BF', color: 'white' }} bg="teal.400" color="white" margin={1.5}>
            Drone Project
          </Tab>
          <Tab _selected={{ bg: '#2B92BF', color: 'white' }} bg="teal.400" color="white" margin={1.5}>
            Combat Robots
          </Tab>
          <Tab _selected={{ bg: '#2B92BF', color: 'white' }} bg="teal.400" color="white" margin={1.5}>
            Flute Finger Rest Etsy & Patent
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
             <HighschoolSubpage1 />
          </TabPanel>
          <TabPanel>
            <HighschoolSubpage2 />
          </TabPanel>
          <TabPanel>
            <HighschoolSubpage3 />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Highschool;
