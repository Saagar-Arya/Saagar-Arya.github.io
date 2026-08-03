import ProjectPage from '../components/ProjectPage';
import { galleryImages } from '../data/gallery';

const images = galleryImages([
  'robosub-auv-assembled.jpg',
  'mini-auv-cad-render.png',
  'torpedo-launcher-mounted.jpg',
  'hydrophone-amplifier-schematic.png',
  'hull-cfd-streamlines.png',
  'hull-cfd-velocity-field.png',
  'oogway-auv-cad-assembly.png',
  'oogway-auv-blender-model.png',
  'drc-honeycomb-top-plate-cad.png',
  'electronics-capsule-cad.png',
  'titanium-top-plate-installed.jpg',
]);

const DukeRobotics = () => (
  <ProjectPage
    title="Duke Robotics Club"
    description="As part of the Duke Underwater Robotics Club, I contributed to the development of an autonomous underwater robot designed to maneuver and complete various tasks. My role involved fabricating a titanium top plate to secure key components, modular sensor mounts, and a spring loaded torpedo system. My work contributed to our 8th place finish at RoboSub 2024."
    images={images}
  />
);

export default DukeRobotics;
