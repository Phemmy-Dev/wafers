export type NavLinkId = 'home' | 'who-are-we' | 'publications' | 'projects' | 'featured-stories' | 'knowledge-translation-centre';

export type ProjectSlug = 'jigsaw-africa' | 'circles-of-joy' | 'reducing-burnout' | 'pam-care';

export interface NavItem {
  id: NavLinkId;
  label: string;
  href: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journalOrConference: string;
  year: number;
  month?: string;
  doi?: string;
  abstract: string;
  tags: string[];
  pdfUrl?: string;
  openAccess?: boolean;
}

export interface Project {
  id: string;
  title: string;
  code: string;
  leadResearcher: string;
  division: string;
  status: 'Active' | 'Completed' | 'Upcoming';
  period: string;
  fundingBody?: string;
  description: string;
  keyOutcomes?: string[];
  tags: string[];
  featuredImage?: string;
}

export type StoryCategory =
  | 'Webinars & Events'
  | 'Research Breakthrough'
  | 'Field Dispatches'
  | 'Policy & Impact'
  | 'Institute News';

export interface StorySpeaker {
  name: string;
  role: string;
  affiliation: string;
  type: 'Speaker' | 'Panelist';
}

export interface StoryEventDetails {
  dates: string[];
  time: string;
  platform: string;
  registrationUrl?: string;
}

export interface StoryCoHost {
  name: string;
  shortName: string;
}

export interface StoryContactInfo {
  website?: string;
  twitter?: string;
  email?: string;
}

// Structured identically to how Sanity CMS documents will be queried later
export interface FeaturedStory {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: StoryCategory;
  publishedAt: string;
  readingTime: string;
  author: {
    name: string;
    role: string;
    avatarUrl?: string;
    profileUrl?: string;
  };
  excerpt: string;
  coverImage?: string;
  coverImagePlaceholder?: string;
  content?: string[];
  eventDetails?: StoryEventDetails;
  keyObjectives?: string[];
  speakers?: StorySpeaker[];
  coHosts?: StoryCoHost[];
  contactInfo?: StoryContactInfo;
  originalUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  division: string;
  credentials: string;
  bio: string;
  specializations: string[];
  email?: string;
  photoUrl?: string;
}
