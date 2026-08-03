import { AspectRatio, Box, Carousel, IconButton, Image } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import type { GalleryImage } from '../data/gallery';

/**
 * The source images vary wildly in aspect ratio (tall phone photos, wide PCB
 * screenshots, square renders). Every slide is therefore given an identical
 * fixed-ratio stage and the image is contained inside it, so the carousel never
 * changes height between slides and nothing overflows on narrow screens.
 */
const Gallery = ({ images }: { images: GalleryImage[] }) => {
  if (images.length === 0) return null;

  return (
    <Carousel.Root
      slideCount={images.length}
      slidesPerPage={1}
      defaultPage={0}
      spacing="0px"
      loop
      allowMouseDrag
      width="full"
      maxW="full"
      overflow="hidden"
    >
      <Carousel.ItemGroup>
        {images.map((image, index) => (
          <Carousel.Item key={image.src} index={index}>
            <AspectRatio ratio={{ base: 4 / 3, md: 16 / 10 }} w="full">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="rgba(255, 255, 255, 0.55)"
                borderRadius="xl"
                overflow="hidden"
                p={{ base: 2, md: 4 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  // Only the first slide blocks paint; the rest stream in as needed.
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  draggable={false}
                  maxH="100%"
                  maxW="100%"
                  w="auto"
                  h="auto"
                  objectFit="contain"
                  borderRadius="md"
                />
              </Box>
            </AspectRatio>
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <Carousel.Control
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={{ base: 2, md: 4 }}
        mt="3"
      >
        <Carousel.PrevTrigger asChild>
          <IconButton
            aria-label="Previous image"
            variant="ghost"
            colorPalette="teal"
            size={{ base: 'sm', md: 'md' }}
            rounded="full"
            flexShrink={0}
          >
            <FaChevronLeft />
          </IconButton>
        </Carousel.PrevTrigger>

        <Carousel.IndicatorGroup gap="2" flexWrap="wrap" justifyContent="center">
          {images.map((image, index) => (
            <Carousel.Indicator
              key={image.src}
              index={index}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </Carousel.IndicatorGroup>

        <Carousel.NextTrigger asChild>
          <IconButton
            aria-label="Next image"
            variant="ghost"
            colorPalette="teal"
            size={{ base: 'sm', md: 'md' }}
            rounded="full"
            flexShrink={0}
          >
            <FaChevronRight />
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  );
};

export default Gallery;
