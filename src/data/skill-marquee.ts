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

export const marqueeSkills: MarqueeSkill[] = [
  { name: "Python", slug: "python" },
  { name: "Java", slug: "java", slugAlternates: ["openjdk"] },
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
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github" },
  { name: "VS Code", slug: "visualstudiocode" },
  { name: "Docker", slug: "docker" },
  { name: "Postman", slug: "postman" },
  { name: "n8n", slug: "n8n" },
  { name: "AWS Lambda", slug: "awslambda", slugAlternates: ["amazonaws"] },
  { name: "Amazon S3", slug: "amazons3", slugAlternates: ["amazonaws"] },
  { name: "DynamoDB", slug: "amazondynamodb" },
  { name: "Microsoft Azure", slug: "microsoftazure" },
  { name: "MySQL", slug: "mysql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Supabase", slug: "supabase" },
  { name: "Power BI", slug: "powerbi" },
];
