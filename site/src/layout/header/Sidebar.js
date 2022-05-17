const Sidebar = ({ active, close }) => {
  return (
    <div
      className={`slide-panel off-canvas-panel ${active ? "show-panel" : ""}`}
    >
      <div className="panel-overlay" onClick={() => close()} />
      <div className="panel-inner">
        <div className="canvas-logo">
          <img src="/assets/img/logo.png" alt="" />
        </div>
        <div className="about-us">
          <h5 className="canvas-widget-title">À propos de nous</h5>
          <p>
            Spécialiste en processus d'acquisition, nous mettons en place les outils, les processus et les flux de données en rapport avec la croissance pour votre entreprise.
          </p>
        </div>
        <div className="contact-us">
          <h5 className="canvas-widget-title">Nous contacter</h5>
          <ul>
            <li>
              <i className="far fa-map-marker-alt" />
             Campus Cyber, 5 Rue Bellini, 92800 Puteaux
            </li>
            <li>
              <i className="far fa-envelope-open" />
              <a href="contact.growthops@gmail.com">contact.growthops@gmail.com</a>
            </li>
            <li>
              <i className="far fa-phone" />
              <a href="tel:+33650507317">+33 6 50 50 73 17</a>
            </li>
          </ul>
        </div>
        <a href="#" className="panel-close" onClick={() => close()}>
          <i className="fal fa-times" />
        </a>
      </div>
    </div>
  );
};
export default Sidebar;
