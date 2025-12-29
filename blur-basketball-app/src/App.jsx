import React from 'react';

const BlurBasketball = () => {
  const primaryGreen = '#82C99B'; // From your logo
  const darkText = '#2D3436';

  return (
    <div style={{ fontFamily: 'sans-serif', color: darkText, minHeight: '100vh', margin: 0 }}>
      {/* Header / Logo Section */}
      <header style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '4rem', 
          fontStyle: 'italic', 
          fontWeight: '900', 
          color: primaryGreen, 
          letterSpacing: '-2px',
          margin: 0 
        }}>BLUR</h1>
        <p style={{ fontSize: '1.2rem', color: '#636e72', marginTop: '10px' }}>
          Basketball Stats & Performance Tracking
        </p>
      </header>

      {/* Hero Section */}
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
        <div style={{ background: '#f9f9f9', padding: '60px 20px', borderRadius: '24px', border: `1px solid ${primaryGreen}33` }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Unlock Your Game's Potential</h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 30px', lineHeight: '1.6' }}>
            Track stats, analyze performance, and connect with your team through the Blur platform.
          </p>
          <button style={{
            background: primaryGreen,
            color: 'white',
            border: 'none',
            padding: '15px 40px',
            borderRadius: '12px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Get Started
          </button>
        </div>

        {/* Features Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '40px' }}>
          {['Stats', 'Analyze', 'Connect'].map((feature) => (
            <div key={feature} style={{ padding: '30px', background: 'white', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: primaryGreen }}>{feature}</h3>
              <p style={{ fontSize: '0.9rem', color: '#636e72' }}>Comprehensive tools built for the modern player.</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlurBasketball;
