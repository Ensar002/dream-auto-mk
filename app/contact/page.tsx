export default function ContactPage() {
  return (
    <main>

      <section className="contact-hero">
        <h1>Contact <span>Us</span></h1>
        <p>Have questions? We are here to help you find your dream car.</p>
      </section>

      <section className="contact-container">

        <div className="contact-info">
          <h2>Get In Touch</h2>

          <p>
            Visit our dealership or contact us.
            Our team is ready to help you find your perfect car.
          </p>

          <div className="contact-item">
            <h3>Our Location</h3>
            <p>Skopje, North Macedonia</p>
          </div>

          <div className="contact-item">
            <h3>Phone Number</h3>
            <p>+389 70 123 456</p>
          </div>

          <div className="contact-item">
            <h3>Email Address</h3>
            <p>info@dreamautomk.com</p>
          </div>

          <div className="contact-item">
            <h3>Working Hours</h3>
            <p>Monday - Saturday: 09:00 - 18:00</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>

         <form>
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" required />

            <label>Your Email</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Subject</label>
            <input type="text" placeholder="Enter subject" />

            <label>Your Message</label>
            <textarea rows={5} placeholder="Write your message..." required />

            <button type="submit">Send Message</button>
          </form>
        </div>

      </section>

    </main>
  );
}