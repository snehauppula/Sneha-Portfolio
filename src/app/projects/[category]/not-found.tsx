import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CategoryNotFound() {
  return (
    <div className="min-h-screen bg-[#020202] text-white flex flex-col items-center justify-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(168,85,247,0.06),transparent_50%)]" />
      <div className="relative z-10 text-center max-w-md">
        <h1 className="text-2xl font-bold text-white mb-2">Category not found</h1>
        <p className="text-white/55 text-sm mb-8">
          This project category doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/10 text-white text-sm font-medium hover:bg-white/15 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#020202]"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>
      </div>
    </div>
  );
}
