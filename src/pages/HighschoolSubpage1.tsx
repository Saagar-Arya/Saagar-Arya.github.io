import { Button, Box, Flex } from '@chakra-ui/react';

function HighschoolSubpage1() {
  return (
    <div>
      <Flex 
        mt={6} 
        justifyContent="center" 
        height="90vh"  // This ensures the flex container takes up most of the viewport height
      >
        <Box 
          border="1px" 
          borderColor="gray.200" 
          borderRadius="md" 
          overflow="hidden" 
          height="80vh"
          width="80vw"
        >
          <iframe 
            src="/assets/Saagar Drone Project.pdf" 
            width="100%" 
            height="100%" 
            style={{ border: "none" }}
            title="Saagar Drone Project PDF"
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
