import { lecturers } from "./memberList";

export const membersEN = {
  sectionLabel: "Our Team",
  heading: "The People Behind",
  headingAccent: "B401",
  body: "Our laboratory is powered by dedicated lecturers and talented students who share a passion for robotics and intelligent systems.",
  lecturersLabel: "Lecturers & Supervisors",
  studentsLabel: "Student Members",
  lecturers: lecturers,
  studentRoles: [
    { label: "Laboratory Assistant", count: 6, icon: "🧑‍💻" },
    { label: "Active Researcher", count: 8, icon: "🔬" },
    { label: "Practicum Student", count: 40, icon: "📚" },
  ],
} as const;
