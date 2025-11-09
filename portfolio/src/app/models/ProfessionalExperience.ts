export interface ProfessionalExperience {
  start: string;
  end: string;
  company: Company;
  job: Job;
  tags: string[];
}

interface Company {
  name: string;
  link: string;
  productLink: string;
  productLinkDescription: string;
}

interface Job {
  position: string;
  description: string;
}