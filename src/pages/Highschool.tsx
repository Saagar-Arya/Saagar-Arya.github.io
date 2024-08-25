import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link as RouterLink, Route, Routes } from 'react-router-dom';
import HighschoolSubpage1 from './HighschoolSubpage1';
import HighschoolSubpage2 from './HighschoolSubpage2';
import HighschoolSubpage3 from './HighschoolSubpage3';

function Highschool() {
  return (
    <div>
      <Breadcrumb spacing="8px" separator=">">
        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to="/highschool/subpage1">Subpage 1</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to="/highschool/subpage2">Subpage 2</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to="/highschool/subpage3">Subpage 3</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Routes>
        <Route path="subpage1" element={<HighschoolSubpage1 />} />
        <Route path="subpage2" element={<HighschoolSubpage2 />} />
        <Route path="subpage3" element={<HighschoolSubpage3 />} />
      </Routes>
    </div>
  );
}

export default Highschool;
