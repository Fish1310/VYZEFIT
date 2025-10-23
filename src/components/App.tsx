import { Activity, Utensils, TrendingUp } from 'lucide-react';

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
      {/* Arrière-plans flous violets */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7d48ec] rounded-full filter blur-[150px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#522b6c] rounded-full filter blur-[150px] opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texte et fonctionnalités */}
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

          {/* Image avec contour dégradé animé */}
          <div className="relative flex justify-center">
            <div className="p-[3px] rounded-3xl bg-gradient-to-r from-[#7d48ec] via-[#522b6c] to-[#7d48ec] animate-pulse shadow-[0_0_30px_#7d48ec]">
              <img 
                src="https://i.imgur.com/CHZsLKx.png"
                alt="Application mobile VYZE FIT"
                className="w-auto h-[400px] object-contain rounded-2xl bg-[#0a0a0a]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
