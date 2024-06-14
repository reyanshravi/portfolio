import React from "react";
import { IonIcon } from "@ionic/react";

import {
  logoInstagram,
  logoGithub,
  logoWhatsapp,
  logoLinkedin,
} from "ionicons/icons"; // Assuming you are using ionic-react for icons

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-content section-content">
        <p className="section-subtitle">Contact</p>
        <h2 className="h3 section-title">
          Have You Any Project? Please Drop a Message
        </h2>
        <p className="section-text">
          Get in touch and let me know how I can help. Fill out the form and
          I’ll be in touch as soon as possible.
        </p>
        <ul className="contact-list">
          <ContactListItem
            icon="location-outline"
            title="Address:"
            content={
              <address className="contact-info">
                Naubatpur, Patna, Bihar, 801109
              </address>
            }
          />
          <ContactListItem
            icon="call-outline"
            title="Phone:"
            content={
              <>
                <a href="tel:01234567789" className="contact-info">
                  (+91) 8298922623
                </a>
              </>
            }
          />
          <ContactListItem
            icon="mail-outline"
            title="Email:"
            content={
              <>
                <a href="mailto:info@jack.com" className="contact-info">
                  ravi8298922623@gmail.com
                </a>
                <a href="mailto:support@jack.com" className="contact-info">
                  reyansh2623@gmail.com
                </a>
              </>
            }
          />
          <li>
            <ul className="contact-social-list flex justify-center gap-10 pt-10">
              <li>
                <a href="#" className="contact-social-link text-2xl">
                  <div className="tooltip">InstaGram</div>
                  <IonIcon icon={logoInstagram} />
                </a>
              </li>
              <li>
                <a href="#" className="contact-social-link text-2xl">
                  <div className="tooltip">Github</div>
                  <IonIcon icon={logoGithub} />
                </a>
              </li>
              <li>
                <a href="#" className="contact-social-link text-2xl">
                  <div className="tooltip">Whatsapp</div>
                  <IonIcon icon={logoWhatsapp} />
                </a>
              </li>
              <li>
                <a href="#" className="contact-social-link text-2xl">
                  <div className="tooltip">LinkedIn</div>
                  <IonIcon icon={logoLinkedin} />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <ContactForm />
    </section>
  );
};

const ContactListItem = ({ icon, title, content }) => (
  <li className="contact-list-item">
    <div className="contact-item-icon">
      <IonIcon name={icon}></IonIcon>
    </div>
    <div className="wrapper">
      <h3 className="h4 contact-item-title">{title}</h3>
      {content}
    </div>
  </li>
);

const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
    console.log("Form data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <FormInput
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="e.g Krishna"
        icon="person-circle"
      />
      <FormInput
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="e.g test@mail.com"
        icon="mail"
      />
      <FormInput
        label="Phone"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        icon="call"
      />
      <FormTextarea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Write message..."
        icon="chatbubbles"
      />
      <button type="submit" className="btn btn-primary">
        Send
      </button>
    </form>
  );
};

const FormInput = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  icon,
}) => (
  <div className="form-wrapper">
    <label htmlFor={name} className="form-label">
      {label}
    </label>
    <div className="input-wrapper">
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="input-field"
      />
      <IonIcon name={icon}></IonIcon>
    </div>
  </div>
);

const FormTextarea = ({ label, name, value, onChange, placeholder, icon }) => (
  <div className="form-wrapper">
    <label htmlFor={name} className="form-label">
      {label}
    </label>
    <div className="input-wrapper">
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="input-field"
      ></textarea>
      <IonIcon name={icon}></IonIcon>
    </div>
  </div>
);

export default Contact;
