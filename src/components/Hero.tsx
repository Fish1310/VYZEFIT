import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#522b6c] via-[#0a0a0a] to-[#7d48ec] opacity-80"></div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="relative z-10 text-center px-4 max-w-7xl w-full">
        <div className="mb-12 relative">
          <div className="w-96 h-96 mx-auto bg-gradient-to-br from-[#7d48ec] to-[#522b6c] rounded-full opacity-20 blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </div>

        <h1 className="font-audiowide text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#a8a8a7] via-white to-[#7d48ec] bg-clip-text text-transparent">
          VYZE FIT
        </h1>

        <p className="text-3xl md:text-5xl mb-4 text-white font-light tracking-wide">
          Votre performance, votre vue.
        </p>

        <p className="text-lg md:text-2xl mb-12 text-[#a8a8a7] max-w-3xl mx-auto leading-relaxed">
          Les premières lunettes connectées qui allient sport, santé et nutrition.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative bg-gradient-to-r from-[#522b6c] to-[#7d48ec] text-white px-12 py-5 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-[#7d48ec]/50 transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10">Découvrir le produit</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
          </button>

          <button 
            onClick={() => document.getElementById('preorder')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative bg-white text-[#7d48ec] px-12 py-5 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 transform hover:scale-105 border-2 border-white"
          >
            <span className="relative z-10">Précommander maintenant</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#522b6c] to-[#7d48ec] opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      <div 
        onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <ChevronDown className="text-[#7d48ec] w-8 h-8" />
      </div>
    </section>
  );
}
