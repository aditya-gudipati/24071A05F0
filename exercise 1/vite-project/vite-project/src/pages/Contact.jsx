const Contact = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Get in Touch</h1>
        <p>Have questions? We're here to help. Reach out to our admissions team or drop by our campus.</p>
      </div>

      <div className="contact-container">
        <div className="contact-details">
          <div className="contact-item">
            <h4>General Inquiries</h4>
            <p>info@vnrvjiet.in</p>
          </div>
          <div className="contact-item">
            <h4>Admissions Office</h4>
            <p>+91 9876543210</p>
          </div>
          <div className="contact-item">
            <h4>Main Campus</h4>
            <p>Near Pragathi Nagar Kaman<br/>Bachupally, 500094</p>
          </div>
        </div>
        
        <div className="contact-details">
          <div className="contact-item">
            <h4>Operating Hours</h4>
            <p>Monday - Friday<br/>8:00 AM - 6:00 PM</p>
          </div>
          <div className="contact-item">
            <h4>Student Support</h4>
            <p>support@vnrvjiet.in</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
