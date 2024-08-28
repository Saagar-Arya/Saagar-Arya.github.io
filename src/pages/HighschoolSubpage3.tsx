import { Button, Box, Flex } from '@chakra-ui/react';

function HighschoolSubpage3() {
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
            src="/assets/Saagar Flute Rests.pdf" 
            width="100%" 
            height="100%" 
            style={{ border: "none" }}
            title="Saagar Flute Rests PDF"
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
  