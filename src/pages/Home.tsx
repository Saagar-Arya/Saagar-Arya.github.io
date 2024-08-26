import { Box, Heading, Text, Image, Flex, SimpleGrid } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Welcome to Saagar's Portfolio</Heading>
      <Flex direction={{ base: 'column', md: 'row' }} align="center" mb={8}>
        <Box flex="1" mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }}>
          <Image 
            src="/assets/GoodProfilePicSquare.JPG" // Your image path
            alt="Profile"
            borderRadius="md"
            width={{ base: "75", md: "50%" }} // Adjust the size as needed (100% on small screens, 35% on medium and larger)
            objectFit="cover" // Ensures the image covers the box proportionately
          />
        </Box>
        
        <Box flex="1" bg="white" p={4} borderRadius="md" boxShadow="md">
          <Text fontSize="lg">
          Objective: Always learning across multiple disciplines to apply 
          knowledge and problem-solving skills for better solutions          
          </Text>
        </Box>
      </Flex>

      <Box bg="gray.200" p={4} borderRadius="md" boxShadow="md" textAlign="center">
      <Heading size="md" mb={4}>Skills</Heading>
      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={8} justifyItems="center">
        <Text fontSize="lg">JavaScript</Text>
        <Text fontSize="lg">React</Text>
        <Text fontSize="lg">Next.js</Text>
        <Text fontSize="lg">CSS & Sass</Text>
        <Text fontSize="lg">Chakra UI</Text>
        <Text fontSize="lg">Git & GitHub</Text>
      </SimpleGrid>
    </Box>
    </Box>
  );
};

export default Home;
