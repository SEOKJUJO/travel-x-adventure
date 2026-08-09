import Link from "next/link";

type NavKey = "map" | "expeditions" | "challenges" | "profile";

const navItems: Array<{ key: NavKey; href: string; icon: string; label: string }> = [
  { key: "map", href: "/", icon: "⌖", label: "지도" },
  { key: "expeditions", href: "/expeditions", icon: "◫", label: "원정대" },
  { key: "challenges", href: "/challenges", icon: "◇", label: "챌린지" },
  { key: "profile", href: "/profile", icon: "○", label: "마이" },
];

export function BottomNav({ active }: { active: NavKey }) {
  return (
    <nav className="bottom-nav" aria-label="주요 메뉴">
      {navItems.map((item) => (
        <Link className={active === item.key ? "active" : ""} href={item.href} key={item.key}>
          <span>{item.icon}</span>
          <small>{item.label}</small>
        </Link>
      ))}
    </nav>
  );
}
