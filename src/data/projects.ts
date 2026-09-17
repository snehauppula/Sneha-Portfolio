export const categories = [
  {
    slug: "ai",
    name: "AI & ML",
    description: "Models, NLP, and intelligent tools — from training to product UI.",
  },
  {
    slug: "software",
    name: "Software",
    description: "Apps, APIs, and workflows I design, build, and ship.",
  },
  {
    slug: "data",
    name: "Data",
    description: "Dashboards, analysis, and insights that support real decisions.",
  },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export const projectsByCategory: Record<CategorySlug, Project[]> = {
  ai: [
    {
      title: "DecisionX",
      description:
        "Multi-agent decision intelligence for infrastructure and policy: a council of specialist AI agents runs in parallel, then an executive verdict streams live — impact scores, consequence graphs, and structured reports.",
      tech: ["Next.js", "TypeScript", "Claude", "Supabase", "Tailwind CSS"],
      github: "https://github.com/snehauppula/DecisionX",
      demo: "https://decisionx-mu.vercel.app",
    },
    {
      title: "RAG PDF Assistant",
      description:
        "Retrieval-augmented generation over PDFs: ingest, embed, store in Chroma, and answer with Groq. Modular Python pipeline with CLI, tests, source citations, and a Streamlit demo UI.",
      tech: ["Python", "RAG", "Chroma", "Groq", "Streamlit"],
      github: "https://github.com/snehauppula/RAG",
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
      title: "CineMatch — Movie Recommender",
      description:
        "Search movies by title and surface similar picks using TF-IDF content features plus collaborative filtering on ratings. Streamlit UI for search, browse, and recommendations; MovieLens-friendly data loading documented on GitHub.",
      tech: ["Python", "Streamlit", "scikit-learn", "Recommender systems"],
      github: "https://github.com/snehauppula/Movie-Recommendation-System-ML",
      demo: "https://recommendation-system-ml-movie.streamlit.app/",
    },
  ],
  software: [
    {
      title: "Absolute Bakers",
      description:
        "Production bakery storefront for Absolute Bakers in Hyderabad: menu, cart, and two kitchens (Kompally and Madhinaguda). Designed and developed with Flowsite AI.",
      tech: ["Next.js", "E-commerce", "Vercel"],
      demo: "https://absolute-bakers-fsai.vercel.app/",
    },
    {
      title: "Infranex Technologies",
      description:
        "Placement-focused learning platform: course catalog, checkout, and a calm product surface so learners spend energy on skills, not the UI. Designed and developed with Flowsite AI.",
      tech: ["Next.js", "EdTech", "Product UI"],
      demo: "https://www.infranextech.in/",
    },
    {
      title: "HYVAA",
      description:
        "Brand and product site for Hyderabad's first detox water — flavor stories, wellness shots, and a conversion-focused landing experience.",
      tech: ["Next.js", "Brand site", "Product UI"],
      demo: "https://www.hyvaa.life/",
    },
    {
      title: "Effortless Events",
      description:
        "Smart event check-in: registrations, payment verification, unique QR codes for attendees, and n8n workflows for registration, validation, and live check-in.",
      tech: ["n8n", "Automation", "QR codes", "Vercel"],
      github: "https://github.com/snehauppula/Effortless-Events",
      demo: "https://effortless-events-phi.vercel.app/",
    },
  ],
  data: [
    {
      title: "RiskSense AI",
      description:
        "Credit risk assessment for loan applicants: imbalance handling, threshold tuning, and a Streamlit app that estimates default probability with High/Low risk and key contributing factors.",
      tech: ["Python", "Pandas", "scikit-learn", "Streamlit", "NumPy"],
      github: "https://github.com/snehauppula/Risk-Sense-AI",
      demo: "https://credit-risk-predictor-sneha.streamlit.app/",
    },
    {
      title: "Supply Chain Replenishment",
      description:
        "End-to-end inventory pipeline: ingest and clean supply-chain data, ABC/velocity classification, demand forecasts, reorder recommendations with stock-out risk, plus MySQL views, Excel reports, and Power BI.",
      tech: ["Python", "Pandas", "MySQL", "Power BI", "Excel"],
      github: "https://github.com/snehauppula/Supply-Chain-Replenishment-System",
    },
    {
      title: "GoTogether Rides — Power BI",
      description:
        "Power BI dashboard for ride analytics: interactive report (.pbix) and a PDF export for stakeholders. Files and context live in the GitHub repository.",
      tech: ["Power BI", "Dashboard", "Analytics", "Visualization"],
      github: "https://github.com/snehauppula/PowerBi-Dashboard",
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
