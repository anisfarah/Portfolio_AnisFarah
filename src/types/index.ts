export interface PersonalInfo {
  name: string;
  title: string;
  about: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
}

export interface WorkExperience {
  company: string;
  position: string;
  period: string;
  logo: string;
  responsibilities: string[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillSet {
  frontend: Skill[];
  backend: Skill[];
  databases: Skill[];
  testing: Skill[];
  tools: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  sourceUrl: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  logo: string;
  credential: string;
}

export interface CommunityEvent {
  title: string;
  date: string;
  description: string;
}

export interface CommunityInvolvement {
  organization: string;
  role: string;
  period: string;
  logo: string;
  events: CommunityEvent[];
} 