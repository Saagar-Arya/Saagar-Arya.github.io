import type { ReactNode } from 'react';
import { Box, type BoxProps } from '@chakra-ui/react';

type PanelProps = BoxProps & {
  children: ReactNode;
};

export const ContentPanel = ({ children, ...props }: PanelProps) => {
  return (
    <Box
      border="1px solid"
      borderColor="whiteAlpha.500"
      borderRadius="md"
      boxShadow="0 14px 32px rgba(15, 23, 42, 0.08)"
      bg="rgba(255, 255, 255, 0.82)"
      backdropFilter="blur(10px)"
      overflow="hidden"
      {...props}
    >
      {children}
    </Box>
  );
};

export const GalleryPanel = ({ children, ...props }: PanelProps) => {
  return (
    <Box
      bg="rgba(226, 236, 239, 0.82)"
      p={4}
      borderRadius="md"
      boxShadow="0 14px 32px rgba(15, 23, 42, 0.08)"
      textAlign="center"
      backdropFilter="blur(10px)"
      {...props}
    >
      {children}
    </Box>
  );
};