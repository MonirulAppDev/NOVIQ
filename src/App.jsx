import React from 'react';
import Navbar from './presentation/components/Navbar';
import Hero3D from './presentation/components/Hero3D';
import ServicesSection from './presentation/components/ServicesSection';
import Footer from './presentation/components/Footer';

function App() {
  return (
    <div className="min-h-screen selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero3D />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
