import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sonia T.',
    role: 'Influenceuse Fitness',
    rating: 5,
    text: 'Des lunettes incroyablement légères et précises ! Je peux suivre mes performances en temps réel sans sortir mon téléphone. Un vrai game changer pour mes trails.',
    avatar: 'ST'
  },
  {
    name: 'Justine G.',
    role: 'Influenceuse Fitness',
    rating: 5,
    text: 'Je ne cours plus sans elles. Les données cardio et GPS sont ultra-fiables, et le design est vraiment classe. Vyze Fit a changé ma façon de m\'entraîner.',
    avatar: 'JG'
  },
  {
    name: 'Thibault G.',
    role: 'Coach Sportif',
    rating: 5,
    text: 'Suivre mes performances n\'a jamais été aussi fluide. L\'intégration avec l\'app est parfaite, et mes clients adorent voir leurs progrès en direct.',
    avatar: 'TG'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-audiowide text-5xl md:text-7xl mb-6 bg-gradient-to-r from-[#7d48ec] to-white bg-clip-text text-transparent">
            Ils nous font confiance
          </h2>
          <div className="flex items-center justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-[#7d48ec] text-[#7d48ec]" />
            ))}
          </div>
          <p className="text-2xl text-[#a8a8a7]">5/5 • Plus de 4 avis</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-8 rounded-2xl border-2 border-[#522b6c]/30 hover:border-[#7d48ec] transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#7d48ec]/0 to-[#522b6c]/0 group-hover:from-[#7d48ec]/10 group-hover:to-[#522b6c]/10 rounded-2xl transition-all duration-300"></div>

              <div className="relative z-10">
                <Quote className="w-10 h-10 text-[#7d48ec] mb-4 opacity-50" />

                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#7d48ec] text-[#7d48ec]" />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#522b6c] to-[#7d48ec] flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg mb-6">
            Rejoignez des milliers d'athlètes satisfaits
          </p>
          <button className="group relative bg-white text-[#7d48ec] px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 transform hover:scale-105 border-2 border-white">
            <span className="relative z-10">Voir tous les avis</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#522b6c] to-[#7d48ec] opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
