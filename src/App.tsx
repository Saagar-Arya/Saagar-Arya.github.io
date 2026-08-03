import { Box, Flex, Link, IconButton, useToast, Tooltip, Container } from '@chakra-ui/react';
import { Link as RouterLink, Route, Routes } from 'react-router-dom';
import { FaLinkedin, FaEnvelope, FaHome, FaFileDownload } from 'react-icons/fa';
import Highschool from './pages/Highschool.tsx';
import DukeRobotics from './pages/DukeRobotics.tsx';
import HeadClamp from './pages/HeadClamp.tsx';
import MaRRSResearch from './pages/MaRRSResearch.tsx';
import Home from './pages/Home.tsx';
import NotFound from './pages/NotFound.tsx';

const navActionButtonStyles = {
  colorScheme: 'teal' as const,
  variant: 'solid' as const,
  bg: 'teal.600',
  _hover: { bg: 'teal.700', transform: 'translateY(-1px)' },
};

const sectionLinks = [
  { to: '/duke-robotics', label: 'Duke Robotics Club' },
  { to: '/head-clamp', label: 'Head Clamp' },
  { to: '/marrs-research', label: 'MaRRS Research' },
  { to: '/highschool', label: 'High School' },
];

const navActions = [
  {
    key: 'resume',
    label: 'Download Resume',
    render: () => <IconButton as="a" href="/Saagar_Arya_Resume_2025_06_07.pdf" download aria-label="Download Resume" icon={<FaFileDownload />} {...navActionButtonStyles} />,
    tooltip: 'Download Resume',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    render: () => <IconButton as="a" href="https://www.linkedin.com/in/saagar-arya-261341216/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" icon={<FaLinkedin />} {...navActionButtonStyles} />,
    tooltip: 'LinkedIn Profile',
  },
  {
    key: 'email',
    label: 'Copy Email',
    render: (onClick: () => void) => <IconButton aria-label="Copy Email" icon={<FaEnvelope />} onClick={onClick} {...navActionButtonStyles} />,
    tooltip: 'Copy Email',
  },
] as const;

function App() {
  const toast = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('saagar.arya12@gmail.com');
    toast({
      title: 'Email copied to clipboard!',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box minH="100vh" py={{ base: 3, md: 5 }}>
      <Container maxW="7xl">
        <Flex
          as="nav"
          position="sticky"
          top={3}
          zIndex={10}
          align="center"
          gap="4"
          wrap="wrap"
          px={{ base: 3, md: 4 }}
          py="3"
          borderRadius="2xl"
          border="1px solid"
          borderColor="whiteAlpha.500"
          bg="rgba(9, 78, 92, 0.9)"
          color="white"
          boxShadow="0 16px 40px rgba(12, 74, 110, 0.22)"
          backdropFilter="blur(12px)"
        >
          <Tooltip label="Home" aria-label="Home Tooltip">
            <IconButton
              as={RouterLink}
              to="/"
              aria-label="Home"
              icon={<FaHome />}
              {...navActionButtonStyles}
            />
          </Tooltip>
          <Flex flex="1" display={{ base: 'none', lg: 'block' }} />
          {sectionLinks.map(link => (
            <Link
              key={link.to}
              as={RouterLink}
              to={link.to}
              fontWeight="600"
              px="3"
              py="2"
              borderRadius="md"
              _hover={{ bg: 'rgba(255, 255, 255, 0.12)' }}
            >
              {link.label}
            </Link>
          ))}
          <Flex flex="1" display={{ base: 'none', lg: 'block' }} />

          {navActions.map(action => (
            <Tooltip key={action.key} label={action.tooltip} aria-label={`${action.label} Tooltip`}>
              {action.key === 'email' ? action.render(handleCopyEmail) : action.render()}
            </Tooltip>
          ))}
        </Flex>

        <Box py={{ base: 4, md: 6 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/highschool/*" element={<Highschool />} />
            <Route path="/duke-robotics" element={<DukeRobotics />} />
            <Route path="/head-clamp" element={<HeadClamp />} />
            <Route path="/marrs-research" element={<MaRRSResearch />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
