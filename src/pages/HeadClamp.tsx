import ProjectPage from '../components/ProjectPage';
import { galleryImages } from '../data/gallery';
import { headClampPublications } from '../data/publications';

const images = galleryImages([
  'head-clamp-v3-live-readout.jpg',
  'head-clamp-ui.png',
  'head-clamp-5-trials.png',
  'head-clamp-instrumented-rig.jpg',
  'head-clamp-amplification-near-pin.jpg',
  'head-clamp-skull-demo.png',
  'head-clamp-esp32-pcb.jpg',
  'sensor-pin-load-test.jpg',
  'strain-gauge-pin-prototype.jpg',
]);

const HeadClamp = () => (
  <ProjectPage
    title="Head Clamp"
    description="A skull clamp holds a patient's head rigid during brain surgery but gives the surgeon no digital reading of the force applied. Through Blue Skull Group LLC, the startup I co-founded, we built one. Rather than modifying the pins, we fabricated a load cell retrofit that fits existing clamps and maps deformation to calibrated force. Custom PCBs stream per-pin and overall readings over Bluetooth, giving live feedback during setup and continuous monitoring through the procedure. We are in discussions with medical device companies and pursuing FDA testing. Utility patent application filed 10/2025."
    images={images}
    publications={headClampPublications}
    downloads={[{ label: 'Scientific poster (PDF)', href: '/assets/head-clamp-dmd-poster.pdf' }]}
  />
);

export default HeadClamp;
