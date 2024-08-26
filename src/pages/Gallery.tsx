import React from 'react';
import Slider from 'react-slick';
import { Box, IconButton, Image, Flex } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const sliderRef = React.useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Box position="relative" maxW="75%" mx="auto" p={4}>
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <Box key={index} p={2}>
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              maxH="400px"
              maxW="100%"
              mx="auto"
              objectFit="contain"
            />
          </Box>
        ))}
      </Slider>
      <Flex position="absolute" top="50%" left="-50px" transform="translateY(-50%)">
        <IconButton
          aria-label="Previous Image"
          icon={<FaChevronLeft />}
          onClick={() => sliderRef.current?.slickPrev()}
          variant="ghost"
          size="lg"
          colorScheme="blue"
        />
      </Flex>
      <Flex position="absolute" top="50%" right="-50px" transform="translateY(-50%)">
        <IconButton
          aria-label="Next Image"
          icon={<FaChevronRight />}
          onClick={() => sliderRef.current?.slickNext()}
          variant="ghost"
          size="lg"
          colorScheme="blue"
        />
      </Flex>
    </Box>
  );
};

export default Gallery;
