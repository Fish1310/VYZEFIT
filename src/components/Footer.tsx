import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#522b6c]/30 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="font-audiowide text-3xl mb-4 bg-gradient-to-r from-[#7d48ec] to-[#a8a8a7] bg-clip-text text-transparent">
              VYZE FIT
            </h3>
            <p className="text-gray-400 leading-relaxed">
              L'avenir de la performance sportive connectée
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#7d48ec] transition-colors duration-300">À propos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#7d48ec] transition-colors duration-300">Produit</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#7d48ec] transition-colors duration-300">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#7d48ec] transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-gradient-to-br from-[#522b6c] to-[#7d48ec] p-3 rounded-full hover:scale-110 transition-transform duration-300">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-gradient-to-br from-[#522b6c] to-[#7d48ec] p-3 rounded-full hover:scale-110 transition-transform duration-300">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-gradient-to-br from-[#522b6c] to-[#7d48ec] p-3 rounded-full hover:scale-110 transition-transform duration-300">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-gradient-to-br from-[#522b6c] to-[#7d48ec] p-3 rounded-full hover:scale-110 transition-transform duration-300">
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#522b6c]/30 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            © 2025 Vyze Fit. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-[#7d48ec] transition-colors duration-300">Mentions légales</a>
            <a href="#" className="text-gray-500 hover:text-[#7d48ec] transition-colors duration-300">Confidentialité</a>
            <a href="#" className="text-gray-500 hover:text-[#7d48ec] transition-colors duration-300">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
