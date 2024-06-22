export function Crt({ children }) {
  return (
    <div className="retro:font-mono light:font-sans dark:font-sans retro:animate-crt light:animate-none dark:animate-none">
      <div className="absolute left-0 top-0 w-screen h-screen scrollbar">
        {children}
        <div className="absolute light:hidden dark:hidden retro:block pointer-events-none">
          <div className="z-[100] fixed block left-0 top-0 w-full h-screen opacity-50 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)50%,rgba(0,0,0,0.5)50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_3px,2px_100%]" />
          <div className="fixed block left-0 top-0 w-full h-screen z-[80] pointer-events-none animate-flicker bg-[rgba(18,16,16,0.1)]" />
          <div className="fixed left-0 top-0 h-full z-[90] w-screen bg-fuchsia-900/20 backdrop-blur-xs"></div>
        </div>
      </div>
    </div>
  );
}
