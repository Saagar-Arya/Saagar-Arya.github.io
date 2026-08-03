import { Box, Heading, Link, Stack, Text } from '@chakra-ui/react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import type { Publication } from '../data/publications';

type PublicationsProps = {
  items: Publication[];
  heading?: string;
};

/**
 * Build the citation line as a single string. Doing this in JS rather than
 * interpolating in JSX avoids stray whitespace between expressions, and trims a
 * trailing period off the author list so "et al." does not end up doubled.
 */
const citation = (item: Publication) => {
  const authors = item.authors?.replace(/\.\s*$/, '');
  const head = [authors, item.venue].filter(Boolean).join('. ');
  return `${head}, ${item.year}`;
};

/** Linked list of papers/patents attached to a project section. */
const Publications = ({ items, heading = 'Publications' }: PublicationsProps) => {
  if (items.length === 0) return null;

  return (
    <Box mt={6}>
      <Heading size="md" mb={3}>
        {heading}
      </Heading>
      <Stack gap={3}>
        {items.map(item => (
          <Box
            key={item.url}
            borderLeft="3px solid"
            borderColor="teal.500"
            pl={4}
            py={1}
          >
            <Link
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              color="teal.700"
              fontWeight="600"
              display="inline-flex"
              alignItems="baseline"
              gap={2}
              _hover={{ color: 'teal.800', textDecoration: 'underline' }}
            >
              {item.title}
              <Box as="span" fontSize="0.7em" flexShrink={0}>
                <FaArrowUpRightFromSquare />
              </Box>
            </Link>
            <Text fontSize="sm" color="blackAlpha.700" mt={1}>
              {citation(item)}
            </Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Publications;
