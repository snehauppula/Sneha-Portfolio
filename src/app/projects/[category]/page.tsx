import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { categories, getCategory, getProjects } from "@/data/projects";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Projects" };
  return {
    title: `${category.name} | Sneha`,
    description: category.description,
  };
}

export default async function CategoryProjectsPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  const projects = getProjects(slug);

  if (!category) notFound();

  return (
    <div className="min-h-screen bg-[#020202] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(168,85,247,0.06),transparent_50%)]" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16 md:py-24">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#020202] rounded-lg w-fit"
          aria-label="Back to portfolio projects section"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to portfolio
        </Link>

        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            {category.name}
          </h1>
          <p className="text-white/55 text-base leading-relaxed">
            {category.description}
          </p>
        </header>

        {projects.length === 0 ? (
          <p className="text-white/50 text-center py-12">
            No projects in this category yet.{" "}
            <Link href="/#contact" className="text-primary hover:underline">
              Get in touch
            </Link>{" "}
            to discuss.
          </p>
        ) : (
          <ul className="space-y-8">
            {projects.map((project) => (
              <li
                key={project.title}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 hover:border-white/15 transition-colors"
              >
                <h2 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-white/55 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-xs font-mono text-white/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.demo && project.demo !== "#" ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black text-xs font-bold hover:bg-white/90 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#020202]"
                    >
                      View project
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-white text-xs font-bold hover:bg-white/15 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#020202]"
                    >
                      Get in touch
                    </Link>
                  )}
                  {project.github && project.github !== "#" ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-white/70 hover:text-white hover:border-white/20 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#020202]"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-white/40 hover:text-white/60 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#020202]"
                      aria-label="Get in touch"
                    >
                      <Github className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
