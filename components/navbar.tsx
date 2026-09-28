import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import type { NavLink } from "@/constants/navigation";

interface NavbarProps {
  title: string;
  links: NavLink[];
}

const Navbar = ({ title, links }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link href="/" className="font-semibold text-zinc-800 dark:text-zinc-100">
          {title}
        </Link>
        <div className="flex items-center gap-6">
          <ul className="flex gap-4 text-sm text-zinc-600 dark:text-zinc-400">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
