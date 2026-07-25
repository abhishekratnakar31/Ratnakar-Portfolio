function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col justify-between p-6 md:p-12 font-mono selection:bg-white selection:text-black">
      
      {/* Top Header Row */}
      <header className="flex justify-between items-center text-xs tracking-widest text-zinc-500 uppercase">
        <span>abhishek ratnakar</span>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>system: rebuilding</span>
        </div>
      </header>

      {/* Main Content (Center) */}
      <main className="max-w-xl my-auto space-y-8 py-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-light tracking-tighter text-white uppercase">
            Under <br />
            <span className="font-bold">Construction</span>
          </h1>
          <p className="text-zinc-500 text-xs md:text-sm leading-relaxed max-w-sm">
            wiping the slate clean. reconstructing this space from the ground up to focus on code quality, speed, and design integrity.
          </p>
        </div>

        <div>
          <a
            href="https://github.com/abhishekratnakar31"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border border-zinc-800 hover:border-white px-5 py-3 bg-zinc-950 text-white transition-all duration-200"
          >
            <span>github profile ↗</span>
          </a>
        </div>
      </main>

      {/* Bottom Footer Row */}
      <footer className="flex flex-col md:flex-row justify-between items-start md:items-center text-[10px] tracking-wider text-zinc-600 gap-4 md:gap-0 border-t border-zinc-900 pt-6">
        <div className="space-y-1">
          <div>LOC: /Users/abhishekratnakar/Ratnakar-Portfolio</div>
          <div>ENV: production_ready</div>
        </div>
        <div className="text-left md:text-right">
          <div>© {new Date().getFullYear()}</div>
          <div>all rights reserved.</div>
        </div>
      </footer>

    </div>
  );
}

export default App;
