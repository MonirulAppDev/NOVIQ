import React from 'react';

const Hero = () => {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div className="glass-panel animate-fade-in" style={{ maxWidth: '800px', padding: '4rem', textAlign: 'center' }}>
        <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
          Next-Generation Experience
        </h1>
        <p className="animate-fade-in delay-100" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Discover the power of clean architecture and stunning aesthetics. Built for performance, designed for humans.
        </p>
        <div className="animate-fade-in delay-200" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button className="btn-primary">Get Started</button>
          <button className="btn-outline">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
