/** Simple Icons: https://simpleicons.org/ — slugs verified against icon set */
export interface MarqueeSkill {
  name: string;
  /** Primary Simple Icons slug */
  slug: string;
  /** Extra slugs to try if CDN 404s (e.g. Java → OpenJDK) */
  slugAlternates?: readonly string[];
  /** Tried first when a brand is missing from Simple Icons (e.g. Matplotlib, Seaborn) */
  iconUrls?: readonly string[];
}

/**
 * Ordered URLs for `<img>` — try until one loads:
 * brand (CDN) → SVG mirror → dark mono on light tile (helps white marks e.g. Docker)
 */
export function getSkillIconUrlCandidates(skill: MarqueeSkill): string[] {
  const prefix = [...(skill.iconUrls ?? [])];
  const slugs = [skill.slug, ...(skill.slugAlternates ?? [])];
  const out: string[] = [];
  for (const s of slugs) {
    out.push(`https://cdn.simpleicons.org/${s}`);
    out.push(`https://cdn.jsdelivr.net/npm/simple-icons/icons/${s}.svg`);
    out.push(`https://cdn.simpleicons.org/${s}/1f2937`);
  }
  return [...prefix, ...out];
}

/** Toolkit aligned to shipped projects: AI, software, and data. */
export const marqueeSkills: MarqueeSkill[] = [
  { name: "Python", slug: "python" },
  { name: "TypeScript", slug: "typescript" },
  { name: "JavaScript", slug: "javascript" },
  { name: "Java", slug: "java", slugAlternates: ["openjdk"] },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Vercel", slug: "vercel" },
  { name: "Supabase", slug: "supabase" },
  { name: "Anthropic", slug: "anthropic" },
  { name: "Groq", slug: "groq" },
  { name: "scikit-learn", slug: "scikitlearn" },
  { name: "Pandas", slug: "pandas" },
  { name: "NumPy", slug: "numpy" },
  {
    name: "Matplotlib",
    slug: "matplotlib",
    iconUrls: [
      "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
    ],
  },
  {
    name: "Seaborn",
    slug: "seaborn",
    iconUrls: ["https://seaborn.pydata.org/_static/logo-mark-lightbg.svg"],
  },
  { name: "Streamlit", slug: "streamlit" },
  { name: "Jupyter", slug: "jupyter" },
  { name: "Google Colab", slug: "googlecolab" },
  { name: "Power BI", slug: "powerbi" },
  { name: "Excel", slug: "microsoftexcel" },
  { name: "MySQL", slug: "mysql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "n8n", slug: "n8n" },
  { name: "AWS Lambda", slug: "awslambda", slugAlternates: ["amazonaws"] },
  { name: "Amazon S3", slug: "amazons3", slugAlternates: ["amazonaws"] },
  { name: "DynamoDB", slug: "amazondynamodb" },
  { name: "Microsoft Azure", slug: "microsoftazure" },
  { name: "Docker", slug: "docker" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github" },
  { name: "VS Code", slug: "visualstudiocode" },
  { name: "Postman", slug: "postman" },
];
