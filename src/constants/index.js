import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Hello, I am a Computer Science and Engineering Undergraduate student at Sardar Vallabhbhai National Institute of Technology, Surat.
My field of technical interests includes Web Development, creating projects in python excites me, Data Structures and Algorithms motivate me to upskill in Competitive Programming.`;

export const ABOUT_TEXT = `I am familiar with languages C, C++, Python, C#, and JavaScript.
Also, I have a profound knowledge of Frontend Development skills and know ReactJS and NodeJS, plus I have good hands-on using Unity Game Engine and creating AR applications.
Along with the technical likings, I am much extrovert person, reading, and sports always have been my hobbies, and I like exploring new food and places.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "The Cafe's Website",
    image: project1,
    description:
      "A fully functional cafe's website with features like attractive UI, online seat booking, activity countdown, and user authentication.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
  },
  {
    title: "Path Finder Robot",
    image: project2,
    description:
      "A Path Finding Robot that finds the path out of a given maze using the Wall Following Algorithm",
    technologies: ["ArduinoIDE", "Gazebo", "Autodesk Thinkercad"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "ReactJS", "TailwindCSS"],
  },
  {
    title: "Furnish and Card Reader - Augmented Reality",
    image: project4,
    description:
      "Android Augmented Reality Applications designed for two purposes - 1) To read the identity card and establish the professional connection. 2) To get determine which furniture will set in the given environment.",
    technologies: ["Unity Game Engine", "C#"],
  },
];

export const CONTACT = {
  address: "7/A Swi Park Soc., Ranna Park, Ahmedabad, Gujarat, India-380061 ",
  phoneNo: "+91 8866182303 ",
  email: "tanishpanchal2311@gmail.com",
};
