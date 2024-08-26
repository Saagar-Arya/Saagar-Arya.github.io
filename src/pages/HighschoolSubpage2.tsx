import { Button } from '@chakra-ui/react';

function HighschoolSubpage2() {
  return (
    <div>
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
  