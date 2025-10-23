import { Smartphone, Activity, Utensils, TrendingUp } from 'lucide-react';

const appFeatures = [
  {
    icon: Activity,
    title: 'Stats Sportives',
    description: 'Distance, vitesse, calories brûlées'
  },
  {
    icon: Utensils,
    title: 'Suivi Nutrition',
    description: 'Conseils personnalisés en temps réel'
  },
  {
    icon: TrendingUp,
    title: 'Analyse Performance',
    description: 'Graphiques et tendances'
  }
];

export default function AppSection() {
  return (
    <section className="py-24 px-4 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7d48ec] rounded-full filter blur-[150px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#522b6c] rounded-full filter blur-[150px] opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-audiowide text-4xl md:text-5xl mb-6 bg-gradient-to-r from-[#7d48ec] to-white bg-clip-text text-transparent">
              Application Mobile
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Synchronisez vos données et suivez votre progression avec notre application intuitive
            </p>

            <div className="space-y-6">
              {appFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-br from-[#522b6c] to-[#7d48ec] p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-white">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7d48ec] to-[#522b6c] rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-4 border-[#522b6c] rounded-3xl p-8 shadow-2xl">
                <div className="bg-gradient-to-br from-[#522b6c]/20 to-[#7d48ec]/20 rounded-2xl p-6 mb-4">
                  <Smartphone className="w-full h-64 text-[#7d48ec]" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-[#1a1a1a] p-3 rounded-lg">
                    <span className="text-sm text-gray-400">Distance</span>
                    <span className="text-white font-semibold">12.5 km</span>
                  </div>
                  <div className="flex justify-between items-center bg-[#1a1a1a] p-3 rounded-lg">
                    <span className="text-sm text-gray-400">Calories</span>
                    <span className="text-white font-semibold">847 kcal</span>
                  </div>
                  <div className="flex justify-between items-center bg-[#1a1a1a] p-3 rounded-lg">
                    <span className="text-sm text-gray-400">BPM Moyen</span>
                    <span className="text-white font-semibold">142</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
