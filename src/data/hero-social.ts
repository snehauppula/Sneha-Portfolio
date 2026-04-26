import type { LucideIcon } from "lucide-react";
import { Code2, Github, Instagram, Linkedin, Twitter } from "lucide-react";

export const heroSocialLinks: readonly {
  readonly label: string;
  readonly href: string;
  readonly Icon: LucideIcon;
}[] = [
  { label: "GitHub", href: "https://github.com/snehauppula", Icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/snehauppula", Icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/sneha.uppula_23/", Icon: Instagram },
  { label: "X", href: "https://x.com/UppulaSneha", Icon: Twitter },
  { label: "LeetCode", href: "https://leetcode.com/u/snehauppula23/", Icon: Code2 },
] as const;
