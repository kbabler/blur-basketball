import { Lock } from 'lucide-react';

const App = () => {
  return (
    <main className="holding-shell">
      <div className="ambient ambient-left" aria-hidden="true"></div>
      <div className="ambient ambient-right" aria-hidden="true"></div>

      <section className="holding-card" aria-label="Holding screen">
        <img
          src="/Blur-logo.png"
          alt="Blur Basketball logo"
          className="holding-logo"
        />

        <div className="status-pill">
          <Lock size={16} aria-hidden="true" />
          <span>Locked</span>
        </div>

        <h1 className="holding-title">We are getting things ready.</h1>
        <p className="holding-text">
          Blur Basketball is temporarily in holding mode. Please check back soon.
        </p>
      </section>
    </main>
  );
};

export default App;
