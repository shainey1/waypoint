export function Footer() {
  return (
    <footer className="border-t border-gray-800/40 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-accent-400 to-emerald-600 flex items-center justify-center text-xs font-bold text-surface-950">
                W
              </div>
              <span className="font-display font-bold text-sm text-gray-300">
                Waypoint
              </span>
            </div>
            <p className="text-sm text-gray-500 max-w-md">
              City-specific guides for outdoor activities. Built for people who
              just moved and want to get outside.
            </p>
          </div>
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Waypoint
          </p>
        </div>
      </div>
    </footer>
  );
}
