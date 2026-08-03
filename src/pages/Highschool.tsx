import { Box, Button, Heading, Image, Stack, Tabs, Text } from '@chakra-ui/react';
import Gallery from '../components/Gallery';
import { galleryImages, type GalleryImage } from '../data/gallery';
import { ContentPanel, GalleryPanel } from '../components/PagePanels';

type HighschoolTab = {
  value: string;
  label: string;
  images: GalleryImage[];
  /** Scanned pages of the project one-pager, shown beneath the gallery. */
  pages: string[];
  pdf: string;
  downloadLabel: string;
};

const tabs: HighschoolTab[] = [
  {
    value: 'drone',
    label: 'Drone Project',
    images: galleryImages(['micro-quadcopter-built.jpg', 'drone-flight-controller-pcb-layout.png', 'drone-flight-controller-schematic.png']),
    pages: [
      '/assets/PDFPIctures/Saagar Drone Project_Page_1.jpg',
      '/assets/PDFPIctures/Saagar Drone Project_Page_2.jpg',
    ],
    pdf: '/assets/Saagar Drone Project.pdf',
    downloadLabel: 'Download Drone One Pager',
  },
  {
    value: 'combat',
    label: 'Combat Robots',
    images: galleryImages([
      'effortless-beetleweight-cad-render.png',
      'effortless-wheel-guards.jpg',
      'combat-robots-at-competition.jpg',
      'lawnmower-horizontal-spinner-cad.png',
      'lawnmower-robot-built.jpg',
      'wedge-antweight-robot-internals.png',
      'effortless-mini-antweight-built.jpg',
      'effortless-mini-cad-render.jpg',
    ]),
    pages: [
      '/assets/PDFPIctures/Saagar Combat Robots_Page_1.jpg',
      '/assets/PDFPIctures/Saagar Combat Robots_Page_2.jpg',
    ],
    pdf: '/assets/Saagar Combat Robots.pdf',
    downloadLabel: 'Download Combat Robots One Pager',
  },
  {
    value: 'flute',
    label: 'Flute Finger Rest Etsy & Patent',
    images: galleryImages(['flute-finger-rest-product.jpg', 'flute-finger-rest-in-use.jpg', 'flute-with-finger-rest.jpg']),
    pages: [
      '/assets/PDFPIctures/Saagar Flute Rests_Page_1.jpg',
      '/assets/PDFPIctures/Saagar Flute Rests_Page_2.jpg',
    ],
    pdf: '/assets/Saagar Flute Rests.pdf',
    downloadLabel: 'Download Flute Rests One Pager',
  },
  {
    value: 'hexapod',
    label: 'Hexapod',
    images: galleryImages(['hexapod-legs-laid-out.jpg', 'hexapod-standing.jpg']),
    pages: [
      '/assets/PDFPIctures/Saagar Hexapod Project_Page_1.jpg',
      '/assets/PDFPIctures/Saagar Hexapod Project_Page_2.jpg',
    ],
    pdf: '/assets/Saagar Hexapod Project.pdf',
    downloadLabel: 'Download Hexapod One Pager',
  },
];

const TabBody = ({ images, pages, pdf, downloadLabel }: HighschoolTab) => (
  <Stack gap={6} align="center">
    <GalleryPanel w="full">
      <Gallery images={images} />
    </GalleryPanel>

    <Stack gap={4} align="center" w="full" maxW={{ base: 'full', md: '3xl' }}>
      {pages.map((page, index) => (
        <Box
          key={page}
          border="1px solid"
          borderColor="blackAlpha.200"
          borderRadius="xl"
          overflow="hidden"
          w="full"
        >
          <Image src={page} alt={`${downloadLabel} page ${index + 1}`} loading="lazy" decoding="async" w="full" h="auto" />
        </Box>
      ))}
    </Stack>

    <Button asChild colorPalette="teal" variant="outline">
      <a href={pdf} download>
        {downloadLabel}
      </a>
    </Button>
  </Stack>
);

const Highschool = () => (
  <Box>
    <ContentPanel p={{ base: 5, md: 7 }} mb={6}>
      <Heading size="xl" mb={3}>
        High School
      </Heading>
      <Text fontSize="md" color="blackAlpha.800">
        During high school, I found various engineering projects, including designing and fabricating
        combat robots for Antweight and Beetleweight divisions. I developed a hexapod with
        interconnected limbs and programmed it using Arduino, and collaborated on creating a custom
        drone PCB and Arduino-based firmware. Additionally, I founded an Etsy store featuring a
        3D-printed flute rest, for which I was granted a utility patent.
      </Text>
    </ContentPanel>

    <Tabs.Root defaultValue={tabs[0].value} variant="subtle" colorPalette="teal" lazyMount unmountOnExit>
      <Tabs.List flexWrap="wrap" gap={2} mb={4} bg="transparent">
        {tabs.map(tab => (
          <Tabs.Trigger key={tab.value} value={tab.value} fontWeight="600">
            {tab.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {tabs.map(tab => (
        <Tabs.Content key={tab.value} value={tab.value} px={0}>
          <TabBody {...tab} />
        </Tabs.Content>
      ))}
    </Tabs.Root>
  </Box>
);

export default Highschool;
