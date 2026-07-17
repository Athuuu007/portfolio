import {
  FaPython, FaJava, FaReact, FaGithub, FaBrain,
  FaRobot, FaDatabase, FaChartLine, FaCode, FaServer, FaCogs, FaUsers
} from 'react-icons/fa';
import {
  SiJavascript, SiTailwindcss, SiScikitlearn,
  SiTensorflow, SiFlask, SiHtml5, SiCss
} from 'react-icons/si';

export const personalInfo = {
  name: "Atharva Borsutkar",
  role: "AI & Machine Learning Engineer",
  subtitle: "Future AI Software Engineer | React Developer",
  tagline: "Building intelligent systems wrapped in premium UIs.",
  education: {
    degree: "Diploma in Artificial Intelligence & Machine Learning Engineering",
    institute: "Zeal Polytechnic, Pune, Maharashtra, India",
    graduationYear: "2026",
  },
  socials: {
    github: "https://github.com/AtharvaB11",
    linkedin: "https://linkedin.com/in/atharva-borsutkar",
    email: "mailto:[atharvaborsutkar7@gmail.com]",
    phone: "tel:+917757815655",
  },
};

export const aboutMeText =
  "As an AI & Machine Learning Engineering student at Zeal Polytechnic, I am profoundly driven by the intersection of intelligent algorithms and high-performance software architecture. My passion lies in web development, complex problem solving, and Python automation. I build systems that not only predict and analyze data with high statistical accuracy but are also enveloped in premium, highly responsive user interfaces. I thrive in environments that challenge my technical boundaries, constantly adapting to emerging frameworks to deliver scalable, real-world solutions.";

export const programmingSkills = [
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "C", icon: FaCode, color: "#A8B9CC" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React.js", icon: FaReact, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "SQL (Basic)", icon: FaDatabase, color: "#4479A1" },
  { name: "Git & GitHub", icon: FaGithub, color: "#ffffff" },
];

export const aiSkills = [
  { name: "Machine Learning", icon: FaBrain, color: "#00f6ff" },
  { name: "Prediction Models", icon: FaChartLine, color: "#d4af37" },
  { name: "Data Preprocessing", icon: FaCogs, color: "#00f6ff" },
  { name: "Model Evaluation", icon: FaChartLine, color: "#d4af37" },
  { name: "NumPy", icon: FaCode, color: "#4dabcf" },
  { name: "Pandas", icon: FaDatabase, color: "#e70488" },
  { name: "Scikit-Learn", icon: SiScikitlearn, color: "#f89a36" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#ff6f00" },
  { name: "Flask", icon: SiFlask, color: "#ffffff" },
];

export const softSkills = [
  "Leadership", "Fast Learner", "Communication",
  "Teamwork", "Creative Thinking", "Problem Solving",
  "Self-Motivated", "Adaptable",
];

export const languages = [
  { name: "Marathi", proficiency: 100 },
  { name: "Hindi", proficiency: 95 },
  { name: "English", proficiency: 95 },
  { name: "Basic Japanese", proficiency: 30 },
];

export const projects = [
  {
    title: "AI Cooking Assistant",
    description:
      "An intelligent recommendation system offering precise ingredient detection and recipe search functionalities, wrapped in a beautiful, highly responsive UI.",
    tags: ["Python", "React", "Flask", "Recommendation System"],
    icon: FaRobot,
    color: "#00f6ff",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "AI Voice Assistant (Jarvis)",
    description:
      "Advanced Python automation software. Executes voice commands, handles deep application control, and returns dynamic, context-aware AI responses.",
    tags: ["Python", "Automation", "Voice Commands", "AI"],
    icon: FaServer,
    color: "#d4af37",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Prediction Model System",
    description:
      "Comprehensive data analysis pipeline integrating sophisticated classification and regression algorithms to evaluate complex datasets with high accuracy.",
    tags: ["Machine Learning", "Classification", "Regression", "Scikit-Learn"],
    icon: FaChartLine,
    color: "#00f6ff",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Neural Network Visualizer",
    description:
      "Professional AI tool mapping neural inference patterns in real-time, allowing users to visualize activation layers and data flow across network topologies.",
    tags: ["AI", "React", "Canvas API", "Data Visualization"],
    icon: FaBrain,
    color: "#d4af37",
    demoLink: "#",
    githubLink: "#",
  },
];

export const services = [
  { title: "Machine Learning Models", icon: FaBrain, color: "#00f6ff" },
  { title: "Prediction Systems", icon: FaChartLine, color: "#d4af37" },
  { title: "React Websites", icon: FaReact, color: "#61DAFB" },
  { title: "Python Automation", icon: FaCogs, color: "#3776AB" },
  { title: "Flask APIs", icon: SiFlask, color: "#ffffff" },
  { title: "AI Applications", icon: FaRobot, color: "#d4af37" },
  { title: "Frontend Development", icon: FaCode, color: "#00f6ff" },
  { title: "Responsive Websites", icon: SiCss, color: "#1572B6" },
];

export const timeline = [
  {
    year: "2023",
    title: "Started Diploma",
    description:
      "Commenced formal education in AI & ML. Mastered foundational programming structures in C, Python, and Java.",
  },
  {
    year: "2024",
    title: "Web Development Mastery",
    description:
      "Expanded technical capabilities into frontend architecture. Attained proficiency in React.js, Tailwind CSS, and Git version control.",
  },
  {
    year: "2025",
    title: "Machine Learning Implementation",
    description:
      "Developed and deployed rigorous prediction models and complex AI applications bridging backend logic with modern UI.",
  },
  {
    year: "2026",
    title: "Placement Ready",
    description:
      "Diploma completed. Presenting a comprehensive portfolio demonstrating peak software engineering capabilities to prospective technical recruiters.",
  },
];

export const achievements = [
  { title: "Projects Completed", value: 25, suffix: "+" },
  { title: "Technologies Learned", value: 15, suffix: "+" },
  { title: "GitHub Contributions", value: 800, suffix: "+" },
  { title: "Hours of Coding", value: 2500, suffix: "+" },
];

export const whyHireMe = [
  {
    title: "Fast Learner",
    description: "Rapidly assimilates complex technical paradigms and frameworks.",
    icon: FaBrain,
  },
  {
    title: "Strong Fundamentals",
    description: "Deep understanding of core CS concepts, algorithms, and data structures.",
    icon: FaCode,
  },
  {
    title: "AI Enthusiast",
    description: "Passionate about implementing intelligent, data-driven solutions.",
    icon: FaRobot,
  },
  {
    title: "Problem Solver",
    description: "Approaches algorithmic bottlenecks with highly creative, optimized solutions.",
    icon: FaCogs,
  },
  {
    title: "Adapts Quickly",
    description: "Thrives in fast-paced, dynamically shifting development environments.",
    icon: SiJavascript,
  },
  {
    title: "Works Independently",
    description: "Capable of architecting and deploying full-stack systems autonomously.",
    icon: FaServer,
  },
  {
    title: "Team Player",
    description: "Excels in collaborative CI/CD environments and agile development cycles.",
    icon: FaUsers,
  },
];

export const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "timeline", label: "Timeline" },
  { id: "whyhireme", label: "Why Me" },
  { id: "contact", label: "Contact" },
];
