import { Zap, Mountain, Eye, Headphones, Shield } from 'lucide-react';

const productFeatures = [
  {
    icon: Eye,
    title: 'Verres adaptatifs jour/nuit',
    description: 'Technologie photochromique intelligente'
  },
  {
    icon: Shield,
    title: 'Design ergonomique',
    description: 'Confort ultra-léger, seulement 28g'
  },
  {
    icon: Mountain,
    title: 'Capteurs intégrés',
    description: 'GPS, cardio, température, altitude'
  },
  {
    icon: Headphones,
    title: 'Conduction osseuse',
    description: 'Musique sans obstruction auditive'
  },
  {
    icon: Zap,
    title: 'USB-C',
    description: 'Autonomie de 12h en usage intensif'
  }
];

export default function ProductShowcase() {
  return (
    <section id="product" className="py-24 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#7d48ec] rounded-full filter blur-[150px] opacity-20"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#522b6c] rounded-full filter blur-[150px] opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-audiowide text-5xl md:text-7xl mb-6 bg-gradient-to-r from-white to-[#7d48ec] bg-clip-text text-transparent">
            Présentation du produit
          </h2>
          <p className="text-xl md:text-2xl text-[#a8a8a7] max-w-3xl mx-auto leading-relaxed">
            Des lunettes conçues pour les athlètes exigeants qui repoussent leurs limites
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="relative order-2 lg:order-1">
            <div className="space-y-6">
              {productFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-6 rounded-2xl border-2 border-[#522b6c]/30 hover:border-[#7d48ec] transition-all duration-300 hover:transform hover:-translate-x-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7d48ec]/0 to-[#522b6c]/0 group-hover:from-[#7d48ec]/10 group-hover:to-[#522b6c]/10 rounded-2xl transition-all duration-300"></div>

                  <div className="relative z-10 flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-[#522b6c] to-[#7d48ec] p-3 rounded-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7d48ec] via-[#522b6c] to-[#7d48ec] rounded-3xl blur-3xl opacity-40"></div>
              <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-4 border-[#7d48ec] rounded-3xl p-8">
                <div className="relative w-full h-80 flex items-center justify-center">
                  <img 
                    src="https://i.imgur.com/fDRfUNN.png" 
                    alt="Lunettes connectées VYZE FIT" 
                    className="w-full h-full object-contain rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7d48ec]/20 to-[#522b6c]/20 rounded-2xl"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#7d48ec] rounded-full opacity-10 blur-3xl"></div>
              </div>
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-[#7d48ec] to-[#522b6c] text-white px-6 py-3 rounded-full font-semibold shadow-xl animate-bounce">
                Nouveauté 2025
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => document.getElementById('preorder')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative bg-gradient-to-r from-[#7d48ec] to-[#522b6c] text-white px-16 py-6 rounded-full text-xl font-semibold hover:shadow-2xl hover:shadow-[#7d48ec]/60 transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10">Essayer maintenant</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
