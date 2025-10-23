import { ArrowRight, Check, Bell } from 'lucide-react';

export default function Preorder() {
  return (
    <section id="preorder" className="py-24 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#522b6c]/10 to-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMjUsMjU1LDIzNiwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7d48ec] via-[#522b6c] to-[#7d48ec] rounded-3xl blur-3xl opacity-40 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-[#7d48ec] rounded-3xl p-8 flex items-center justify-center">
              <img
                src="https://i.imgur.com/fDRfUNN.png"
                alt="Lunettes connectées VYZE FIT"
                className="w-full h-96 object-contain rounded-xl shadow-2xl"
              />
            </div>
            <div className="absolute top-4 right-4 bg-gradient-to-r from-[#7d48ec] to-[#522b6c] text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
              Édition limitée
            </div>
          </div>

          <div>
            <h2 className="font-audiowide text-4xl md:text-6xl mb-6 bg-gradient-to-r from-white via-[#a8a8a7] to-[#7d48ec] bg-clip-text text-transparent">
              Soyez parmi les premiers
            </h2>

            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Précommandez dès maintenant votre paire de Vyze Fit et bénéficiez d'un accès prioritaire à la technologie qui va révolutionner votre pratique sportive.
            </p>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-[#7d48ec]/50 rounded-2xl p-6 mb-8">
              <div className="flex items-baseline mb-4">
                <span className="text-5xl font-bold text-white">349€</span>
                <span className="text-gray-400 ml-2 line-through text-xl">449€</span>
                <span className="ml-4 bg-gradient-to-r from-[#7d48ec] to-[#522b6c] text-white px-3 py-1 rounded-full text-sm font-semibold">-22% Lancement</span>
              </div>
              <p className="text-sm text-gray-400">Prix de précommande limité</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-[#7d48ec]" />
                <span className="text-gray-300">Livraison prévue : 2026</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-[#7d48ec]" />
                <span className="text-gray-300">Garantie 2 ans</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-[#7d48ec]" />
                <span className="text-gray-300">Support premium inclus</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-[#7d48ec]" />
                <span className="text-gray-300">Étui de protection offert</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button className="group relative bg-gradient-to-r from-[#7d48ec] to-[#522b6c] text-white px-10 py-5 rounded-full text-xl font-semibold hover:shadow-2xl hover:shadow-[#7d48ec]/60 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3">
                <span className="relative z-10">Précommander maintenant</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
              </button>

              <button className="group relative bg-[#1a1a1a] text-white px-10 py-5 rounded-full text-xl font-semibold border-2 border-[#7d48ec] hover:bg-[#7d48ec]/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3">
                <Bell className="w-5 h-5" />
                <span className="relative z-10">Recevoir une alerte</span>
              </button>
            </div>

            <p className="text-sm text-gray-500">
              * Places limitées - 247 unités restantes au prix de lancement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
