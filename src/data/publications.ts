export type Publication = {
  title: string;
  venue: string;
  year: number;
  url: string;
  /** Co-authors as listed, abbreviated. Omitted for sole-authored work. */
  authors?: string;
};

export const dukeRoboticsPublications: Publication[] = [
  {
    title: "Technical Design Review of Duke Robotics Club's Oogway & Crush: AUVs for RoboSub 2026",
    venue: 'arXiv:2607.18075',
    year: 2026,
    url: 'https://arxiv.org/abs/2607.18075',
    authors: 'P. Zheng, S. Arya, H. Le, M. Chu, N. Ren, et al.',
  },
  {
    title: "Technical Design Review of Duke Robotics Club's Oogway: An AUV for RoboSub 2024",
    venue: 'arXiv:2410.09684',
    year: 2024,
    url: 'https://arxiv.org/abs/2410.09684',
    authors: 'W. Denton, M. Bryant, L. Chiavetta, V. Shah, S. Arya, et al.',
  },
];

export const headClampPublications: Publication[] = [
  {
    title: 'Developing a Digital System to Monitor Head Clamp Forces During Neurosurgery',
    venue: 'Frontiers in Biomedical Devices, V001T08A001',
    year: 2026,
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=cVxr6WgAAAAJ&citation_for_view=cVxr6WgAAAAJ:qjMakFHDy7sC',
    authors: 'A. Li, S. Arya, A. Brusoe, L. Chetkof, E. Johnson',
  },
];

export const marrsPublications: Publication[] = [
  {
    title: 'On Thin Ice: Towards Explainable Conservation Monitoring via Attribution and Perturbations',
    venue: 'arXiv:2510.21689',
    year: 2025,
    url: 'https://arxiv.org/abs/2510.21689',
    authors: 'J. Zhou, G. Aghakishiyeva, S. Arya, J. Dale, J. D. Poling, et al.',
  },
  {
    title: 'Photorealistic Inpainting for Perturbation-based Explanations in Ecological Monitoring',
    venue: 'arXiv:2510.03317',
    year: 2025,
    url: 'https://arxiv.org/abs/2510.03317',
    authors: 'G. Aghakishiyeva, J. Zhou, S. Arya, J. Dale, J. D. Poling, et al.',
  },
];

export const flutePublications: Publication[] = [
  {
    title: 'Woodwind musical instrument finger rest and a system including the same',
    venue: 'U.S. Utility Patent 11,587,538',
    year: 2023,
    url: 'https://patents.google.com/patent/US11587538B1/en',
  },
];

export const otherPublications: Publication[] = [
  {
    title: 'Long-Tailed Medical Image Classification',
    venue: 'arXiv:2607.23883',
    year: 2026,
    url: 'https://arxiv.org/abs/2607.23883',
    authors: 'N. Ren, S. Arya',
  },
];
