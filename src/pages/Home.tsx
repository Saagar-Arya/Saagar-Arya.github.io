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
  Wrap,
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

type Role = {
  org: string;
  title: string;
  period: string;
  detail: string;
};

const experience: Role[] = [
  {
    org: 'AeroVironment',
    title: 'Software Engineering Intern, Loitering & Munition Systems',
    period: 'Jun 2026 - Present',
    detail:
      'Autonomy and task planning software in ROS2 for Switchblade aircraft, plus a tracker fusing vision with onboard sensor data.',
  },
  {
    org: 'SpaceX',
    title: 'Software Engineering Intern, Starship Communications',
    period: 'Jan - Apr 2026',
    detail:
      'Migrated Starship ground software into a Kubernetes cluster, owning the infrastructure end to end. Built regression tests for the ECEF Sender that replaced a costly hardware-in-the-loop dependency.',
  },
  {
    org: 'Northrop Grumman',
    title: 'Embedded Software Engineer Intern, GATR Program',
    period: 'May - Aug 2025',
    detail:
      'Automatic target recognition turning underwater vehicle sensor data into layered maps of the ocean floor. C++, Python, Protobuf RPC, and a GTest suite for CI.',
  },
  {
    org: 'Tarigma Corporation',
    title: 'Software Engineering Intern',
    period: 'Jun 2022 - Sep 2024',
    detail:
      'Full-stack work on G.E.M., a power grid monitoring application. Built a fault locator for correcting line geometry errors in real grid data.',
  },
];

const projectCards: ProjectCardData[] = [
  {
    title: 'Duke Robotics Club',
    description:
      "As President I lead a 40-member team building autonomous underwater vehicles for RoboSub. I led the design and build of our second AUV, Crush, and built a four-channel hydrophone array on a custom PCB for acoustic localization. We placed 7th of 56 teams at RoboSub 2025, the club's first finals appearance.",
    to: '/duke-robotics',
    images: [
      { src: '/Gallery/crush-auv-2026.jpg', alt: 'Crush AUV, 2026 build' },
      { src: '/Gallery/oogway-auv-2026.jpg', alt: 'Oogway AUV, 2026 build' },
    ],
  },
  {
    title: 'Head Clamp',
    description:
      "Co-founder of Blue Skull Group LLC, building a digital pressure monitor for the skull clamps that hold a patient rigid during brain surgery. A load cell retrofit maps deformation to calibrated force, and custom PCBs stream live per-pin readings over Bluetooth. Utility patent pending.",
    to: '/head-clamp',
    images: [{ src: '/Gallery/head-clamp-v3-live-readout.jpg', alt: 'Head clamp with live force readout' }],
  },
  {
    title: 'MaRRS Research',
    description:
      "At Duke's Marine Robotics and Remote Sensing Lab I use YOLOv8 to detect seals in drone imagery of Glacier Bay National Park, with human-in-the-loop active learning to improve the dataset. I also put LiDAR on an autonomous rover to build digital twins of terrain. Co-author on two published papers.",
    to: '/marrs-research',
    images: [
      { src: '/Gallery/ice-floe-segmentation-overlay.jpg', alt: 'Ice floe segmentation with seal detections' },
      { src: '/Gallery/lidar-survey-rover.jpg', alt: 'LiDAR survey rover' },
    ],
  },
  {
    title: 'High School',
    description:
      "Where the hardware started. I built combat robots for the Antweight and Beetleweight divisions, a hexapod walker on Arduino, and a custom drone PCB with its firmware. I also founded an Etsy business selling a 3D-printed flute rest, which holds a granted U.S. utility patent.",
    to: '/highschool',
    images: [
      { src: '/Gallery/micro-quadcopter-built.jpg', alt: 'Custom-built micro quadcopter' },
      { src: '/Gallery/flute-finger-rest-product.jpg', alt: '3D-printed flute finger rest' },
    ],
  },
];

// Grouped to match the four categories on the resume.
const skillGroups: Array<{ label: string; items: string[] }> = [
  {
    label: 'Languages & Frameworks',
    items: ['C++', 'Python', 'C', 'Java', 'SQL', 'React', 'Bash'],
  },
  {
    label: 'Infrastructure & Tools',
    items: ['ROS2', 'Kubernetes', 'Bazel/Starlark', 'Docker', 'Helm', 'GTest', 'Protobuf'],
  },
  {
    label: 'Machine Learning',
    items: ['TensorRT', 'Ultralytics YOLO', 'OpenCV', 'PyTorch', 'scikit-learn', 'Roboflow', 'LabelMe'],
  },
  {
    label: 'Hardware & EDA',
    items: ['KiCad', 'Eagle', 'Autodesk Fusion 360', 'SolidWorks'],
  },
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
  'crush-auv-2026.jpg',
  'oogway-auv-2026.jpg',
  'head-clamp-v3-live-readout.jpg',
  'ice-floe-segmentation-overlay.jpg',
  'lidar-point-cloud-campus.png',
  'hydrophone-array-pcb-layout.png',
  'micro-quadcopter-built.jpg',
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
            Robotics, Autonomy, Embedded Systems
          </Text>
          <Heading size="4xl" lineHeight="1.02">
            Saagar Arya
          </Heading>
          <Text fontSize="lg" color="blackAlpha.800">
            I build robots and the software that runs them. At Duke, I'm studying Electrical &
            Computer Engineering and Computer Science, graduating December 2026. Past roles
            include software and embedded engineering at AeroVironment, SpaceX, and Northrop
            Grumman. I am the President of Duke Robotics Club, where our 40-person team placed
            7th of 56 at RoboSub 2025; I co-founded a startup building force-sensing hardware
            for neurosurgery and am part of the Marine Robotics and Remote Sensing Lab.
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

    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={5} mb={8} alignItems="stretch">
      {projectCards.map(project => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </SimpleGrid>

    <ContentPanel p={{ base: 5, md: 7 }} mb={8}>
      <Heading size="2xl" mb={5}>
        Experience
      </Heading>
      <Stack gap={5} separator={<Separator borderColor="blackAlpha.200" />}>
        {experience.map(role => (
          <Box key={role.org}>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={1} mb={1} alignItems="baseline">
              <Heading size="md">{role.org}</Heading>
              <Text
                fontSize="sm"
                color="blackAlpha.600"
                textAlign={{ base: 'left', md: 'right' }}
                whiteSpace="nowrap"
              >
                {role.period}
              </Text>
            </SimpleGrid>
            <Text fontSize="sm" fontWeight="600" color="teal.700" mb={1}>
              {role.title}
            </Text>
            <Text fontSize="md" color="blackAlpha.800">
              {role.detail}
            </Text>
          </Box>
        ))}
      </Stack>
    </ContentPanel>

    <ContentPanel p={{ base: 5, md: 7 }}>
      <Heading size="2xl" mb={5}>
        Skills & Tools
      </Heading>
      <Stack gap={5}>
        {skillGroups.map(group => (
          <Box key={group.label}>
            <Text
              textTransform="uppercase"
              letterSpacing="0.14em"
              fontSize="xs"
              fontWeight="700"
              color="teal.700"
              mb={2}
            >
              {group.label}
            </Text>
            <Wrap gap={2}>
              {group.items.map(skill => (
                <Badge
                  key={skill}
                  px={3}
                  py={1.5}
                  borderRadius="full"
                  colorPalette="teal"
                  variant="subtle"
                  textTransform="none"
                  fontSize="sm"
                >
                  {skill}
                </Badge>
              ))}
            </Wrap>
          </Box>
        ))}
      </Stack>
    </ContentPanel>
  </Box>
);

export default Home;
