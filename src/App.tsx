import { Box, Flex, Link, IconButton, useToast, Tooltip } from '@chakra-ui/react';
import { Link as RouterLink, Route, Routes } from 'react-router-dom';
import { FaLinkedin, FaEnvelope, FaHome, FaFileDownload } from 'react-icons/fa'; // Import the download icon
import Highschool from './pages/Highschool.tsx';
import DukeRobotics from './pages/DukeRobotics.tsx';
import HeadClamp from './pages/HeadClamp.tsx';
import MaRRSResearch from './pages/MaRRSResearch.tsx';
import Home from './pages/Home.tsx'; // Home component
import NotFound from './pages/NotFound.tsx'; // NotFound component

// ResumeDownloadIcon component
const ResumeDownloadIcon = () => (
  <Tooltip label="Download Resume" aria-label="Download Resume Tooltip">
    <IconButton
      as="a"
      href="/Saagar_Arya_Resume_2025_06_07.pdf"
      download // This attribute triggers the download
      aria-label="Download Resume"
      icon={<FaFileDownload />}
      colorScheme="teal"
      variant="solid"
      bg="teal.500"
      _hover={{ bg: "teal.700" }}
    >
      Resume
    </IconButton>
  </Tooltip>
);

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
    <Box>
      <Flex as="nav" bg="teal.500" p="4" align="center" gap="4" wrap="wrap">
        <Tooltip label="Home" aria-label="Home Tooltip">
          <Link as={RouterLink} to="/" color="white" fontWeight="bold">
            <IconButton
              aria-label="Home"
              icon={<FaHome />}
              colorScheme="teal"
              variant="solid"
              bg="teal.500"
              _hover={{ bg: "teal.700" }}
            />
          </Link>
        </Tooltip>
        <Flex flex="1" />
        <Link
          as={RouterLink}
          to="/head-clamp"
          color="white"
          p="2"
          borderRadius="md"
          _hover={{ bg: "teal.700" }}
        >
          Head Clamp
        </Link>
        <Link
          as={RouterLink}
          to="/marrs-research"
          color="white"
          p="2"
          borderRadius="md"
          _hover={{ bg: "teal.700" }}
        >
          MaRRS Research
        </Link>
        <Link
          as={RouterLink}
          to="/duke-robotics"
          color="white"
          p="2"
          borderRadius="md"
          _hover={{ bg: "teal.700" }}
        >
          Duke Robotics Club
        </Link>
        <Link
          as={RouterLink}
          to="/highschool"
          color="white"
          p="2"
          borderRadius="md"
          _hover={{ bg: "teal.700" }}
        >
          High School
        </Link>
        <Flex flex="1" />

        {/* Resume download button */}
        <ResumeDownloadIcon />

        {/* LinkedIn button */}
        <Tooltip label="LinkedIn Profile" aria-label="LinkedIn Tooltip">
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/saagar-arya-261341216/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            colorScheme="teal"
            variant="solid"
            bg="teal.500"
            _hover={{ bg: "teal.700" }}
          />
        </Tooltip>

        {/* Email button */}
        <Tooltip label="Copy Email" aria-label="Copy Email Tooltip">
          <IconButton
            aria-label="Copy Email"
            icon={<FaEnvelope />}
            colorScheme="teal"
            variant="solid"
            bg="teal.500"
            _hover={{ bg: "teal.700" }}
            onClick={handleCopyEmail}
          />
        </Tooltip>
      </Flex>

      <Box p="4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/highschool/*" element={<Highschool />} />
          <Route path="/duke-robotics" element={<DukeRobotics />} />
          <Route path="/head-clamp" element={<HeadClamp />} />
          <Route path="/marrs-research" element={<MaRRSResearch />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
