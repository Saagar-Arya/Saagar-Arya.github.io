import ProjectPage from '../components/ProjectPage';
import { galleryImages } from '../data/gallery';

const images = galleryImages([
  'lidar-point-cloud-campus.png',
  'ice-floe-segmentation-overlay.jpg',
  'lidar-survey-rover.jpg',
  'rover-survey-path.png',
  'seals-on-ice-aerial.jpg',
  'seal-detections-aerial.jpg',
  'seals-on-ice-crop-color.jpg',
  'seals-on-ice-crop-inverted.jpg',
]);

const MaRRSResearch = () => (
  <ProjectPage
    title="MaRRS Research"
    description="The Marine Robotics and Remote Sensing Lab uses drone imagery to monitor seal populations and their habitats. I trained segmentation models to detect seals and analyze their habitat preferences about environmental variables like ice density (90% accuracy). Another project involved mounting an autonomous rover with a Lidar sensor to create accurate 3D replicas (digital twins) of surveyed areas."
    images={images}
  />
);

export default MaRRSResearch;
