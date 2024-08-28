import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Heading, Text} from '@chakra-ui/react';
import HighschoolSubpage1 from './HighschoolSubpage1';
import HighschoolSubpage2 from './HighschoolSubpage2';
import HighschoolSubpage3 from './HighschoolSubpage3';
import HighschoolSubpage4 from './HighschoolSubpage4';

function Highschool() {
  return (
    <Box>
      <Box 
                maxW="80vw" 
                maxH="80vh" 
                width="80vw"  
                height="auto" 
                p={4}
                border="1px"
                borderColor="gray.200" 
                borderRadius="md" 
                boxShadow="md"
                bg="white"
                overflow="auto" 
                mb={4}
            >
      <Heading size='md' pt={2}>High School</Heading>
              <Text py='2' fontSize="md">
                During high school, I found various engineering projects, including designing and fabricating combat robots for Antweight and Beetleweight divisions. I developed a hexapod with interconnected limbs and programmed it using Arduino, and collaborated on creating a custom drone PCB and Arduino-based firmware. Additionally, I founded an Etsy store featuring a 3D-printed flute rest, for which I was granted a utility patent.
              </Text>
              </Box>
      <Tabs variant="soft-rounded" isLazy p={(2)}>
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
          <Tab _selected={{ bg: '#2B92BF', color: 'white' }} bg="teal.400" color="white" margin={1.5}>
            Hexapod
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
          <TabPanel>
            <HighschoolSubpage4 />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Highschool;
