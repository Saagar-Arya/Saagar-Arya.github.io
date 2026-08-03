import { Box, Heading, Text, Image, Flex, SimpleGrid, Stack, Card, CardBody, Button, Divider, Badge, AspectRatio } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Gallery from './Gallery';
import { ContentPanel, GalleryPanel } from '../components/PagePanels';

type ProjectCardData = {
  title: string;
  description: string;
  to: string;
  images: Array<{ src: string; alt: string }>;
};

const projectCards: ProjectCardData[] = [
  {
    title: 'Duke Robotics Club',
    description:
      'I am President of the Duke Robotics Club, where I lead the design and construction of autonomous underwater robots for the International RoboSub competition. I fabricated a titanium top plate to secure our capsule, helped develop a spring-loaded torpedo system, and led the effort to build a new robot from the ground up. I am currently focusing on a more robust hydrophone system to track acoustic pingers and improve our autonomous underwater navigation.',
    to: '/duke-robotics',
    images: [
      { src: '/assets/robot_render.png', alt: 'Robot render' },
      { src: '/assets/MiniRender.png', alt: 'Mini render' },
    ],
  },
  {
    title: 'Head Clamp',
    description:
      'The head clamp is a tool used in neurosurgery to immobilize the patient’s head during procedures. Traditionally, it provides stable fixation but offers no digital means of monitoring the pressure applied. Our updated design preserves the original pins by relocating the sensing mechanism off the clamp itself. Instead, a retrofitted force washer is integrated into the clamp assembly. This washer measures the applied forces and transmits data through a custom interface. The system provides surgeons with real-time feedback during setup and continuous pressure monitoring throughout the procedure. *Patent Pending*',
    to: '/head-clamp',
    images: [{ src: '/Gallery/SkullClamp.png', alt: 'Head Clamp' }],
  },
  {
    title: 'MaRRS Research',
    description:
      'The Marine Robotics and Remote Sensing Lab uses drone imagery to monitor seal populations and their habitats. I trained segmentation models to detect seals and analyze their habitat preferences about environmental variables like ice density (90% accuracy & ~3 papers in review). Another project involved mounting an autonomous rover with a Lidar sensor to create accurate 3D replicas (digital twins) of surveyed areas.',
    to: '/marrs-research',
    images: [
      { src: '/assets/Seal_Icon.jpg', alt: 'Seal Icon' },
      { src: '/assets/Rover_Icon.jpg', alt: 'Rover Icon' },
    ],
  },
  {
    title: 'High School',
    description:
      'During high school, I found various engineering projects, including designing and fabricating combat robots for Antweight and Beetleweight divisions. I developed a hexapod with interconnected limbs and programmed it using Arduino, and collaborated on creating a custom drone PCB and Arduino-based firmware. Additionally, I founded an Etsy store featuring a 3D-printed flute rest, for which I was granted a utility patent.',
    to: '/highschool',
    images: [
      { src: '/assets/DroneIcon.jpg', alt: 'Drone Icon' },
      { src: '/Gallery/Rest Alone.jpg', alt: 'High school project' },
    ],
  },
];

const ProjectCard = ({ title, description, to, images }: ProjectCardData) => {
  const imageColumns = images.length > 1 ? { base: 1, md: 2 } : { base: 1 };

  return (
    <Card
      overflow="hidden"
      variant="outline"
      borderColor="blackAlpha.100"
      borderRadius="2xl"
      bg="rgba(255, 255, 255, 0.9)"
      boxShadow="0 18px 40px rgba(15, 23, 42, 0.08)"
      h="full"
    >
      <CardBody display="flex" flexDirection="column" gap={4}>
        <Box p={2} borderRadius="2xl" bg="linear-gradient(135deg, rgba(14, 116, 144, 0.08), rgba(36, 142, 141, 0.04))">
          <SimpleGrid columns={imageColumns} spacing={3} justifyItems="stretch">
          {images.map(image => (
            <AspectRatio key={image.src} ratio={images.length > 1 ? 4 / 3 : 16 / 10}>
              <Image
                objectFit="cover"
                w="full"
                h="full"
                src={image.src}
                alt={image.alt}
                borderRadius="xl"
              />
            </AspectRatio>
          ))}
          </SimpleGrid>
        </Box>
        <Stack spacing={3} flex="1">
          <Badge alignSelf="flex-start" colorScheme="teal" variant="subtle" borderRadius="full" px={3} py={1} textTransform="none">
            Featured project
          </Badge>
          <Heading size="md" lineHeight="1.15">
            {title}
          </Heading>
          <Text fontSize="md" color="blackAlpha.800" noOfLines={5}>
            {description}
          </Text>
        </Stack>
        <Divider borderColor="blackAlpha.200" />
        <Button as={RouterLink} to={to} variant="solid" colorScheme="teal" alignSelf="flex-start">
          Read More
        </Button>
      </CardBody>
    </Card>
  );
};

