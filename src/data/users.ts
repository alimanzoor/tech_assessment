import { About_Text } from "@/data/long-text.ts";

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  department: string;
  location: string;
  joinDate: string;
  avatar: string;
  bio: string;
  skills: string[];
  projects: number;
  status: string;
  about_1?: string;
  about_2?: string;
  about_3?: string;
  about_4?: string;
  about_5?: string;
  age?: number;
}

const defaultUsers: User[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "+1 (555) 123-4567",
    role: "Frontend Developer",
    department: "Engineering",
    location: "San Francisco, CA",
    joinDate: "2023-01-15",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "Passionate frontend developer with 5+ years of experience in React and modern web technologies. Loves creating intuitive user interfaces and solving complex problems.",
    skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "GraphQL"],
    projects: 12,
    status: "Active",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    phone: "+1 (555) 987-6543",
    role: "Backend Developer",
    department: "Engineering",
    location: "New York, NY",
    joinDate: "2022-08-20",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "Experienced backend developer specializing in Node.js and cloud architecture. Enjoys building scalable systems and optimizing performance.",
    skills: ["Node.js", "Python", "AWS", "Docker", "PostgreSQL"],
    projects: 8,
    status: "Active",
  },
  {
    id: 3,
    name: "Carol Davis",
    email: "carol.davis@example.com",
    phone: "+1 (555) 456-7890",
    role: "UX Designer",
    department: "Design",
    location: "Austin, TX",
    joinDate: "2023-03-10",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "Creative UX designer with a keen eye for detail and user-centered design principles. Passionate about creating accessible and delightful user experiences.",
    skills: [
      "Figma",
      "Adobe XD",
      "Prototyping",
      "User Research",
      "Design Systems",
    ],
    projects: 15,
    status: "Active",
  },
  {
    id: 4,
    name: "David Wilson",
    email: "david.wilson@example.com",
    phone: "+1 (555) 321-0987",
    role: "Product Manager",
    department: "Product",
    location: "Seattle, WA",
    joinDate: "2021-11-05",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "Strategic product manager with experience in agile methodologies and cross-functional team leadership. Focused on delivering value to customers.",
    skills: [
      "Product Strategy",
      "Agile",
      "Analytics",
      "Roadmapping",
      "Stakeholder Management",
    ],
    projects: 6,
    status: "On Leave",
  },
  {
    id: 5,
    name: "Eva Martinez",
    email: "eva.martinez@example.com",
    phone: "+1 (555) 654-3210",
    role: "Data Scientist",
    department: "Analytics",
    location: "Chicago, IL",
    joinDate: "2022-12-01",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "Data scientist with expertise in machine learning and statistical analysis. Passionate about turning data into actionable insights.",
    skills: ["Python", "R", "Machine Learning", "SQL", "Tableau"],
    projects: 10,
    status: "Active",
  },
];

export const users = defaultUsers;

export const getUsers = (): User[] => {
  console.log("initialize getUsers");
  const startTime = performance.now();
  while (performance.now() - startTime < 300) {
    //
  }
  try {
    const storedData = localStorage.getItem("usersList");
    if (storedData) {
      const parsedUsers = JSON.parse(storedData);
      // Validate that the data matches our User interface
      if (Array.isArray(parsedUsers) && parsedUsers.length > 0) {
        return parsedUsers as User[];
      }
    }
  } catch (error) {
    console.error("Error loading users from localStorage:", error);
  }

  // Generate 300 users based on the default template
  const generatedUsers: User[] = [];
  const targetCount = 300;

  for (let i = 0; i < targetCount; i++) {
    const templateUser = defaultUsers[i % defaultUsers.length];
    const userNumber = i + 1;
    generatedUsers.push({
      ...templateUser,
      id: userNumber,
      name: `${templateUser.name.split(" ")[0]} ${templateUser.name.split(" ")[1]} ${userNumber}`,
      email: `${templateUser.email.split("@")[0]}.${userNumber}@${templateUser.email.split("@")[1]}`,
      phone: `+1 (555) ${String(Math.floor(Math.random() * 900) + 100)}-${String(Math.floor(Math.random() * 9000) + 1000)}`,
      projects: Math.floor(Math.random() * 20) + 1,
      about_1: About_Text,
      about_2: About_Text,
      about_3: About_Text,
      about_4: About_Text,
      about_5: About_Text,
    });
  }

  return generatedUsers;
};
