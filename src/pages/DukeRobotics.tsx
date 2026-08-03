import { Heading, Text } from '@chakra-ui/react';
import Gallery from './Gallery';
import { ContentPanel, GalleryPanel } from '../components/PagePanels';

function DukeRobotics() {
  const basePath = '/Gallery/';

  const imageNames = [
    'Full Robot.jpg',
    'MiniRender.png',
    'Torpedos-1.jpg',
    'image (7).png',
    'image (5).png',
    'image (4).png',
    'Oogway CAD.PNG',
    'blender.png',
    'final_plate.png',
    'capsule_plate.png',
    'Titanium Top Plate.jpg',
  ];
  const images = imageNames.map(name => `${basePath}${name}`);

  return (
    <div>
      <ContentPanel
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
        <Heading size="md" pt={2}>
          Duke Robotics Club
        </Heading>
        <Text py="2" fontSize="md">
          As part of the Duke Underwater Robotics Club, I contributed to the development of an autonomous underwater robot designed to maneuver and complete various tasks. My role involved fabricating a titanium top plate to secure key components, modualar sensor mounts, and a spring loaded torpedo system. My work contributed to our 8th place finish at Robosub 2024.
        </Text>
      </ContentPanel>
      <GalleryPanel>
        <Gallery images={images} />
      </GalleryPanel>
    </div>

  );
}

export default DukeRobotics;