const Home = () => {
  const basePath = '/Gallery/';

  const imageNames = [
    'head_clamp.jpg',
    'Lidar Output.png',
    'PCBDraft3.jpg',
    'Ice_trace_Seals_trace.JPG',
    'MiniRender.png',
    'Oogway CAD.PNG',
    'DroneIcon.jpg',
    'FluteFull.jpg',
    'effortless.png',
  ];

  const images = imageNames.map(name => `${basePath}${name}`);
  const imageWidth = { base: "90vw", md: "70vw", lg: "50vw" }; // Adjust widths for different screen sizes

  return (
    <Box>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6} mb={8} alignItems="stretch">
        <ContentPanel p={{ base: 5, md: 8 }}>
          <Stack spacing={4} h="full" justify="center">
            <Text textTransform="uppercase" letterSpacing="0.22em" fontSize="xs" fontWeight="700" color="teal.700">
              Robotics • Research • Engineering
            </Text>
            <Heading size="2xl" lineHeight="1.02">
              Saagar Arya
            </Heading>
            <Text fontSize="lg" color="blackAlpha.800">
              Duke student focused on robotics, fabrication, and applied engineering. This portfolio collects work from lab research, club leadership, and early projects that still shape how I design and build.
            </Text>
            <Text fontSize="md" color="blackAlpha.700">
              The site is organized with the most recent and substantial work first, followed by earlier projects that provide context.
            </Text>
          </Stack>
        </ContentPanel>
        <ContentPanel p={0} overflow="hidden">
          <AspectRatio ratio={4 / 3}>
            <Image src="/assets/GoodProfilePicSquare.JPG" alt="Profile" objectFit="cover" w="full" h="full" />
          </AspectRatio>
        </ContentPanel>
      </SimpleGrid>

      <GalleryPanel mb={6}>
        <Gallery images={images} />
      </GalleryPanel>

      <Box mb={3}>
        <Heading size="lg" mb={2}>
          Selected Projects
        </Heading>
        <Text color="blackAlpha.700">
          The projects are ordered from the work I want to surface first, to the earlier pieces that round out the portfolio.
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={5} mb={8} alignItems="stretch">
        {projectCards.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </SimpleGrid>
      <ContentPanel p={4} mb={6}>
        <Heading size="lg" mb={4} textAlign="center">
          Skills & Tools
        </Heading>
        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={3}>
          <Badge p={2} borderRadius="full" textAlign="center" colorScheme="teal" variant="subtle">Machine Learning</Badge>
          <Badge p={2} borderRadius="full" textAlign="center" colorScheme="teal" variant="subtle">ETL</Badge>
          <Badge p={2} borderRadius="full" textAlign="center" colorScheme="teal" variant="subtle">Python</Badge>
          <Badge p={2} borderRadius="full" textAlign="center" colorScheme="teal" variant="subtle">Java</Badge>
          <Badge p={2} borderRadius="full" textAlign="center" colorScheme="teal" variant="subtle">C/C++</Badge>
          <Badge p={2} borderRadius="full" textAlign="center" colorScheme="teal" variant="subtle">React.js</Badge>
          <Badge p={2} borderRadius="full" textAlign="center" colorScheme="teal" variant="subtle">Spring Framework</Badge>
          <Badge p={2} borderRadius="full" textAlign="center" colorScheme="teal" variant="subtle">Web Development</Badge>
          <Badge p={2} borderRadius="full" textAlign="center" colorScheme="teal" variant="subtle">Circuit Design</Badge>
          <Badge p={2} borderRadius="full" textAlign="center" colorScheme="teal" variant="subtle">PCB Design</Badge>
          <Badge p={2} borderRadius="full" textAlign="center" colorScheme="teal" variant="subtle">Electrical Troubleshooting</Badge>
          <Badge p={2} borderRadius="full" textAlign="center" colorScheme="teal" variant="subtle">Altium</Badge>
          <Badge p={2} borderRadius="full" textAlign="center" colorScheme="teal" variant="subtle">Autodesk Eagle</Badge>
          <Badge p={2} borderRadius="full" textAlign="center" colorScheme="teal" variant="subtle">CAD/CAM</Badge>
          <Badge p={2} borderRadius="full" textAlign="center" colorScheme="teal" variant="subtle">Fusion 360</Badge>
          <Badge p={2} borderRadius="full" textAlign="center" colorScheme="teal" variant="subtle">Solidworks</Badge>
          <Badge p={2} borderRadius="full" textAlign="center" colorScheme="teal" variant="subtle">3D Printing</Badge>
          <Badge p={2} borderRadius="full" textAlign="center" colorScheme="teal" variant="subtle">CNC</Badge>
          <Badge p={2} borderRadius="full" textAlign="center" colorScheme="teal" variant="subtle">Laser Cutting</Badge>
        </SimpleGrid>
      </ContentPanel>
      <Flex 
        mt={6} 
        justifyContent="center" 
        alignItems="center" 
        flexDirection="column"
      >
        <ContentPanel width={imageWidth} mb={4}>
          <Image
            src="\Saagar_Arya_Resume_2025_06_07.png"
            alt="Saagar Drone Project Page 1"
            width="100%"
            height="auto"
          />
        </ContentPanel>
      </Flex>
    </Box>
  );
};

export default Home;
