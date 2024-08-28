import { Button, Box, Flex, Image } from '@chakra-ui/react';

function HighschoolSubpage1() {
  const imageWidth = { base: "90vw", md: "70vw", lg: "50vw" }; // Adjust widths for different screen sizes

  return (
    <div>
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
            src="/assets/PDFPIctures/Saagar Drone Project_Page_1.jpg" 
            alt="Saagar Drone Project Page 1"
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
            src="/assets/PDFPIctures/Saagar Drone Project_Page_2.jpg" 
            alt="Saagar Drone Project Page 2"
            width="100%"
            height="auto"
          />
        </Box>
      </Flex>
      <Button 
        as="a" 
        href="/assets/Saagar Drone Project.pdf"
        download 
        colorScheme="teal" 
        variant={'outline'}
        mt={4}
      >
        Download Drone One Pager
      </Button>
    </div>
  );
}

export default HighschoolSubpage1;
