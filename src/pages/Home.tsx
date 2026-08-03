import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Card,
  Heading,
  Image,
  Separator,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Gallery from '../components/Gallery';
import { galleryImages } from '../data/gallery';
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
      { src: '/Gallery/oogway-auv-render.png', alt: 'Robot render' },
      { src: '/Gallery/mini-auv-cad-render.png', alt: 'Mini render' },
    ],
  },
  {
    title: 'Head Clamp',
    description:
      'The head clamp is a tool used in neurosurgery to immobilize the patient’s head during procedures. Traditionally, it provides stable fixation but offers no digital means of monitoring the pressure applied. Our updated design preserves the original pins by relocating the sensing mechanism off the clamp itself. Instead, a retrofitted force washer is integrated into the clamp assembly. This washer measures the applied forces and transmits data through a custom interface. The system provides surgeons with real-time feedback during setup and continuous pressure monitoring throughout the procedure. Patent pending.',
    to: '/head-clamp',
    images: [{ src: '/Gallery/head-clamp-skull-demo.png', alt: 'Head clamp' }],
  },
  {
    title: 'MaRRS Research',
    description:
      'The Marine Robotics and Remote Sensing Lab uses drone imagery to monitor seal populations and their habitats. I trained segmentation models to detect seals and analyze their habitat preferences about environmental variables like ice density (90% accuracy & ~3 papers in review). Another project involved mounting an autonomous rover with a Lidar sensor to create accurate 3D replicas (digital twins) of surveyed areas.',
    to: '/marrs-research',
    images: [
      { src: '/Gallery/seals-on-ice-crop-color.jpg', alt: 'Seal icon' },
      { src: '/Gallery/lidar-survey-rover.jpg', alt: 'Rover icon' },
    ],
  },
  {
    title: 'High School',
    description:
      'During high school, I found various engineering projects, including designing and fabricating combat robots for Antweight and Beetleweight divisions. I developed a hexapod with interconnected limbs and programmed it using Arduino, and collaborated on creating a custom drone PCB and Arduino-based firmware. Additionally, I founded an Etsy store featuring a 3D-printed flute rest, for which I was granted a utility patent.',
    to: '/highschool',
    images: [
      { src: '/Gallery/micro-quadcopter-built.jpg', alt: 'Drone icon' },
      { src: '/Gallery/flute-finger-rest-product.jpg', alt: 'Flute rest' },
    ],
  },
];

const skills = [
  'Machine Learning',
  'ETL',
  'Python',
  'Java',
  'C/C++',
  'React.js',
  'Spring Framework',
  'Web Development',
  'Circuit Design',
  'PCB Design',
  'Electrical Troubleshooting',
  'Altium',
  'Autodesk Eagle',
  'CAD/CAM',
  'Fusion 360',
  'Solidworks',
  '3D Printing',
  'CNC',
  'Laser Cutting',
];

const ProjectCard = ({ title, description, to, images }: ProjectCardData) => (
  <Card.Root
    variant="outline"
    overflow="hidden"
    borderColor="blackAlpha.100"
    borderRadius="2xl"
    bg="rgba(255, 255, 255, 0.9)"
    boxShadow="0 18px 40px rgba(15, 23, 42, 0.08)"
    h="full"
  >
    <Card.Body display="flex" flexDirection="column" gap={4}>
      <SimpleGrid columns={images.length > 1 ? { base: 1, md: 2 } : { base: 1 }} gap={2}>
        {images.map(image => (
          <AspectRatio key={image.src} ratio={images.length > 1 ? 4 / 3 : 16 / 10}>
            <Image
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              objectFit="cover"
              w="full"
              h="full"
              borderRadius="lg"
            />
          </AspectRatio>
        ))}
      </SimpleGrid>

      <Stack gap={3} flex="1">
        <Badge
          alignSelf="flex-start"
          colorPalette="teal"
          variant="subtle"
          borderRadius="full"
          px={3}
          py={1}
          textTransform="none"
        >
          Featured project
        </Badge>
        <Heading size="lg" lineHeight="1.15">
          {title}
        </Heading>
        <Text fontSize="md" color="blackAlpha.800" lineClamp={5}>
          {description}
        </Text>
      </Stack>

      <Separator borderColor="blackAlpha.200" />
      <Button asChild variant="solid" colorPalette="teal" alignSelf="flex-start">
        <RouterLink to={to}>Read More</RouterLink>
      </Button>
    </Card.Body>
  </Card.Root>
);

const highlightImages = galleryImages([
  'head-clamp-instrumented-rig.jpg',
  'lidar-point-cloud-campus.png',
  'head-clamp-esp32-pcb.jpg',
  'ice-floe-segmentation-overlay.jpg',
  'mini-auv-cad-render.png',
  'oogway-auv-cad-assembly.png',
  'micro-quadcopter-built.jpg',
  'flute-with-finger-rest.jpg',
  'effortless-beetleweight-cad-render.png',
]);

const Home = () => (
  <Box>
    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6} mb={8} alignItems="stretch">
      <ContentPanel p={{ base: 5, md: 8 }}>
        <Stack gap={4} h="full" justify="center">
          <Text
            textTransform="uppercase"
            letterSpacing="0.22em"
            fontSize="xs"
            fontWeight="700"
            color="teal.700"
          >
            Robotics • Research • Engineering
          </Text>
          <Heading size="4xl" lineHeight="1.02">
            Saagar Arya
          </Heading>
          <Text fontSize="lg" color="blackAlpha.800">
            Duke student focused on robotics, fabrication, and applied engineering. This portfolio
            collects work from lab research, club leadership, and early projects that still shape how
            I design and build.
          </Text>
          <Text fontSize="md" color="blackAlpha.700">
            The site is organized with the most recent and substantial work first, followed by
            earlier projects that provide context.
          </Text>
        </Stack>
      </ContentPanel>

      <ContentPanel p={0}>
        <AspectRatio ratio={4 / 3}>
          <Image
            src="/assets/saagar-arya-portrait.jpg"
            alt="Saagar Arya"
            objectFit="cover"
            // The source is square, so a 4:3 frame crops 25% of the height.
            // Biasing the crop toward the top keeps the hairline in frame.
            objectPosition="center 12%"
            w="full"
            h="full"
          />
        </AspectRatio>
      </ContentPanel>
    </SimpleGrid>

    <GalleryPanel mb={8}>
      <Gallery images={highlightImages} />
    </GalleryPanel>

    <Box mb={4}>
      <Heading size="2xl" mb={2}>
        Selected Projects
      </Heading>
      <Text color="blackAlpha.700">
        The projects are ordered from the work I want to surface first, to the earlier pieces that
        round out the portfolio.
      </Text>
    </Box>

    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={5} mb={8} alignItems="stretch">
      {projectCards.map(project => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </SimpleGrid>

    <ContentPanel p={{ base: 5, md: 6 }}>
      <Heading size="2xl" mb={4} textAlign="center">
        Skills & Tools
      </Heading>
      <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap={3}>
        {skills.map(skill => (
          <Badge
            key={skill}
            p={2}
            borderRadius="full"
            justifyContent="center"
            textAlign="center"
            colorPalette="teal"
            variant="subtle"
          >
            {skill}
          </Badge>
        ))}
      </SimpleGrid>
    </ContentPanel>
  </Box>
);

export default Home;
