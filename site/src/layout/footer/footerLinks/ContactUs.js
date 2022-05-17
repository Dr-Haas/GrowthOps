const ContactUs = ({ logo, icons }) => {
  return (
    <div className="widget contact-widget">
      <h4 className="widget-title">Contact</h4>
      <div className="contact-content">
        <div className="phone-number">
          <span>Numéro de téléphone</span>
          <a href="tel:+33650507317">
            <i className="far fa-phone" />
            +33 6 50 50 73 17
          </a>
        </div>
        
        <h5>Adresse</h5>
        <p>
          Campus Cyber, 5 Rue Bellini, <br /> 92800 Puteaux <br />
          <a href="mailto:support@Tilkeinfo.com">contact.growthops@gmail.com</a>
        </p>
        {!icons && (
          <img
            src={`/assets/img/${logo ? logo : "logo-white"}.png`}
            alt="Growth-ops"
          />
        )}
      </div>
      {icons && (
        <ul className="social-links">
          <li>
            <span>Follow</span>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-facebook-square" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter-square" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-behance-square" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-linkedin" />
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};
export default ContactUs;
