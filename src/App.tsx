import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink, Route, Routes } from 'react-router-dom';
import Highschool from './pages/Highschool.tsx';
import DukeRobotics from './pages/DukeRobotics.tsx';
import HeadClamp from './pages/HeadClamp.tsx';
import MaRRSResearch from './pages/MaRRSResearch.tsx';
import Home from './pages/Home.tsx'; // Home component
import NotFound from './pages/NotFound.tsx'; // NotFound component

function App() {
  return (
    <Box>
      <Flex as="nav" bg="teal.500" p="4" justify="space-between" align="center">
        <Link as={RouterLink} to="/" color="white" fontWeight="bold">
          Home
        </Link>
        <Flex gap="4">
          <Link as={RouterLink} to="/highschool" color="white">Highschool</Link>
          <Link as={RouterLink} to="/duke-robotics" color="white">Duke Robotics Club</Link>
          <Link as={RouterLink} to="/head-clamp" color="white">Head Clamp</Link>
          <Link as={RouterLink} to="/marrs-research" color="white">MaRRS Research</Link>
        </Flex>
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