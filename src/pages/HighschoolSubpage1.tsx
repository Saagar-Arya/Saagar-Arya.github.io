import { Button } from '@chakra-ui/react';

function HighschoolSubpage1() {
  return (
    <div>
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
