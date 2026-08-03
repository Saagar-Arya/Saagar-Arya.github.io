import { Box, Button, Heading, Text, Wrap } from '@chakra-ui/react';
import { FaFileDownload } from 'react-icons/fa';
import Gallery from './Gallery';
import Publications from './Publications';
import type { GalleryImage } from '../data/gallery';
import type { Publication } from '../data/publications';
import { ContentPanel, GalleryPanel } from './PagePanels';

type Download = { label: string; href: string };

type ProjectPageProps = {
  title: string;
  description: string;
  images: GalleryImage[];
  publications?: Publication[];
  downloads?: Download[];
};

/**
 * Shared shell for the project detail pages: an intro panel above a gallery,
 * with any associated papers, patents or handouts listed under the copy.
 * Width is inherited from the app Container rather than hardcoded viewport units.
 */
const ProjectPage = ({
  title,
  description,
  images,
  publications = [],
  downloads = [],
}: ProjectPageProps) => (
  <Box>
    <ContentPanel p={{ base: 5, md: 7 }} mb={6}>
      <Heading size="xl" mb={3}>
        {title}
      </Heading>
      <Text fontSize="md" color="blackAlpha.800">
        {description}
      </Text>

      <Publications items={publications} />

      {downloads.length > 0 && (
        <Wrap gap={3} mt={6}>
          {downloads.map(d => (
            <Button key={d.href} asChild colorPalette="teal" variant="outline" size="sm">
              <a href={d.href} target="_blank" rel="noopener noreferrer">
                <FaFileDownload />
                {d.label}
              </a>
            </Button>
          ))}
        </Wrap>
      )}
    </ContentPanel>
    <GalleryPanel>
      <Gallery images={images} />
    </GalleryPanel>
  </Box>
);

export default ProjectPage;
