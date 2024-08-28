import { Box, Heading, Text } from '@chakra-ui/react';
import Gallery from './Gallery';

function HeadClamp() {
    const basePath = '/Gallery/';

    const imageNames = [
        'SkullClamp.png',
        'PinDraft2.jpg',
        'PCBDraft3.jpg',
        'Pin_Render_Poster_Quick2.png',
        'SystemDraft1.jpg',
        'PCBDraft2Skeleton.jpg',
        'PCBDraft2Strapped.jpg',
        'Electronc Harness V1.jpg',
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
                mb={6} // Add margin-bottom to create space below the text box
            >
                <Heading size='md' pt={2}>Head Clamp</Heading>
                <Text py='2' fontSize="md">
                    The head clamp is a tool used in neurosurgery to immobilize the patient's head during procedures. However, it currently lacks a digital method to monitor the pressure applied by the clamp. Our project enhances the clamp by integrating sensors into the pins, along with circuitry to capture and process the electrical signals corresponding to strain. These signals are then accurately converted into pressure readings, which are displayed to the neurosurgeon. This system provides real-time pressure monitoring during the clamp's setup and throughout the surgery, alerting the surgeon to any changes in pressure. *Patent Pending*
                </Text>
            </Box>
            <Box bg="gray.200" p={4} borderRadius="md" boxShadow="md" textAlign="center">
                <Gallery images={images} />
            </Box>
        </div>
    );
}

export default HeadClamp;
