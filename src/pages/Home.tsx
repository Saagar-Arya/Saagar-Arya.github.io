import { Box, Heading, Text, Image, Flex, SimpleGrid, Stack, Card, CardBody, Button, CardFooter, Divider } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Welcome to Saagar's Portfolio</Heading>

      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="center" mb={8}>
        <Box flex="1" display="flex" justifyContent="center" alignItems="center" mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }}>
          <Image
            src="/assets/GoodProfilePicSquare.JPG"
            alt="Profile"
            borderRadius="md"
            width={{ base: "75%", md: "50%" }}
            objectFit="cover"
          />
        </Box>
        <Box flex="1" display="flex" justifyContent="center" alignItems="center" bg="white" p={4} borderRadius="md" boxShadow="md">
          <Text fontSize="lg" textAlign="center">
            Objective: Always learning across multiple disciplines to apply
            knowledge and problem-solving skills for better solutions.
          </Text>
        </Box>
      </Flex>

      <Box bg="gray.200" p={4} borderRadius="md" boxShadow="md" textAlign="center" mb={6}>
        <Heading size="md" mb={4}>Skills</Heading>
        <SimpleGrid columns={{ base: 3, md: 5 }} spacing={8} justifyItems="center">
          <Text fontSize="lg">Machine Learning</Text>
          <Text fontSize="lg">{'Printed Circuit Board (PCB) Design'}</Text>
          <Text fontSize="lg">Web Development</Text>
          <Text fontSize="lg">Python</Text>
          <Text fontSize="lg">{'Extract, Transform, Load (ETL)'}</Text>
          <Text fontSize="lg">Java</Text>
          <Text fontSize="lg">Circuit Design</Text>
          <Text fontSize="lg">React.js</Text>
          <Text fontSize="lg">Autodesk Fusion 360</Text>
          <Text fontSize="lg">Electrical Troubleshooting</Text>
          <Text fontSize="lg">CAD/CAM</Text>
          <Text fontSize="lg">&nbsp;</Text>
          <Text fontSize="lg">Solidworks</Text>
          <Text fontSize="lg">&nbsp;</Text>
          <Text fontSize="lg">Spring Framework</Text>
        </SimpleGrid>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mb={4}>
        <Card overflow='hidden' variant='outline' maxW='lg'>
          <CardBody>
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              src='/assets/Physical_PCB_Draft2.jpg'
              alt='Head Clamp'
              mx="auto"
              borderRadius={'md'}
              mt={2}
            />
            <Stack>
              <Heading size='md' pt={2}>Head Clamp</Heading>
              <Text py='2' fontSize="md">
                The head clamp is a tool used in neurosurgery to immobilize the patient's head during procedures. However, it currently lacks a digital method to monitor the pressure applied by the clamp. Our project enhances the clamp by integrating sensors into the pins, along with circuitry to capture and process the electrical signals corresponding to strain. These signals are then accurately converted into pressure readings, which are displayed to the neurosurgeon. This system provides real-time pressure monitoring during the clamp's setup and throughout the surgery, alerting the surgeon to any changes in pressure. *Patent Pending*
              </Text>
              <Divider mt={2} />
            </Stack>
            <CardFooter>
              <Button
                as={RouterLink}
                to="/head-clamp"
                variant='solid'
                colorScheme='blue'
                _hover={{ bg: "teal.700" }}
              >
                Read More
              </Button>
            </CardFooter>
          </CardBody>
        </Card>
        <Card overflow='hidden' variant='outline' maxW='lg'>
          <CardBody>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} justifyItems="center">
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src='/assets/Seal_Icon.jpg'
                alt='Seal Icon'
                mx="auto"
                borderRadius={'md'}
                mt={2}
              />
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src='/assets/Rover_Icon.jpg'
                alt='Rover Icon'
                mx="auto"
                borderRadius={'md'}
                mt={2}
              />
            </SimpleGrid>
            <Stack>
              <Heading size='md' pt={2}>MaRRS Research</Heading>
              <Text py='2' fontSize="md">
                &nbsp;
              </Text>
              <Divider mt={2} />
            </Stack>
            <CardFooter>
              <Button
                as={RouterLink}
                to="/marrs-research"
                variant='solid'
                colorScheme='blue'
                _hover={{ bg: "teal.700" }}
              >
                Read More
              </Button>
            </CardFooter>
          </CardBody>
        </Card>
        <Card overflow='hidden' variant='outline' maxW='lg'>
          <CardBody>
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              src='/assets/RoboSubIcon.jpg'
              alt='Duke Robotics Club'
              mx="auto"
              borderRadius={'md'}
              mt={2}
            />
            <Stack>
              <Heading size='md' pt={2}>Duke Robotics Club</Heading>
              <Text py='2' fontSize="md">
                &nbsp;
              </Text>
              <Divider mt={2} />
            </Stack>
            <CardFooter>
              <Button
                as={RouterLink}
                to="/duke-robotics"
                variant='solid'
                colorScheme='blue'
                _hover={{ bg: "teal.700" }}
              >
                Read More
              </Button>
            </CardFooter>
          </CardBody>
        </Card>
      </SimpleGrid>

      <Box mt={4}>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          <Image
            objectFit='cover'
            width="20%" // Extend the image along the card
            src='/assets/DroneIcon.jpg'
            alt='Drone Icon'
          />
          <Stack>
            <CardBody>
              <Heading size='md'>High School</Heading>
              <Text py='2' fontSize="md">
                &nbsp;
              </Text>
              <Divider my={2} />
            </CardBody>
            <CardFooter>
              <Button
                as={RouterLink}
                to="/highschool"
                variant='solid'
                colorScheme='blue'
                _hover={{ bg: "teal.700" }}
              >
                Read More
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </Box>

    </Box>
  );
};

export default Home;
