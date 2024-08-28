import { Button, Flex, Box } from '@chakra-ui/react';

function HighschoolSubpage2() {
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
            src="/assets/Saagar Combat Robots.pdf" 
            width="100%" 
            height="100%" 
            style={{ border: "none" }}
            title="Saagar Combat Robot PDF"
          />
        </Box>
      </Flex>
      <Button 
        as="a" 
        href="/assets/Saagar Combat Robots.pdf"
        download 
        colorScheme="teal" 
        variant={'outline'}
        mt={4}
        >
        Download Combat Robots One Pager
      </Button>
    </div>
  );  
}
  
  export default HighschoolSubpage2;
  