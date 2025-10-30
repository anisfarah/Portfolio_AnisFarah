export const PERSONAL_INFO = {
  name: 'Anis FARAH',
  title: 'Data Scientist & AI Engineer',
  about: `Data Scientist specializing in Machine Learning and AI, with hands-on experience developing production-ready solutions in R&D and business environments across France and Tunisia. Passionate about solving complex real-world problems through data-driven solutions, from experimental research to scalable deployments.`,
  contact: {
    email: 'anisfarah2014@gmail.com',
    linkedin: 'https://www.linkedin.com/in/anis-farah-89537216b',
    github: 'https://github.com/anisfarah',
    portfolio: '#',
    phone: '+33 7 51 18 00 23',
    location: 'Cergy, France',
  }
};

export const WORK_EXPERIENCE = [
  {
    company: 'Caplogy Innovation',
    position: 'Data Science Intern (Final Year Project)',
    positionFr: 'Data Science (Projet de Fin d\'Études)',
    period: 'Apr 2025 - Sep 2025',
    start: '2025-04-01',
    end: '2025-09-01',
    logo: '/caplogy_logo.png',
    website: 'https://caplogy-innovation.com',
    location: 'Vélizy-Villacoublay, France',
    responsibilities: [
      'Contributed to FORTRAJ: detection, tracking and trajectory prediction for autonomous drones in fisheye environments.',
      'Collected and preprocessed fisheye data including camera calibration and distortion handling.',
      'Designed and trained computer vision models and deep neural networks for real-time tracking.',
      'Optimized prediction module for accuracy and latency in dynamic environments.',
      'Evaluated models on real-world datasets and compared to baselines.',
      'Integrated the system into internal software pipeline with the R&D team.'
    ],
    responsibilitiesFr: [
      'Contribution à FORTRAJ : détection, suivi et prédiction de trajectoire pour drones autonomes en environnement fisheye.',
      'Collecte et prétraitement de données fisheye (calibration caméra, correction de distorsion).',
      'Conception et entraînement de modèles de vision par ordinateur et réseaux profonds pour le suivi temps réel.',
      'Optimisation du module de prédiction pour améliorer la précision et la latence en environnements dynamiques.',
      'Évaluation des modèles sur des jeux de données réels et comparaison avec des baselines.',
      'Intégration du système dans la chaîne logicielle interne avec l’équipe R&D.'
    ],
    tech: ['Python', 'PyTorch', 'Deep Learning', 'Computer Vision', 'OpenCV', 'TensorFlow', 'Git/GitLab'],
    video: '/caplogy-vid-demo.mp4',
    images: [],
    attestation: '/Attestation de fin stage_Anis FARAH_Caplogy.pdf'
  },
  {
    company: 'Swiss Premium Negoce',
    position: 'Data Science Intern',
    positionFr: 'Data Science',
    period: 'Jun 2024 - Aug 2024',
    start: '2024-06-01',
    end: '2024-08-01',
    logo: '/spn_logo.png',
    website: 'https://www.swisspremiumnegoce.com',
    location: 'Tunis, Tunisia',
    locationFr: 'Tunis, Tunisie',
    responsibilities: [
      'Built automatic information extraction from images by combining OCR and LLMs.',
      'Designed the end-to-end pipeline: segmentation, denoising and text extraction.',
      'Implemented a FastAPI backend to orchestrate AI processing and database operations.',
      'Integrated with the company Next.js app and MongoDB for automated display and tracking.'
    ],
    responsibilitiesFr: [
      'Développement d’un module d’extraction automatique d’informations à partir d’images combinant OCR et LLMs.',
      'Conception et optimisation de la pipeline: segmentation, réduction de bruit, extraction de texte.',
      'Mise en place d’un backend FastAPI pour orchestrer les traitements IA et la base de données.',
      'Intégration dans l’application Next.js de l’entreprise avec suivi automatisé des données extraites dans MongoDB.'
    ],
    tech: ['Python', 'MongoDB', 'NextJS', 'FastAPI', 'OCR', 'Deep Learning', 'LLMs', 'Git/GitLab', 'Computer Vision', 'APIs'],
    images: [
      '/spn-demo-add-penalty.png',
      '/spn-demo-add-penalty(step2).png',
      '/spn-demo-penalties-list.png',
      '/spn-demo-test-resnet(image-pre).png'
    ],
    attestation: '/Attestation-SPN.pdf'
  },
  {
    company: 'BTS Bank',
    position: 'Data Science Intern',
    positionFr: 'Data Science',
    period: 'Feb 2022 - Jun 2022',
    start: '2022-02-01',
    end: '2022-06-01',
    logo: '/bts_logo.png',
    website: 'https://www.bts.com.tn',
    location: 'Tunis, Tunisia',
    locationFr: 'Tunis, Tunisie',
    responsibilities: [
      'Developed a credit scoring model from historical data.',
      'Performed analysis, preparation and feature selection for model training.',
      'Evaluated performance and tuned hyperparameters.',
      'Deployed predictions via an internal Flask web app and documented results.'
    ],
    responsibilitiesFr: [
      'Développement d’un modèle de scoring de crédit à partir de données historiques.',
      'Analyse, préparation des données et sélection de caractéristiques pour l’entraînement.',
      'Évaluation des performances et optimisation des hyperparamètres.',
      'Déploiement via une application web interne Flask et rédaction de la documentation.'
    ],
    tech: ['Python', 'Machine Learning', 'Flask', 'MongoDB', 'Classification', 'Scikit-learn', 'Pandas', 'NumPy', 'Git/GitHub'],
    videoUrl: 'https://www.loom.com/share/0f37ab7bc0f14f139126d57f93434927',
    attestation: '/Attestation_stage_bts.pdf'
  }
];

