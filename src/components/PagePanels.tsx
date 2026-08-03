import type { ReactNode } from 'react';
import { Box, type BoxProps } from '@chakra-ui/react';

type PanelProps = BoxProps & {
  children: ReactNode;
};

export const ContentPanel = ({ children, ...props }: PanelProps) => (
  <Box
    border="1px solid"
    borderColor="whiteAlpha.500"
    borderRadius="2xl"
    boxShadow="0 14px 32px rgba(15, 23, 42, 0.08)"
    bg="rgba(255, 255, 255, 0.82)"
    backdropFilter="blur(10px)"
    overflow="hidden"
    {...props}
  >
    {children}
  </Box>
);

export const GalleryPanel = ({ children, ...props }: PanelProps) => (
  <Box
    bg="rgba(226, 236, 239, 0.82)"
    p={{ base: 3, md: 5 }}
    borderRadius="2xl"
    boxShadow="0 14px 32px rgba(15, 23, 42, 0.08)"
    backdropFilter="blur(10px)"
    textAlign="center"
    {...props}
  >
    {children}
  </Box>
);
