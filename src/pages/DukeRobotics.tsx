import ProjectPage from '../components/ProjectPage';
import { galleryImages } from '../data/gallery';
import { dukeRoboticsPublications } from '../data/publications';

// Newest work first: the 2026 vehicles and the acoustics system, then the
// earlier Oogway build and fabrication work.
const images = galleryImages([
  'crush-auv-2026.jpg',
  'oogway-auv-2026.jpg',
  'oogway-auv-in-pool.jpg',
  'hydrophone-array-pcb-layout.png',
  'hydrophone-signal-processing-toa.png',
  'robosub-auv-assembled.jpg',
  'oogway-auv-render.png',
  'oogway-auv-cad-assembly.png',
  'mini-auv-cad-render.png',
  'torpedo-launcher-mounted.jpg',
  'titanium-top-plate-installed.jpg',
  'electronics-capsule-cad.png',
  'drc-honeycomb-top-plate-cad.png',
  'hull-cfd-streamlines.png',
  'hull-cfd-velocity-field.png',
]);

const DukeRobotics = () => (
  <ProjectPage
    title="Duke Robotics Club"
    description="I am President of the Duke Robotics Club, leading a 40-member team that builds autonomous underwater vehicles for the international RoboSub competition. I oversee integration across the electrical, mechanical, and software subteams, and led the design and build of our second AUV, Crush, which is more compact and hydrodynamic than the first. I also built a four-channel hydrophone array on a custom PCB, pairing Butterworth bandpass filtering and time-of-arrival analysis with a Random Forest classifier that resolves pinger direction and distance. At RoboSub 2025 we placed 7th of 56 teams, the club's first finals appearance."
    images={images}
    publications={dukeRoboticsPublications}
  />
);

export default DukeRobotics;
