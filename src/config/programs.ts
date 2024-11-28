export interface Program {
  title: string;
  slug: string;
  description: string;
}

export interface MenuItem {
  title: string;
  href: string;
  description?: string;
  items?: MenuItem[];
}

export const programs: Program[] = [
  {
    title: "Automotive Services",
    slug: "auto",
    description: "Learn auto repair, maintenance, and diagnostic techniques.",
  },
  {
    title: "Construction and Building Skills",
    slug: "construction",
    description: "Master carpentry, electrical, and building fundamentals.",
  },
  {
    title: "Culinary",
    slug: "culinary",
    description: "Develop cooking skills and food service management.",
  },
  {
    title: "Electrical",
    slug: "elec",
    description: "Learn electrical systems installation and maintenance.",
  },
  {
    title: "Health Services",
    slug: "health",
    description: "Train for careers in healthcare and medical support.",
  },
  {
    title: "Information Technology",
    slug: "it",
    description: "Study computer networking, programming, and cybersecurity.",
  },
  {
    title: "Unisex Styling",
    slug: "service",
    description: "Master hair styling and beauty techniques.",
  },
];

export const specialPrograms: Program[] = [
  {
    title: "Work-Based Learning (WBL)",
    slug: "wbl",
    description:
      "Gain real-world experience through internships and work placements.",
  },
  {
    title: "OSHA",
    slug: "osha",
    description: "Occupational Safety and Health Administration certification.",
  },
];

export const aboutItems: MenuItem[] = [
  {
    title: "About Coop",
    href: "/about",
    description: "Learn about our history and mission",
  },
  {
    title: "Principal's Message",
    href: "/principal",
    description: "A message from our school leader",
  },
  {
    title: "Staff",
    href: "/staff",
    description: "Meet our dedicated team",
  },
];
