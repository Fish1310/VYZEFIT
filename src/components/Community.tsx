import { Users, Mountain, Bike, Leaf } from 'lucide-react';

const profiles = [
  {
    icon: Mountain,
    title: 'Coureurs',
    description: 'Optimisez vos trails'
  },
  {
    icon: Bike,
    title: 'Cyclistes',
    description: 'Performances cyclistes'
  },
  {
    icon: Users,
    title: 'Fitness',
    description: 'Entraînements quotidiens'
  },
  {
    icon: Leaf,
    title: 'Écoresponsables',
    description: 'Tech durable'
  }
];

export default function Community() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-audiowide text-4xl md:text-6xl text-center mb-6 bg-gradient-to-r from-[#a8a8a7] to-[#7d48ec] bg-clip-text text-transparent">
          Rejoignez la communauté
        </h2>

        <p className="text-center text-2xl mb-4 text-[#7d48ec] font-semibold">
          #SeeYourPerformance
        </p>

        <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          Des milliers d'athlètes font confiance à Vyze Fit pour repousser leurs limites
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] p-8 rounded-2xl border border-[#522b6c]/30 hover:border-[#7d48ec] transition-all duration-300 text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#7d48ec]/0 to-[#522b6c]/0 group-hover:from-[#7d48ec]/20 group-hover:to-[#522b6c]/20 transition-all duration-300"></div>

              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#522b6c] to-[#7d48ec] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <profile.icon className="w-12 h-12 text-white" />
                </div>

                <h3 className="text-2xl font-audiowide mb-2 text-white">{profile.title}</h3>
                <p className="text-gray-400">{profile.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
