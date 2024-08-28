import { Button, Box, Flex, Image } from '@chakra-ui/react';
import Gallery from './Gallery';

function HighschoolSubpage3() {
  const imageWidth = { base: "90vw", md: "70vw", lg: "50vw" }; // Adjust widths for different screen sizes
  const basePath = '/Gallery/';

  const imageNames = [
    'Rest Alone.jpg',
    'SingleREst.jpg',
    'FluteFull.jpg',
  ];
  const images = imageNames.map(name => `${basePath}${name}`);
  return (
    <div>
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
            src="/assets/PDFPIctures/Saagar Flute Rests_Page_1.jpg" // Update to your image path
            alt="Saagar Flute Rests Page 1"
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
            src="/assets/PDFPIctures/Saagar Flute Rests_Page_2.jpg" // Update to your image path
            alt="Saagar Flute Rests Page 2"
            width="100%"
            height="auto"
          />
        </Box>
      </Flex>
      <Button 
        as="a" 
        href="/assets/Saagar Flute Rests.pdf"
        download 
        colorScheme="teal" 
        variant={'outline'}
        mt={4}
      >
        Download Flute Rests One Pager
      </Button>
    </div>
  );  
}

export default HighschoolSubpage3;
