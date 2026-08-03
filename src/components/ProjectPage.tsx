import { Box, Heading, Text } from '@chakra-ui/react';
import Gallery from './Gallery';
import type { GalleryImage } from '../data/gallery';
import { ContentPanel, GalleryPanel } from './PagePanels';

type ProjectPageProps = {
  title: string;
  description: string;
  images: GalleryImage[];
};

/**
 * Shared shell for the project detail pages: an intro panel above a gallery.
 * Width is inherited from the app Container rather than hardcoded viewport units.
 */
const ProjectPage = ({ title, description, images }: ProjectPageProps) => (
  <Box>
    <ContentPanel p={{ base: 5, md: 7 }} mb={6}>
      <Heading size="xl" mb={3}>
        {title}
      </Heading>
      <Text fontSize="md" color="blackAlpha.800">
        {description}
      </Text>
    </ContentPanel>
    <GalleryPanel>
      <Gallery images={images} />
    </GalleryPanel>
  </Box>
);

export default ProjectPage;
