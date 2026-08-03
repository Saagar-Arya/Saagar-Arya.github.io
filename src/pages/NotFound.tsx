import { Button, Heading, Stack, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ContentPanel } from '../components/PagePanels';

const NotFound = () => (
  <ContentPanel p={{ base: 8, md: 12 }} textAlign="center">
    <Stack gap={4} align="center">
      <Text
        textTransform="uppercase"
        letterSpacing="0.22em"
        fontSize="xs"
        fontWeight="700"
        color="teal.700"
      >
        Error 404
      </Text>
      <Heading size="3xl">Page not found</Heading>
      <Text fontSize="lg" color="blackAlpha.700" maxW="lg">
        That page doesn’t exist — it may have been renamed or removed. Everything else is still one
        click away.
      </Text>
      <Button asChild colorPalette="teal" size="lg" mt={2}>
        <RouterLink to="/">Back to home</RouterLink>
      </Button>
    </Stack>
  </ContentPanel>
);

export default NotFound;
