import ProjectPage from '../components/ProjectPage';
import { galleryImages } from '../data/gallery';
import { marrsPublications } from '../data/publications';

const images = galleryImages([
  'ice-floe-segmentation-overlay.jpg',
  'seal-detections-aerial.jpg',
  'seals-on-ice-aerial.jpg',
  'seals-on-ice-crop-color.jpg',
  'seals-on-ice-crop-inverted.jpg',
  'lidar-point-cloud-campus.png',
  'lidar-survey-rover.jpg',
  'rover-survey-path.png',
]);

const MaRRSResearch = () => (
  <ProjectPage
    title="MaRRS Research"
    description="At Duke's Marine Robotics and Remote Sensing Lab I work on automated wildlife monitoring from drone imagery. I applied YOLOv8 models to detect seals in aerial surveys of Glacier Bay National Park, using human-in-the-loop active learning with confidence thresholding to improve both dataset quality and detection performance. I also implemented a LiDAR system on an autonomous rover to help generate digital twins of terrain. I am a co-author on two published papers with a third in progress."
    images={images}
    publications={marrsPublications}
  />
);

export default MaRRSResearch;
