const About = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Our Legacy of Excellence</h1>
        <p>Founded with a vision to transform education, University College has been a beacon of knowledge and innovation since 1950.</p>
      </div>
      
      <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
        <h3 style={{ color: 'var(--primary-color)', fontSize: '1.8rem', marginTop: '2rem', marginBottom: '1rem' }}>Our Mission</h3>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8' }}>
          To cultivate an inclusive and dynamic learning environment that empowers students to achieve their highest potential, fostering critical thinking, creativity, and a lifelong passion for discovery.
        </p>

        <h3 style={{ color: 'var(--primary-color)', fontSize: '1.8rem', marginBottom: '1rem' }}>Our Vision</h3>
        <p style={{ lineHeight: '1.8' }}>
          To be a globally recognized institution that leads in research, innovation, and educational excellence, shaping the future leaders who will make a profound impact on society.
        </p>
      </div>
    </div>
  );
};

export default About;