export const SKILLS = {
  ai: [
    { name: 'Machine/Deep Learning', icon: 'ai' },
    { name: 'Computer Vision', icon: 'opencv' },
    { name: 'LLMs', icon: 'openai' },
    { name: 'RAG', icon: 'rag' },
    { name: 'NLP', icon: 'ai' },
    { name: 'PyTorch', icon: 'pytorch' },
    { name: 'TensorFlow', icon: 'tensorflow' },
    { name: 'Hugging Face', icon: 'huggingface' },
    { name: 'Scikit-learn', icon: 'sklearn' }
  ],
  backend: [
    { name: 'FastAPI', icon: 'python' },
    { name: 'Flask', icon: 'python' },
    { name: 'Python', icon: 'python' },
    { name: '.NET', icon: 'dotnet' },
    { name: 'Java', icon: 'java' },
    { name: 'REST APIs', icon: 'api' }
  ],
  frontend: [
    { name: 'Next.js', icon: 'js' },
    { name: 'Angular', icon: 'angular' },
    { name: 'TypeScript', icon: 'ts' },
    { name: 'JavaScript', icon: 'js' },
    { name: 'HTML', icon: 'html' },
    { name: 'CSS', icon: 'css' }
  ],
  databases: [
    { name: 'MongoDB', icon: 'mongo' },
    { name: 'PostgreSQL', icon: 'postgres' },
    { name: 'MySQL', icon: 'mysql' }
  ],
  tools: [
    { name: 'Git/GitLab', icon: 'git' },
    { name: 'Docker', icon: 'docker' },
    { name: 'AWS', icon: 'aws' },
    { name: 'MLflow', icon: 'mlflow' }
  ]
};

export const EDUCATION = [
  {
    name: 'IMT Nord Europe',
    logo: '/imt-logo-noir.png',
    website: 'https://imt-nord-europe.fr',
    type: { en: 'Exchange Program', fr: "Programme d'échange" },
    period: '2024 - 2025',
    location: { en: 'Lille, France', fr: 'Lille, France' }
  },
  {
    name: 'ESPRIT',
    logo: '/esprit_logo.png',
    website: 'https://www.esprit.tn',
    type: { en: "Engineering Degree", fr: "Diplôme d'ingénieur" },
    period: '2022 - 2025',
    location: { en: 'Tunis, Tunisia', fr: 'Tunis, Tunisie' }
  },
  {
    name: 'ISET Charguia',
    logo: '/iset_logo.png',
    website: '',
    type: { en: "Bachelor's Degree", fr: 'Licence' },
    period: '2019 - 2022',
    location: { en: 'Tunis, Tunisia', fr: 'Tunis, Tunisie' }
  }
];

export const PROJECTS = [
  {
    id: 'motion-to-text',
    title: 'Generative AI – Human Motion to Text',
    description: 'Sequence-to-sequence model with attention to describe 3D human motion sequences for Kaggle challenge.',
    descriptionFr: 'Modèle séquence-à-séquence avec mécanisme d\'attention pour décrire des séquences de mouvement humain 3D pour le challenge Kaggle.',
    image: '/person_sit_pose.gif',
    tags: ['Python', 'NLP', 'Deep Learning', 'PyTorch', 'Transformers'],
    demoUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 'telemedicine-detection',
    title: 'Object Detection in Remote Sensing Images',
    description: 'YOLO/Mask R-CNN pipelines for multi-class detection on remote sensing imagery.',
    descriptionFr: 'Détection d\'objets dans les images de télédétection (YOLO/Mask R-CNN) pour la détection multi‑classes.',
    image: '/objet-detection.png',
    tags: ['Python', 'PyTorch', 'YOLO', 'Object Detection'],
    demoUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 'intrusion-detection',
    title: 'Intrusion Detection System',
    description: 'NSL-KDD based anomaly detection using ensemble models combining RF and Neural Networks.',
    descriptionFr: 'Détection d\'anomalies basée sur NSL-KDD utilisant des modèles d\'ensemble combinant Random Forest et réseaux de neurones.',
    image: '/ids.jpeg',
    tags: ['Python', 'Machine Learning', 'Cybersecurity'],
    demoUrl: '#',
    sourceUrl: '#',
  }
];

export const CERTIFICATIONS = [
  {
    title: 'Engineering Degree in Computer Engineering',
    issuer: 'National Engineering School of Carthage - ENICarthage',
    date: 'Sep 2022 - Jul 2025',
    logo: 'https://via.placeholder.com/100',
    credential: 'Computer Engineering'
  },
  {
    title: 'Bachelor in Computer Science: Data Analysis and Big Data',
    issuer: 'Higher Institute of Arts and Multimedia Manouba - ISAMM',
    date: 'Sep 2019 - Jun 2022',
    logo: 'https://via.placeholder.com/100',
    credential: 'Data Analysis and Big Data'
  }
];

export const COMMUNITY = [
  {
    organization: 'AI & Machine Learning Community',
    role: 'Active Member',
    period: '2024 - Present',
    logo: 'https://via.placeholder.com/100',
    events: [
      {
        title: 'LLM Integration Workshop',
        date: 'Dec 2024',
        description: 'Shared experience with Microsoft Semantic Kernel and AI orchestration systems.'
      }
    ]
  }
]; 