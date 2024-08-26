import { Button } from '@chakra-ui/react';

function HighschoolSubpage3() {
  return (
    <div>
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
  