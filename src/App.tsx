import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink, Route, Routes } from 'react-router-dom';
import Highschool from './pages/Highschool.tsx';
import DukeRobotics from './pages/DukeRobotics.tsx';
import HeadClamp from './pages/HeadClamp.tsx';
import MaRRSResearch from './pages/MaRRSResearch.tsx';

function App() {
  return (
    <Box>
      <Flex as="nav" bg="teal.500" p="4" justify="space-between" align="center">
        {/* Home Button */}
        <Link as={RouterLink} to="/" color="white" fontWeight="bold">
          Home
        </Link>
        
        {/* Other Nav Items */}
        <Flex gap="4">
          <Link as={RouterLink} to="/highschool" color="white">Highschool</Link>
          <Link as={RouterLink} to="/duke-robotics" color="white">Duke Robotics Club</Link>
          <Link as={RouterLink} to="/head-clamp" color="white">Head Clamp</Link>
          <Link as={RouterLink} to="/marrs-research" color="white">MaRRS Research</Link>
        </Flex>
      </Flex>

      <Box p="4">
        <Routes>
          <Route path="/highschool/*" element={<Highschool />} />
          <Route path="/duke-robotics" element={<DukeRobotics />} />
          <Route path="/head-clamp" element={<HeadClamp />} />
          <Route path="/marrs-research" element={<MaRRSResearch />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
