import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ComparisonSection } from '@/components/ComparisonSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { FAQSection } from '@/components/Footer/FAQSection';
import { Footer } from '@/components/Footer/Footer';

function App() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ComparisonSection />
      <FeaturesSection />
      <FAQSection />
      <Footer />
    </main>
  );
}

export default App;