export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Acerca", href: "/about" },
  { label: "Dashboard", href: "/dashboard/users" },
];
