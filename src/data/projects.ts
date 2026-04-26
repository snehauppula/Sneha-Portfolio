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
      title: "RiskSense AI",
      description:
        "Credit risk prediction using financial datasets: preprocessing, feature engineering, and class imbalance handling. Models evaluated with precision, recall, and F1.",
      tech: ["Python", "scikit-learn", "Pandas", "Classification"],
      github: "https://github.com/snehauppula/Credit-Risk-Assessment",
      demo: "https://credit-risk-predictor-sneha.streamlit.app/",
    },
    {
      title: "CiviGuard AI",
      description:
        "Smart civic complaint analyzer: NLP pipeline, trained classifier, and a Streamlit app to explore complaints interactively. Full methodology, notebook, HTML report, and setup are documented in the GitHub repository.",
      tech: ["Python", "Streamlit", "NLP", "scikit-learn"],
      github: "https://github.com/snehauppula/Smart-Complaint-Analyzer-Civiguard",
      demo: "https://smart-complaint-analyzer-civiguard.streamlit.app/",
    },
    {
      title: "GoTogether Rides — Power BI",
      description:
        "Power BI dashboard for ride analytics: interactive report (.pbix) and a PDF export for stakeholders. Files and context live in the GitHub repository.",
      tech: ["Power BI", "Dashboard", "Analytics", "Visualization"],
      github: "https://github.com/snehauppula/PowerBi-Dashboard",
      demo: "#",
    },
    {
      title: "CineMatch — Movie Recommender",
      description:
        "Search movies by title and surface similar picks using TF-IDF content features plus collaborative filtering on ratings. Streamlit UI for search, browse, and recommendations; MovieLens-friendly data loading documented on GitHub.",
      tech: ["Python", "Streamlit", "scikit-learn", "Recommender systems"],
      github: "https://github.com/snehauppula/Movie-Recommendation-System-ML",
      demo: "https://recommendation-system-ml-movie.streamlit.app/",
    },
  ],
  automation: [
    {
      title: "Effortless Events",
      description:
        "Smart event check-in: registrations, payment verification, unique QR codes for attendees, and n8n workflows for registration, validation, and live check-in.",
      tech: ["n8n", "Automation", "QR codes", "Workflows"],
      github: "https://github.com/snehauppula/Effortless-Events",
      demo: "https://effortless-events-phi.vercel.app/",
    },
  ],
};

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getProjects(slug: string): Project[] {
  const key = slug as CategorySlug;
  return projectsByCategory[key] ?? [];
}
