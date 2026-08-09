import Link from "next/link";

type NavKey = "map" | "expeditions" | "challenges" | "profile";

const navItems: Array<{ key: NavKey; href: string; icon: string; label: string }> = [
  { key: "map", href: "/", icon: "??, label: "吏?? },
  { key: "expeditions", href: "/expeditions", icon: "??, label: "?먯젙?" },
  { key: "challenges", href: "/challenges", icon: "??, label: "梨뚮┛吏" },
  { key: "profile", href: "/profile", icon: "??, label: "留덉씠" },
];

export function BottomNav({ active }: { active: NavKey }) {
  return (
    <nav className="bottom-nav" aria-label="二쇱슂 硫붾돱">
      {navItems.map((item) => (
        <Link className={active === item.key ? "active" : ""} href={item.href} key={item.key}>
          <span>{item.icon}</span>
          <small>{item.label}</small>
        </Link>
      ))}
    </nav>
  );
}
