import { JSX } from "react";

export type HeroIconDataModel = {
  title: string;
  icon: JSX.Element;
  url: string;
};

export type ProjectDataModel = {
  name: string;
  desc: string;
  url: string;
  tech: string[];
};

export enum SkillLevel {
  Basic = "basic",
  Intermediate = "intermediate",
  Advanced = "advanced",
}

export type SkillDataModel = {
  name: string;
  icon: string;
  exp: number;
  level: SkillLevel
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

export type PricingPlanModel = {
  title: string;
  pricing: string;
  features: string[];
  recommended: string;
};

export type QuestionDataModel = {
  question: string;
  answer: string;
};

export type NavBarDataModel = {
  id: string;
  name: string;
  icon: JSX.Element;
};
