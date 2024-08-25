import { Box, Heading } from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Box textAlign="center" py="20">
      <Heading>404 - Page Not Found</Heading>
      <Box mt="4">The page you are looking for does not exist.</Box>
    </Box>
  );
};

export default NotFound;
