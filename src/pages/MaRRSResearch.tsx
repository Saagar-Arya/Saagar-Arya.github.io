import { Box, Heading, Text } from '@chakra-ui/react';
import Gallery from './Gallery';

function MaRRSResearch() {
  const basePath = '/Gallery/';

  const imageNames = [
    'Lidar Output.png',
    'Rover_Icon.jpg',
    'RoverPath.png',
    'ColorExample.jpg',
    'InverseExample.jpg',
    'SealPic2.JPG',
    'SealPic1.JPG',
  ];
  const images = imageNames.map(name => `${basePath}${name}`);

  return (
    <div>
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
        mb={6}
      >
        <Heading size='md' pt={2}>MaRRS Research</Heading>
        <Text py='2' fontSize="md" >
          The Marine Robotics and Remote Sensing Lab uses drone imagery to monitor seal populations and their habitats. I trained segmentation models to detect seals and analyze their habitat preferences about environmental variables like ice density (90% accuracy). Another project involved mounting an autonomous rover with a Lidar sensor to create accurate 3D replicas (digital twins) of surveyed areas.
        </Text>
      </Box>
      <Box bg="gray.200" p={4} borderRadius="md" boxShadow="md" textAlign="center">
        <Gallery images={images} />
      </Box>
    </div>

  );
}


export default MaRRSResearch;
