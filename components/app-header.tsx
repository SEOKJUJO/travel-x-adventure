import Link from "next/link";

export function AppHeader({ children }: { children?: React.ReactNode }) {
  return (
    <header className="app-header">
      <Link className="brand" href="/" aria-label="Travel X Adventure ??>
        <span className="brand-mark">X</span>
        <span><strong>Travel X</strong><small>ADVENTURE</small></span>
      </Link>
      <div className="header-actions">
        {children}
        <button className="icon-button" type="button" aria-label="?뚮┝"><span>??/span><i /></button>
      </div>
    </header>
  );
}
