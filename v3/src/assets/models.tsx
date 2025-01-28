import { JSX } from 'react';

export type ProjectDataModel = {
  name: string;
  desc: string;
  url: string;
  tech: string[];
};

export type SkillDataModel = {
  name: string;
  icon: string;
};

export type ExperienceDataModel = {
  year: number;
  title: string;
  education: string;
  experience: string[];
};

export type AboutDataModel = {
  title: string;
  amount: number;
  icon: JSX.Element;
};
