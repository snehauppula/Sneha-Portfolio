import { notFound } from "next/navigation";
import { categories, getCategory, getProjects } from "@/data/projects";
import { CategoryProjectsView } from "@/components/projects/category-projects-view";

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
    title: `${category.name} | Sneha Uppula`,
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
    <CategoryProjectsView
      slug={slug}
      name={category.name}
      description={category.description}
      projects={projects}
    />
  );
}
