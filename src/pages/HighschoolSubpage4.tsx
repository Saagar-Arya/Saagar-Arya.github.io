import { Button, Box, Flex } from '@chakra-ui/react';

function HighschoolSubpage4() {
  return (
    <div>
      <Flex 
        mt={6} 
        justifyContent="center" 
        height="90vh"
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
            src="/assets/Saagar Hexapod Project.pdf" 
            width="100%" 
            height="100%" 
            style={{ border: "none" }}
            title="Saagar Hexapod Project PDF"
          />
        </Box>
      </Flex>
      <Button 
        as="a" 
        href="/assets/Saagar Hexapod Project.pdf"
        download 
        colorScheme="teal" 
        variant={'outline'}
        mt={4}
        >
        Download Hexapod One Pager
      </Button>
    </div>
  );  
}
  
  export default HighschoolSubpage4;
  