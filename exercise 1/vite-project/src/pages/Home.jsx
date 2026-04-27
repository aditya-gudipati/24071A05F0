const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Shape Your Future</h1>
        <p>Experience world-class education with cutting-edge facilities, renowned faculty, and a vibrant campus life designed to bring out the best in you.</p>
      </div>

      <div className="feature-grid">
        <div className="feature-card">
          <h3>Excellence in Research</h3>
          <p>Join our pioneering research programs and work alongside leading experts to solve tomorrow's challenges today.</p>
        </div>
        <div className="feature-card">
          <h3>Global Community</h3>
          <p>Connect with peers from over 100 countries and build a diverse network that spans the globe.</p>
        </div>
        <div className="feature-card">
          <h3>Career Readiness</h3>
          <p>95% of our graduates find employment or pursue higher education within six months of graduation.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
