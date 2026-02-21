import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section reveal">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>

        <p className="contact-subtitle">
          I'm currently available for new opportunities. Whether you have a
          question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="contact-cards">

          {/* Email */}
          <div className="contact-card">
            <div className="icon purple">
              <Mail size={26} />
            </div>
            <h3>Email</h3>
            <p className="contact-text">
              <a
                href="mailto:maheshgurunath2003@gmail.com"
                className="contact-link"
              >
                maheshgurunath2003@gmail.com
              </a>
            </p>
          </div>

          {/* Phone */}
          <div className="contact-card">
            <div className="icon pink">
              <Phone size={26} />
            </div>
            <h3>Phone</h3>
            <p className="contact-text">
              <a
                href="tel:+917619304148"
                className="contact-link"
              >
                +91 7619304148
              </a>
            </p>
          </div>

          {/* WhatsApp */}
          <div className="contact-card">
            <div className="icon green">
              <FaWhatsapp size={26} />
            </div>
            <h3>WhatsApp</h3>
            <p className="contact-text">
              <a
                href="https://wa.me/917619304148"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Chat on WhatsApp
              </a>
            </p>
          </div>

          {/* Location */}
          <div className="contact-card">
            <div className="icon blue">
              <MapPin size={26} />
            </div>
            <h3>Location</h3>
            <p className="contact-text">
              Belagavi, Karnataka - 591247
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;