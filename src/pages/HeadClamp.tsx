import { Box, Heading, Text, Image, Flex,  } from '@chakra-ui/react';
import Gallery from './Gallery';

function HeadClamp() {
    const imageWidth = { base: "90vw", md: "70vw", lg: "50vw" }; // Adjust widths for different screen sizes
    const basePath = '/Gallery/';

    const imageNames = [
        'head_clamp.jpg',
        'pin_test.jpg',
        'New_UI.png',
        'PinDraft2.jpg',
        'PCBDraft3.jpg',
        'TighetningPin.jpg',
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
                <Heading size='md' pt={2}>Head Clamp</Heading>
                <Text py='2' fontSize="md">
                    The head clamp is a tool used in neurosurgery to immobilize the patient's head during procedures. However, it currently lacks a digital method to monitor the pressure applied by the clamp. Our project enhances the clamp by integrating sensors into the pins, along with circuitry to capture and process the electrical signals corresponding to strain. These signals are then accurately converted into pressure readings, which are displayed to the neurosurgeon. This system provides real-time pressure monitoring during the clamp's setup and throughout the surgery, alerting the surgeon to any changes in pressure. *Patent Pending*
                </Text>
            </Box>
            <Box bg="gray.200" p={4} borderRadius="md" boxShadow="md" textAlign="center">
                <Gallery images={images} />
            </Box>
            <Flex
        mt={6}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box
          border="1px"
          borderColor="gray.200"
          borderRadius="md"
          overflow="hidden"
          width={imageWidth}  // Use responsive width
          mb={4}
        >
          <Image
            src="/EGR101 Poster Presentation - Skull Crushers.pptx_Page_1.jpg"
            alt="EGR101 Poster Presentation"
            width="100%"
            height="auto"
          />
        </Box>
        <Box
          border="1px"
          borderColor="gray.200"
          borderRadius="md"
          overflow="hidden"
          width={imageWidth}  // Use responsive width
        >
          <Image
            src="/EGR102 Poster Presentation - Skull Crushers.jpg"
            alt="EGR102 Poster Presentation"
            width="100%"
            height="auto"
          />
        </Box>
      </Flex>
        </div>
    );
}

export default HeadClamp;
