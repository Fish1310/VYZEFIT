import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Features from './components/Features';
import AppSection from './components/App';
import Testimonials from './components/Testimonials';
import Community from './components/Community';
import Preorder from './components/Preorder';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Hero />
      <ProductShowcase />
      <Features />
      <AppSection />
      <Testimonials />
      <Community />
      <Preorder />
      <Footer />
    </div>
  );
}

export default App;
