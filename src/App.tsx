import { Box, Container, Flex, Grid, IconButton, Link } from '@chakra-ui/react';
import { Link as RouterLink, Route, Routes } from 'react-router-dom';
import { FaEnvelope, FaFileDownload, FaHome, FaLinkedin } from 'react-icons/fa';
import Home from './pages/Home';
import DukeRobotics from './pages/DukeRobotics';
import HeadClamp from './pages/HeadClamp';
import MaRRSResearch from './pages/MaRRSResearch';
import Highschool from './pages/Highschool';
import NotFound from './pages/NotFound';
import { Tooltip } from './components/ui/tooltip';
import { Toaster } from './components/ui/toaster';
import { toaster } from './lib/toaster';
import { EMAIL, LINKEDIN_URL, RESUME_PDF, sectionLinks } from './data/site';

const navActionStyles = {
  colorPalette: 'teal' as const,
  variant: 'solid' as const,
  size: 'md' as const,
  bg: 'teal.600',
  color: 'white',
  _hover: { bg: 'teal.700', transform: 'translateY(-1px)' },
};

function App() {
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toaster.create({ title: 'Email copied to clipboard!', type: 'success', duration: 2000, closable: true });
    } catch {
      // Clipboard access can be blocked (insecure context, denied permission) —
      // surface the address so it can still be copied by hand.
      toaster.create({ title: `Copy failed — ${EMAIL}`, type: 'error', duration: 6000, closable: true });
    }
  };

  return (
    <Box minH="100vh" py={{ base: 3, md: 4 }}>
      <Container maxW="7xl">
        <Grid
          as="nav"
          // Three zones on desktop: the 1fr side columns keep the centre group
          // optically centred regardless of how wide the left/right groups get.
          templateColumns={{ base: '1fr', md: 'auto 1fr auto' }}
          alignItems="center"
          gap={{ base: 3, md: 5 }}
          px={{ base: 4, md: 6 }}
          py={{ base: 3, md: 4 }}
          borderRadius="2xl"
          border="1px solid"
          borderColor="whiteAlpha.500"
          bg="rgba(9, 78, 92, 0.9)"
          color="white"
          boxShadow="0 10px 24px rgba(12, 74, 110, 0.16)"
          mb={8}
        >
          <Flex justify={{ base: 'center', md: 'flex-start' }}>
            <Tooltip content="Home">
              <IconButton asChild aria-label="Home" {...navActionStyles}>
                <RouterLink to="/">
                  <FaHome />
                </RouterLink>
              </IconButton>
            </Tooltip>
          </Flex>

          <Flex justify="center" align="center" gap={{ base: 2, md: 4 }} wrap="wrap">
            {sectionLinks.map(link => (
              <Link
                key={link.to}
                asChild
                // Chakra's Link recipe sets its own foreground colour, so white
                // has to be stated here rather than inherited from the nav.
                color="white"
                fontWeight="600"
                fontSize="md"
                px="2"
                py="1.5"
                borderRadius="md"
                _hover={{ bg: 'rgba(255, 255, 255, 0.12)', color: 'white', textDecoration: 'none' }}
                _focusVisible={{ outline: '2px solid', outlineColor: 'white', outlineOffset: '2px' }}
              >
                <RouterLink to={link.to}>{link.label}</RouterLink>
              </Link>
            ))}
          </Flex>

          <Flex justify={{ base: 'center', md: 'flex-end' }} align="center" gap={2}>
            <Tooltip content="Download Resume">
              <IconButton asChild aria-label="Download Resume" {...navActionStyles}>
                <a href={RESUME_PDF} download>
                  <FaFileDownload />
                </a>
              </IconButton>
            </Tooltip>
            <Tooltip content="LinkedIn Profile">
              <IconButton asChild aria-label="LinkedIn" {...navActionStyles}>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </IconButton>
            </Tooltip>
            <Tooltip content="Copy Email">
              <IconButton aria-label="Copy Email" onClick={handleCopyEmail} {...navActionStyles}>
                <FaEnvelope />
              </IconButton>
            </Tooltip>
          </Flex>
        </Grid>

        <Box pb={{ base: 4, md: 6 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/duke-robotics" element={<DukeRobotics />} />
            <Route path="/head-clamp" element={<HeadClamp />} />
            <Route path="/marrs-research" element={<MaRRSResearch />} />
            <Route path="/highschool/*" element={<Highschool />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Container>
      <Toaster />
    </Box>
  );
}

export default App;
