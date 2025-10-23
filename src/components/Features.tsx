import { Navigation, Heart, Thermometer, Eye, Headphones, Mic, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const features = [
  {
    icon: Navigation,
    title: 'GPS Intégré',
    description: 'Suivez vos parcours en temps réel'
  },
  {
    icon: Heart,
    title: 'Suivi Cardio',
    description: 'Moniteur de fréquence cardiaque'
  },
  {
    icon: Thermometer,
    title: 'Capteur Température',
    description: 'Adaptation aux conditions'
  },
  {
    icon: Eye,
    title: 'Adaptation Optique',
    description: 'Verres intelligents adaptatifs'
  },
  {
    icon: Headphones,
    title: 'Conduction Osseuse',
    description: 'Audio sans obstruction'
  },
  {
    icon: Mic,
    title: 'Commande Vocale',
    description: 'Contrôle mains libres'
  },
  {
    icon: Zap,
    title: 'Recharge Thermique',
    description: 'Autonomie prolongée'
  }
];

export default function Features() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = 340; // approximate card width + gap

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollByAmount, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollByAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="features" className="py-24 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-audiowide text-4xl md:text-6xl text-center mb-6 bg-gradient-to-r from-[#7d48ec] to-[#a8a8a7] bg-clip-text text-transparent">
          Fonctionnalités
        </h2>
        <p className="text-center text-gray-400 text-xl mb-16 max-w-2xl mx-auto">
          Une technologie de pointe pour optimiser chaque aspect de votre performance
        </p>

        <div className="relative">
          <button
            aria-label="Précédent"
            onClick={handlePrev}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-10 h-10 rounded-full bg-[#1a1a1a]/80 border border-[#522b6c]/40 text-white hover:border-[#7d48ec] hover:shadow-lg hover:shadow-[#7d48ec]/30 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-1 pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {/* hide scrollbar for WebKit */}
            <div className="pointer-events-none absolute" style={{ display: 'none' }} />
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative shrink-0 snap-center w-80 min-w-[20rem] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-8 rounded-2xl border border-[#522b6c]/30 hover:border-[#7d48ec] transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#7d48ec]/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7d48ec]/0 to-[#522b6c]/0 group-hover:from-[#7d48ec]/10 group-hover:to-[#522b6c]/10 rounded-2xl transition-all duration-300"></div>

                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-[#522b6c] to-[#7d48ec] p-4 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            aria-label="Suivant"
            onClick={handleNext}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-10 h-10 rounded-full bg-[#1a1a1a]/80 border border-[#522b6c]/40 text-white hover:border-[#7d48ec] hover:shadow-lg hover:shadow-[#7d48ec]/30 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
