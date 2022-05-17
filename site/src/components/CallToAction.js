const CallToAction = () => {
  return (
    <section className="call-to-action bg-color-secondary section-animate-icons">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-5 order-lg-last">
            <div className="cta-illustrations text-center text-lg-right content-mb-md-50">
              <img
                src="/assets/img/cta-illustrations.png"
                alt="Image"
                className="animate-float-bob-y"
              />
            </div>
          </div>
          <div className="col-lg-7 col-md-10">
            <div className="cta-content">
              <h2 className="title">
                Ready To Get Our Professional SEO Service Solutions ?{" "}
              </h2>
              <p className="subtitle">
                25 Years Of Experience We Provide SEO Services
              </p>
              <p className="cta-note">Get Every Single Updates</p>
              <a href="#" className="template-btn">
                Let’s Talk SEO Expertise{" "}
                <i className="far fa-long-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Animate Icons */}
      <div className="animate-icons">
        <img
          src="/assets/img/shape/dots-circle.png"
          alt="Icon"
          className="dots-circle"
        />
      </div>
      <div className="cta-shape">
        <img src="/assets/img/shape/cta-shape.png" alt="Shape" />
      </div>
    </section>
  );
};
export default CallToAction;
