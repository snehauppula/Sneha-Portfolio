export const categories = [
  {
    slug: "data-science",
    name: "Data Science & ML",
    description: "Machine learning systems, data analysis, and intelligent tools.",
  },
  {
    slug: "automation",
    name: "Automation Workflows",
    description: "Scripts and workflows that automate repetitive tasks and pipelines.",
  },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
}

export const projectsByCategory: Record<CategorySlug, Project[]> = {
  "data-science": [
    {
      title: "College Prediction System",
      description:
        "ML system that predicts possible colleges from historical counseling data and rank inputs.",
      tech: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
      github: "#",
      demo: "#",
    },
    {
      title: "Mini Music Predictor",
      description:
        "Predicts song popularity using ML from audio features and music dataset analysis.",
      tech: ["Python", "Pandas", "Matplotlib", "ML"],
      github: "#",
      demo: "#",
    },
    {
      title: "CleanData Visualizer",
      description:
        "Automated data preprocessing: clean datasets, handle missing values, and generate visual insights.",
      tech: ["Python", "Pandas", "Streamlit", "Data Viz"],
      github: "#",
      demo: "#",
    },
  ],
  automation: [
    // Add your automation workflow projects here. Example:
    // {
    //   title: "Report Generator",
    //   description: "Automated daily reports from multiple data sources.",
    //   tech: ["Python", "Cron", "Slack"],
    //   github: "https://github.com/...",
    //   demo: "#",
    // },
  ],
};

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getProjects(slug: string): Project[] {
  const key = slug as CategorySlug;
  return projectsByCategory[key] ?? [];
}
