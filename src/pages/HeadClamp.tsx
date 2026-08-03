import ProjectPage from '../components/ProjectPage';
import { galleryImages } from '../data/gallery';

const images = galleryImages([
  'head-clamp-instrumented-rig.jpg',
  'sensor-pin-load-test.jpg',
  'head-clamp-pressure-dashboard.png',
  'strain-gauge-pin-prototype.jpg',
  'head-clamp-esp32-pcb.jpg',
  'sensing-pin-closeup.jpg',
]);

const HeadClamp = () => (
  <ProjectPage
    title="Head Clamp"
    description="The head clamp is a tool used in neurosurgery to immobilize the patient’s head during procedures. Traditionally, it provides stable fixation but offers no digital means of monitoring the pressure applied. Our updated design preserves the original pins by relocating the sensing mechanism off the clamp itself. Instead, a retrofitted force washer is integrated into the clamp assembly. This washer measures the applied forces and transmits data through a custom interface. The system provides surgeons with real-time feedback during setup and continuous pressure monitoring throughout the procedure. Patent pending."
    images={images}
  />
);

export default HeadClamp;
