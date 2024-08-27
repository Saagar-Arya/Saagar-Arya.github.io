import { Button } from '@chakra-ui/react';

function HighschoolSubpage4() {
  return (
    <div>
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
  