import { Box, Flex, Link, IconButton, useToast } from '@chakra-ui/react';
import { Link as RouterLink, Route, Routes } from 'react-router-dom';
import { FaLinkedin, FaEnvelope, FaHome} from 'react-icons/fa';
import Highschool from './pages/Highschool.tsx';
import DukeRobotics from './pages/DukeRobotics.tsx';
import HeadClamp from './pages/HeadClamp.tsx';
import MaRRSResearch from './pages/MaRRSResearch.tsx';
import Home from './pages/Home.tsx'; // Home component
import NotFound from './pages/NotFound.tsx'; // NotFound component

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
      <Flex as="nav" bg="teal.500" p="4" align="center" gap="4">
        <Link as={RouterLink} to="/" color="white" fontWeight="bold">
        <IconButton
          as="a"
          aria-label="Home"
          icon={<FaHome />}
          colorScheme="teal"
          variant="solid"
        />
        </Link>
        
        <Flex flex="1" />

        <Link as={RouterLink} to="/highschool" color="white">Highschool</Link>
        <Link as={RouterLink} to="/duke-robotics" color="white">Duke Robotics Club</Link>
        <Link as={RouterLink} to="/head-clamp" color="white">Head Clamp</Link>
        <Link as={RouterLink} to="/marrs-research" color="white">MaRRS Research</Link>
        
        <Flex flex="1" />
        
        {/* LinkedIn Icon */}
        <IconButton
          as="a"
          href="https://www.linkedin.com/in/saagar-arya-261341216/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          icon={<FaLinkedin />}
          colorScheme="teal"
          variant="solid"
        />

        {/* Email Icon */}
        <IconButton
          aria-label="Copy Email"
          icon={<FaEnvelope />}
          colorScheme="teal"
          variant="solid"
          onClick={handleCopyEmail}
        />
      </Flex>

      <Box p="4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/highschool/*" element={<Highschool />} />
          <Route path="/duke-robotics" element={<DukeRobotics />} />
          <Route path="/head-clamp" element={<HeadClamp />} />
          <Route path="/marrs-research" element={<MaRRSResearch />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
