export type Project = {
  id: string
  number: string
  title: string
  category: 'Applied ML' | 'Software'
  organization: string
  role: string
  period: string
  ongoing: boolean
  summary: string
  contribution: string
  technologies: string[]
  codeUrl?: string
  details: { label: string; text: string }[]
}

export const profile = {
  name: 'Chuanling Yu',
  email: 'chuanyuling@gmail.com',
  github: 'https://github.com/chuanlingyu',
  linkedin: 'https://www.linkedin.com/in/chuanling-yu',
  resume: '/chuanling-yu-resume.pdf',
}

// Factual sources and accuracy decisions are documented in CONTENT_SOURCES.md.
export const projects: Project[] = [
  {
    id: 'grade-predictor', number: '01', title: 'Grade Predictor', category: 'Applied ML',
    organization: 'ACM SIGAIDA', role: 'Team Lead', period: 'Feb – May 2026', ongoing: false,
    summary: 'From historical course data to more informed academic planning.',
    contribution: 'I led a four-person team and worked on data preparation, feature engineering, model training and evaluation, and integrating predictions into the web app.',
    technologies: ['Python', 'pandas', 'scikit-learn'],
    codeUrl: 'https://github.com/chuanlingyu/grade-predictor',
    details: [
      { label: 'The team’s project', text: 'An ML web application for estimating performance in planned UIUC courses using historical course data and student information.' },
      { label: 'My work', text: 'I cleaned and transformed data through GPA conversion, instructor aggregation, outlier filtering, and categorical encoding, then trained and evaluated Random Forest and Gradient Boosting regressors.' },
      { label: 'A result & a lesson', text: 'The overall dataset contained roughly 76,000 course records. The team’s course-GPA model achieved 0.159 MAE on 15,227 held-out samples. We reframed student predictions around performance relative to a student’s usual baseline. These are project evaluation results, not a guarantee of future grades.' },
    ],
  },
  {
    id: 'skyline-3', number: '02', title: 'Skyline 3', category: 'Software',
    organization: 'UIUC team project', role: 'Team Member', period: 'Sep 2026 – present', ongoing: true,
    summary: 'Exploring how road networks can be represented and designed.',
    contribution: 'I’m working on FastAPI endpoint design for road-network nodes and edges, response schemas, and the organization of routers and services.',
    technologies: ['React', 'TypeScript', 'FastAPI'],
    details: [
      { label: 'The team’s direction', text: 'An interactive traffic-network design tool involving map data, graph representations, a React/Vite frontend, and a FastAPI backend.' },
      {
        label: 'My current work',
        text: 'My work includes graph and GeoJSON representations of road intersections and segments. The repository contains node and edge API implementations, while the map currently loads bundled JSON. Frontend/API integration and runtime verification remain pending.'
      },
      { label: 'Current team status', text: 'Map visualization currently uses bundled JSON. Frontend/API integration, integrated traffic simulation, and optimization remain pending.' },
    ],
  },
  {
    id: 'low-vision-navigation', number: '03', title: 'Low-Vision Navigation', category: 'Applied ML',
    organization: 'ACM SIGAIDA', role: 'Perception Team Member', period: 'Sep 2026 – present', ongoing: true,
    summary: 'An accessibility project, starting with C++ inference.',
    contribution: 'I configured a CMake-based C++ project with ONNX Runtime and developed a prototype for session setup, tensor preparation, inference, and output inspection.',
    technologies: ['C++', 'CMake', 'ONNX Runtime'],
    details: [
      { label: 'The team’s goal', text: 'Help people with low vision navigate their surroundings, including obstacles.' },
      { label: 'My demonstrated work', text: 'A C++ machine-learning inference prototype that initializes model sessions, prepares input tensors, runs inference calls, and inspects output tensors.' },
      { label: 'Current scope', text: 'Working obstacle navigation, a complete perception pipeline, and production integration have not been verified. My broader computer-vision and OpenCV experience is still developing.' },
    ],
  },
  {
    id: 'digital-diary', number: '04', title: 'Digital Diary', category: 'Software',
    organization: 'ACM SIGCHI', role: 'Team Member', period: 'Oct 2025 – May 2026', ongoing: false,
    summary: 'Making space for personal reflection, with control over sharing.',
    contribution: 'I contributed friend management, blocking, and journal-entry visibility controls, including authorization logic for private, friends-only, and public entries.',
    technologies: ['Privacy', 'Authorization', 'HCI'],
    details: [
      { label: 'The team’s project', text: 'An AI-enhanced journaling application developed through ACM SIGCHI.' },
      { label: 'My contribution', text: 'Social relationships and privacy functionality: adding and removing friends, blocking users, managing entry visibility, and checking authorization. My work was part of the larger application; I did not implement its full AI system.' },
    ],
  },
  {
    id: 'plantroute', number: '05', title: 'PlantRoute', category: 'Software',
    organization: 'HackIllinois', role: 'Team Member', period: 'Feb 2026', ongoing: false,
    summary: 'Personalized travel planning with sustainability in view.',
    contribution: 'I contributed personalized activity recommendations, attraction ranking based on traveler preferences, and carbon-impact displays during hackathon prototyping.',
    technologies: ['Recommendations', 'AI-assisted prototyping'],
    details: [
      { label: 'The team’s project', text: 'An AI-enhanced sustainable travel planner generating multi-day itineraries and comparing travel options using estimated environmental impact.' },
      { label: 'My contribution', text: 'Recommendation functionality, preference-based attraction ranking, and carbon-impact displays. I used AI coding tools extensively for rapid implementation and debugging; I did not own the entire itinerary-generation or AI system.' },
    ],
  },
]

export const interests = [
  { number: '01', title: 'Reliable & useful AI', text: 'Applied ML, AI agents, and the role of formal methods in building more reliable systems.' },
  { number: '02', title: 'Software that connects', text: 'Software systems and the engineering work that turns models and data into useful applications.' },
  { number: '03', title: 'Computing for people', text: 'Human–computer interaction, computer vision, and technology shaped by the people using it.' },
]
