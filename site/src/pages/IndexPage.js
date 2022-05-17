import dynamic from "next/dynamic";
import Link from "next/link";
import { Fragment } from "react";
import Counter from "../components/Counter";
import FaqAccordion from "../components/FaqAccordion";
import FreeConsultation from "../components/FreeConsultation";
import TestimonialTwoSlider from "../components/TestimonialTwoSlider";


const LatestProjectsIsotop = dynamic(
  () => import("../components/LatestProjectsIsotop"),
  {
    ssr: false,
  }
);

const IndexPage = () => {
  return (
    <Fragment>
      <section className="hero-area-two have-animate-icons">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="hero-content wow fadeInUp" data-wow-delay="0.3s">
                <span className="tagline">Growth Marketing</span>
                <h1 className="hero-title">
                  La solution de <span>Growth</span> pour les cabinets
                </h1>
                <p>
                  Comment se démarquer de la concurrence, proposer une stratégie
                  marketing créative, améliorer l'acquisition clients sur le long
                  terme ? On vous aide à mettre en place les nouvelle méthode de
                  travail au sein de votre stratégie digitale.
                </p>
                <a href="#" className="template-btn">
                  Commencer <i className="far fa-long-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-12">
              <div className="hero-img wow fadeInDown" data-wow-delay="0.4s">
                <img
                  src="/assets/img/hero/growth-team.png"
                  alt="Illustration"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="animate-icons">
          <img
            src="/assets/img/shape/gradient-pipe.png"
            alt="particles"
            className="icon-one animate-rotate-me"
          />
          <img
            src="/assets/img/header/2.png"
            alt="particles"
            className="icon-two animate-float-bob-x"
          />
          <img
            src="/assets/img/shape/stars.png"
            alt="particles"
            className="icon-three animate-float-bob-x"
          />
          {/* <img
            src="/assets/img/header/3.png"
            alt="particles"
            className="icon-four animate-float-bob-y"
          /> */}
          <img
            src="/assets/img/header/3.png"
            alt="particles"
            className="icon-five animate-rotate-me"
          />
          {/* <img
            src="/assets/img/header/1.png"
            alt="particles"
            className="icon-seven animate-float-bob-y"
          /> */}
        </div>
      </section>
      {/*====== End Hero Area ======*/}
      {/*====== Service Section Start ======*/}
      <section className="service-section section-gap">
        <div className="container">
          <div className="section-heading text-center mb-30">
            <h2 className="title">Nos Service</h2>
            <span className="tagline">L'importance de la conception centrée sur l'Humain</span>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 wow fadeInUp">
              <div className="iconic-box icon-left mt-30">
                <div className="icon">
                  <img src="/assets/img/icon/code.png" alt="Icon" />
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link href="/service-details">
                      <a>Développement Web</a>
                    </Link>
                  </h5>
                  <p>Landing page, site marchant, Formulaire en ligne, QVE</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 wow fadeInUp">
              <div className="iconic-box icon-left mt-30">
                <div className="icon">
                  <img src="/assets/img/icon/mike.png" alt="Icon" />
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link href="/service-details">
                      <a>Customer Success</a>
                    </Link>
                  </h5>
                  <p>Améliorer la qualitée de vos relations clients</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 wow fadeInUp">
              <div className="iconic-box icon-left mt-30">
                <div className="icon">
                  <img src="/assets/img/icon/laptop.png" alt="Icon" />
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link href="/service-details">
                      <a>IT Consultations</a>
                    </Link>
                  </h5>
                  <p>Audit, diagnostic métier, design, conseil stratégique</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 wow fadeInUp">
              <div className="iconic-box icon-left mt-30">
                <div className="icon">
                  <img src="/assets/img/icon/bar-chart.png" alt="Icon" />
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link href="/service-details">
                      <a>Data Engineering</a>
                    </Link>
                  </h5>
                  <p>Structuration, nettoyage de vos jeux de données </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 wow fadeInUp">
              <div className="iconic-box icon-left mt-30">
                <div className="icon">
                  <img src="/assets/img/icon/cloud-download.png" alt="Icon" />
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link href="/service-details">
                      <a>Data Scrapping</a>
                    </Link>
                  </h5>
                  <p>Automatiser la récolte de données </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Service Section End ======*/}
      <div className="section-blob-bg">
        {/*====== Feature Section Start ======*/}
        <section className="feature-section section-gap-bottom">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="feature-images row align-items-center content-mb-md-50">
                  <div className="col-6">
                    <img
                      src="/assets/img/our-vision-1.png"
                      alt="Image"
                      className="animate-float-bob-y"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src="/assets/img/our-vision-2.png"
                      alt="Image"
                      className="animate-float-bob-y"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-10">
                <div className="feature-text-block content-l-spacing">
                  <div className="section-heading mb-50">
                    <h2 className="title">
                      Un accompagnement <span>Humain</span> pour des solutions <span>digitales</span>
                    </h2>
                    <span className="tagline">
                      Laissez vous portez par notre vision
                    </span>
                  </div>
                  <div className="feature-lists">
                    <div className="simple-icon-box icon-left mb-30">
                      <div className="icon">
                        <i className="flaticon-crop" />
                      </div>
                      <div className="content">
                        <h4 className="title">Expertise digitale 360°</h4>
                        <p>
                          Optenez une vision panoramique du monde digital et de ces différentes possibilités stratégique
                        </p>
                      </div>
                    </div>
                    <div className="simple-icon-box icon-left mb-30">
                      <div className="icon">
                        <i className="flaticon-crop" />
                      </div>
                      <div className="content">
                        <h4 className="title">Votre partenaire Digital</h4>
                        <p>
                          Soyez accompagné pour faire les bons choix, mais également pour éviter les pièges
                        </p>
                      </div>
                    </div>
                    <div className="simple-icon-box icon-left mb-30">
                      <div className="icon">
                        <i className="flaticon-crop" />
                      </div>
                      <div className="content">
                        <h4 className="title">Agence marketing 3.0</h4>
                        <p>
                          À l'aide d'outil de tracking, nous mettons l'accent sur l'expérience utilisateur de vos clients
                        </p>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="template-btn mt-10">
                    Commencer un projet <i className="far fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Feature Section End ======*/}
        {/*====== Counter Section Start ======*/}
        <section className="counter-section counter-boxed">
          <div
            className="container bg-cover-center"
            style={{
              backgroundImage:
                "url(assets/img/shape/dark-gradient-bg-icons.jpg)",
            }}
          >
            <div className="counter-items row justify-content-lg-between justify-content-center">
              <div className="col-xl-2 col-lg-3 col-sm-5">
                <div className="counter-item counter-white mt-40">
                  <div className="counter-wrap">
                    <Counter end={84} />
                    <span className="suffix"></span>
                  </div>
                  <h6 className="title">Noeud de réseau</h6>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-5">
                <div className="counter-item counter-white mt-40">
                  <div className="counter-wrap">
                    <Counter end={14} />
                    <span className="suffix"></span>
                  </div>
                  <h6 className="title">Missions</h6>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-5">
                <div className="counter-item counter-white mt-40">
                  <div className="counter-wrap">
                    <span className="suffix">+</span>
                    <Counter end={5} />
                  </div>
                  <h6 className="title">Année d'expérience</h6>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-5">
                <div className="counter-item counter-white mt-40">
                  <div className="counter-wrap">
                    <Counter end={263} />
                    <span className="suffix">K</span>
                  </div>
                  <h6 className="title">Budget gérer</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Counter Section End ======*/}
        {/* ====== Portfolio Section Start ======*/}
        {/* <section className="portfolio-section section-gap">
          <div className="container">
            <div className="section-heading text-center mb-50">
              <h2 className="title">Some Of Our Latest Projects</h2>
              <span className="tagline">Best SEO Optimization Agency</span>
            </div>
            <LatestProjectsIsotop />
          </div>
        </section> */}
        {/*====== Portfolio Section End ====== */}
      </div>
      {/*====== Consultation Section Start ======*/}
      {/* <section className="consultation-section section-gap overflow-hidden">
        <div className="container">
          <div className="row justify-content-lg-between align-items-center justify-content-center">
            <div className="col-lg-5 col-md-10">
              <div className="consultation-form-area">
                <FreeConsultation />
              </div>
            </div>
            <div className="col-lg-7 col-md-10">
              <div className="fancy-image-gallery content-l-spacing content-mt-md-50">
                <div className="images-wrap">
                  <div className="image-one wow fadeInUp" data-wow-delay="0.1s">
                    <img src="/assets/img/fancy-gallery/01.jpg" alt="Image" />
                  </div>
                  <div className="image-two wow fadeInUp" data-wow-delay="0.2s">
                    <img src="/assets/img/fancy-gallery/02.jpg" alt="Image" />
                  </div>
                  <div
                    className="image-three wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <img src="/assets/img/fancy-gallery/03.jpg" alt="Image" />
                  </div>
                  <div
                    className="image-four wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <img src="/assets/img/fancy-gallery/04.jpg" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== Consultation Section End ======*/}
      {/*====== Call To Action Start ======*/}
      {/* <section
        className="call-to-action style-two bg-cover-center"
        style={{
          backgroundImage: "url(assets/img/shape/dark-gradient-bg.jpg)",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-7">
              <div className="cta-content">
                <h2 className="title">
                  Ready To Get Our Professional SEO Service{" "}
                  <span>Solutions ?</span>{" "}
                </h2>
                <p className="subtitle">
                  25 Years Of Experience We Provide SEO Services
                </p>
              </div>
            </div>
            <div className="col-auto">
              <p className="cta-note">Get Every Single Updates</p>
              <a href="#" className="template-btn bordered-btn bordered-white">
                Let’s Talk SEO Expertise{" "}
                <i className="far fa-long-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="cta-shape">
          <img src="/assets/img/shape/cta-shape.png" alt="Shape" />
        </div>
      </section> */}
      {/*====== Call To Action End ======*/}
      <div className="section-blob-bg-two">
        {/*====== Testimonial Section Start ======*/}
        {/* <section className="testimonial-section section-gap">
          <div className="container">
            <div className="testimonial-area">
              <div className="section-heading text-center mb-50">
                <h2 className="title">What’s Clients Say</h2>
                <span className="tagline">Best SEO Optimization Agency</span>
              </div>
              <TestimonialTwoSlider />
            </div>
          </div>
        </section> */}
        {/*====== Testimonial Section End ======*/}
        {/*====== Faq Section Start ======*/}
        <section className="faq-section">
          <div className="container">
            <div className="content-boxed">
              <div className="content-left">
                <div
                  className="qolle-video"
                  style={{ backgroundImage: "url(assets/img/oh-growth.png)" }}
                >
                  <a
                    href="https://www.youtube.com/watch?v=XSGBVzeBUbk"
                    className="video-popup"
                    data-lity=""
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
              <div className="content-right">
                <div className="section-heading mb-30">
                  <h2 className="title">
                    Questions <span>fréquemment</span> posées
                  </h2>
                </div>
                <FaqAccordion extraClass={"__"} />
              </div>
            </div>
          </div>
        </section>
        {/*====== Faq Section End ======*/}
        {/*====== Pricing Sectioin Start ======*/}
        {/* <section className="pricing-section pricing-section-line section-gap">
          <div className="container">
            <div className="section-heading text-center mb-50">
              <h2 className="title">Nos formules</h2>
              <span className="tagline">L'importance de la conception centrée sur l'Humain</span>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="pricing-table mt-30">
                  <h4 className="plan-name">Basic Plan</h4>
                  <p>
                    Mission ponctuel
                  </p>
                  <div className="plan-price">
                    <span className="price">29.57</span>
                    <span className="currency">€</span>
                  </div>
                  <a href="#" className="template-btn bordered-btn">
                    Choose Package <i className="far fa-long-arrow-right" />
                  </a>
                  <p>
                    Quis autem vel eumcur reprehenderit ea voluptate velit esse
                    quam
                  </p>
                  <ul className="feature-list">
                    <li>
                      <i className="far fa-check" /> 15 Days Money Back
                      Guarantee
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="pricing-table featured-plan mt-30">
                  <h4 className="plan-name">Standard Plan</h4>
                  <p>
                    Amet consectetu adipiscing elit sedie eiusmod tempor incidie
                    labore
                  </p>
                  <div className="plan-price">
                    <span className="currency">$</span>
                    <span className="price">49.86</span>
                  </div>
                  <a href="#" className="template-btn bordered-btn">
                    Choose Package <i className="far fa-long-arrow-right" />
                  </a>
                  <p>
                    Quis autem vel eumcur reprehenderit ea voluptate velit esse
                    quam
                  </p>
                  <ul className="feature-list">
                    <li>
                      <i className="far fa-check" /> 15 Days Money Back
                      Guarantee
                    </li>
                    <li className="disabled">
                      <i className="far fa-check" /> 6 Months Support &amp;
                      Update
                    </li>
                  </ul>
                  <span className="featured-label">Popular</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="pricing-table mt-30">
                  <h4 className="plan-name">Premium Plan</h4>
                  <p>
                    Amet consectetu adipiscing elit sedie eiusmod tempor incidie
                    labore
                  </p>
                  <div className="plan-price">
                    <span className="currency">$</span>
                    <span className="price">99.57</span>
                  </div>
                  <a href="#" className="template-btn bordered-btn">
                    Choose Package <i className="far fa-long-arrow-right" />
                  </a>
                  <p>
                    Quis autem vel eumcur reprehenderit ea voluptate velit esse
                    quam
                  </p>
                  <ul className="feature-list">
                    <li>
                      <i className="far fa-check" /> 15 Days Money Back
                      Guarantee
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/*====== Pricing Sectioin End ======*/}
      </div>
      {/*====== Latest New Section Start ======*/}
      {/* <section className="latest-news-section triangle-pattern-right">
        <div className="container">
          <div className="section-heading text-center mb-30">
            <h2 className="title">Latest Blog &amp; News</h2>
            <span className="tagline">Best SEO Optimization Agency</span>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10 wow fadeInUp">
              <div className="latest-post-box thumbnail-left mt-30">
                <div className="post-thumb">
                  <img src="/assets/img/latest-post/04.jpg" alt="" />
                </div>
                <div className="post-content">
                  <h4 className="post-title">
                    <a href="#">Guide New Suppored Modern CSS Pses</a>
                  </h4>
                  <div className="post-meta">
                    <a href="#">
                      <i className="far fa-calculator" />
                      25 September 2021
                    </a>
                  </div>
                  <p>
                    Sed ut perspiciatis unde omnis natus error sit voluptate
                    santium doloremque laudantium
                  </p>
                  <a href="#" className="template-btn bg-primary-10">
                    Read More <i className="far fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-10 wow fadeInUp">
              <div className="latest-post-box thumbnail-left mt-30">
                <div className="post-thumb">
                  <img src="/assets/img/latest-post/05.jpg" alt="" />
                </div>
                <div className="post-content">
                  <h4 className="post-title">
                    <a href="#">Online Environments That Work Well</a>
                  </h4>
                  <div className="post-meta">
                    <a href="#">
                      <i className="far fa-calculator" />
                      25 September 2021
                    </a>
                  </div>
                  <p>
                    Sed ut perspiciatis unde omnis natus error sit voluptate
                    santium doloremque laudantium
                  </p>
                  <a href="#" className="template-btn bg-primary-10">
                    Read More <i className="far fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Fragment>
  );
};
export default IndexPage;
