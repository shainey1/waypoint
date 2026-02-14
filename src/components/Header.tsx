import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface-950/80 backdrop-blur-xl border-b border-gray-800/40">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-400 to-emerald-600 flex items-center justify-center text-sm font-bold text-surface-950 group-hover:shadow-lg group-hover:shadow-accent-500/20 transition-shadow">
            W
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-gray-100">
            Waypoint
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/denver"
            className="text-sm text-gray-400 hover:text-gray-100 transition-colors font-medium"
          >
            Denver
          </Link>
          <span className="text-sm text-gray-600 font-medium cursor-default">
            More cities soon
          </span>
        </nav>
      </div>
    </header>
  );
}
