import { ProjectDataModel, SkillDataModel, ExperienceDataModel, AboutDataModel } from "./models";

// Hero
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import FacebookCircleLineIcon from "remixicon-react/FacebookCircleLineIcon";
import DribbbleLineIcon from "remixicon-react/DribbbleLineIcon";
import YoutubeLineIcon from "remixicon-react/YoutubeLineIcon";
import GithubLineIcon from "remixicon-react/GithubLineIcon";

/* eslint-disable react/jsx-key */
export const heroIcons = [
  <InstagramLineIcon />,
  <FacebookCircleLineIcon />,
  <DribbbleLineIcon />,
  <YoutubeLineIcon />,
  <GithubLineIcon />,
];

// About Me
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import Projector2LineIcon from "remixicon-react/Projector2LineIcon";
import GroupLineIcon from "remixicon-react/GroupLineIcon";
import AwardFillIcon from "remixicon-react/AwardFillIcon";

export const aboutData: AboutDataModel[] = [
  {
    title: "Github Repos",
    amount: 123,
    icon: <GithubFillIcon />,
  },
  {
    title: "Successful Projects",
    amount: 123,
    icon: <Projector2LineIcon />,
  },
  {
    title: "Satisfied clients",
    amount: 123,
    icon: <GroupLineIcon />,
  },
  {
    title: "Awards and Recognition",
    amount: 123,
    icon: <AwardFillIcon />,
  },
];

import DownloadLineIcon from "remixicon-react/DownloadLineIcon";
import ArrowLeftSFillIcon from "remixicon-react/ArrowLeftSFillIcon";

export const downloadIcon = <DownloadLineIcon />;
export const arrowLeftIcon = <ArrowLeftSFillIcon />;

export const aboutText: string =
  " Hey, I'm Jason, a fullstack web developer. I love tackling all elements of web development and constantly learning new skills in these areas. I've coded in many popular languages such as HTML, CSS, JavaScript, React, Angular, NextJS, .Net(C#)... to build responsive websites, functional desktop applications, and well designed phone apps. I'm a great learner and pride myself on my creativity and problem solving skills.";
// End of About Me

// Experience
export const experienceData: ExperienceDataModel[] = [
  {
    year: 1,
    title: "Foundation and Basics",
    education: "Here are the details about this education!",
    experience: ["Experience 1", "Experience 2"],
  },
  {
    year: 2,
    title: "Advanced Learning and Early Experience",
    education: "Here are the details about this education!",
    experience: ["Experience 1", "Experience 2"],
  },
  {
    year: 3,
    title: "Specialized Education and Real-World Application",
    education: "Here are the details about this education!",
    experience: ["Experience 1", "Experience 2"],
  },
  {
    year: 4,
    title: "Building Expertise and Expanding Skills",
    education: "Here are the details about this education!",
    experience: ["Experience 1", "Experience 2"],
  },
  {
    year: 5,
    title: "Mastery and Leadership",
    education: "Here are the details about this education!",
    experience: ["Experience 1", "Experience 2"],
  },
];

// End of Experience

// Skills
export const skillsData: SkillDataModel[] = [
  {
    name: "CSS",
    icon: "/skills/css.png",
  },
  {
    name: "JavaScript",
    icon: "/skills/js.png",
  },
  {
    name: "TypeScript",
    icon: "/skills/ts.png",
  },
];
// End of Skills

// Reviews
import StarFillIcon from "remixicon-react/StarFillIcon";
import StarHalfLineIcon from "remixicon-react/StarHalfLineIcon";
import ArrowLeftSLineIcon from "remixicon-react/ArrowLeftSLineIcon";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";

export const starIcons = [<StarFillIcon />, <StarHalfLineIcon />];
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />];

export const reviewsData = [
  {
    image: "/reviews/client-1.png",
    name: "Dave Smith - Tech Lead",
    comment: "Here is the comment and review from Dave Smith",
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    image: "/reviews/client-2.png",
    name: "Michelle Mcnamara - Sales Manager",
    comment: "Here is the comment and review from Michelle",
    stars: [1, 1, 1, 1, 0],
  },
];
// End of Reviews

// Projects
export const projectsData: ProjectDataModel[] = [
  {
    name: "Developerjay.com",
    desc: "My developer portfolio",
    url: "/projects/image-1.jpg",
    tech: ["NextJS", "HTML"],
  },
  {
    name: "Anotherwebsite.net",
    desc: "Here are the details for the next project.",
    url: "/projects/image-2.jpg",
    tech: ["Javascript"],
  },
  {
    name: "A 3rd website",
    desc: "Here are the cool details for the 3rd project in this list.",
    url: "/projects/image-3.jpg",
    tech: ["CSS"],
  },
];

export const projectsButton: string[] = ["All", "HTML", "CSS", "JavaScript", "ReactJS"];
// End of Projects
