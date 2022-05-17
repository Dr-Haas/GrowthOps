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

const Index4Page = () => {
  return (
    <Fragment>
      <section className="hero-area-two have-animate-icons">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="hero-content wow fadeInUp" data-wow-delay="0.3s">
                <span className="tagline">Best Digital Agency</span>
                <h1 className="hero-title">
                  Digital Solutions Agency For Growth Business
                </h1>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam aperiam eaque abillo
                  inventore veritatis
                </p>
                <a href="#" className="template-btn">
                  Get Started With Us <i className="far fa-long-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-12">
              <div className="hero-img wow fadeInDown" data-wow-delay="0.4s">
                <img
                  src="/assets/img/hero/hero-illustration-two.png"
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
            src="/assets/img/shape/wave-line.png"
            alt="particles"
            className="icon-two animate-float-bob-x"
          />
          <img
            src="/assets/img/shape/stars.png"
            alt="particles"
            className="icon-three animate-float-bob-x"
          />
          <img
            src="/assets/img/shape/triangle.png"
            alt="particles"
            className="icon-four animate-float-bob-y"
          />
          <img
            src="/assets/img/shape/triangle-2.png"
            alt="particles"
            className="icon-five animate-rotate-me"
          />
          <img
            src="/assets/img/shape/circle.png"
            alt="particles"
            className="icon-six animate-zoom-fade"
          />
          <img
            src="/assets/img/shape/circle-small.png"
            alt="particles"
            className="icon-seven animate-float-bob-y"
          />
        </div>
      </section>
      {/*====== End Hero Area ======*/}
      {/*====== Service Section Start ======*/}
      <section className="service-section section-gap">
        <div className="container">
          <div className="section-heading text-center mb-30">
            <h2 className="title">Services We Provide</h2>
            <span className="tagline">Best SEO Optimization Agency</span>
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
                      <a>Web Development</a>
                    </Link>
                  </h5>
                  <p>Amet consectetur adipi scing elit sed eiusmod tempor</p>
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
                      <a>Marketing Strategy</a>
                    </Link>
                  </h5>
                  <p>Amet consectetur adipi scing elit sed eiusmod tempor</p>
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
                  <p>Amet consectetur adipi scing elit sed eiusmod tempor</p>
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
                      <a>Market Analysis</a>
                    </Link>
                  </h5>
                  <p>Amet consectetur adipi scing elit sed eiusmod tempor</p>
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
                      <a>Cyber Security</a>
                    </Link>
                  </h5>
                  <p>Amet consectetur adipi scing elit sed eiusmod tempor</p>
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
                      src="/assets/img/feature-1.jpg"
                      alt="Image"
                      className="animate-float-bob-y"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src="/assets/img/feature-2.jpg"
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
                      25 Years Of Experience We Provide Solutions
                    </h2>
                    <span className="tagline">
                      Best SEO Optimization Agency
                    </span>
                  </div>
                  <div className="feature-lists">
                    <div className="simple-icon-box icon-left mb-30">
                      <div className="icon">
                        <i className="flaticon-crop" />
                      </div>
                      <div className="content">
                        <h4 className="title">Professional Agency</h4>
                        <p>
                          Consectetur adipisci velitsed quia non numquam eius
                          mode tempralabore et dolore magnam aliquam quaerat
                        </p>
                      </div>
                    </div>
                    <div className="simple-icon-box icon-left mb-30">
                      <div className="icon">
                        <i className="flaticon-crop" />
                      </div>
                      <div className="content">
                        <h4 className="title">Best Solutions Provider</h4>
                        <p>
                          Consectetur adipisci velitsed quia non numquam eius
                          mode tempralabore et dolore magnam aliquam quaerat
                        </p>
                      </div>
                    </div>
                    <div className="simple-icon-box icon-left mb-30">
                      <div className="icon">
                        <i className="flaticon-crop" />
                      </div>
                      <div className="content">
                        <h4 className="title">Web &amp; Design Solutions</h4>
                        <p>
                          Consectetur adipisci velitsed quia non numquam eius
                          mode tempralabore et dolore magnam aliquam quaerat
                        </p>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="template-btn mt-10">
                    Start a Project <i className="far fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Feature Section End ======*/}
        {/*====== Counter Section Start ======*/}
        <section className="counter-section counter-boxed">
          <div className="container bg-color-primary section-wave-bg">
            <div className="counter-items row justify-content-lg-between justify-content-center">
              <div className="col-xl-2 col-lg-3 col-sm-5">
                <div className="counter-item counter-white mt-40">
                  <div className="counter-wrap">
                    <Counter end={156} />
                    <span className="suffix">+</span>
                  </div>
                  <h6 className="title">Happy Clients</h6>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-5">
                <div className="counter-item counter-white mt-40">
                  <div className="counter-wrap">
                    <Counter end={7856} />
                    <span className="suffix">+</span>
                  </div>
                  <h6 className="title">Project Complete</h6>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-5">
                <div className="counter-item counter-white mt-40">
                  <div className="counter-wrap">
                    <Counter end={25} />
                    <span className="suffix">+</span>
                  </div>
                  <h6 className="title">Years Of Experience</h6>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-5">
                <div className="counter-item counter-white mt-40">
                  <div className="counter-wrap">
                    <Counter end={8563} />
                    <span className="suffix">+</span>
                  </div>
                  <h6 className="title">Winning Awards</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Counter Section End ======*/}
        {/*====== Portfolio Section Start ======*/}
        <section className="portfolio-section section-gap">
          <div className="container">
            <div className="section-heading text-center mb-50">
              <h2 className="title">Some Of Our Latest Projects</h2>
              <span className="tagline">Best SEO Optimization Agency</span>
            </div>
            <LatestProjectsIsotop />
          </div>
        </section>
        {/*====== Portfolio Section End ======*/}
      </div>
      {/*====== Consultation Section Start ======*/}
      <section
        className="consultation-section section-gap bg-cover-center triangle-pattern-left have-blob-image overflow-hidden"
        style={{ backgroundImage: "url(assets/img/consultation-bg.jpg)" }}
      >
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
        <div className="blob-image">
          <img src="/assets/img/shape/blob-white.png" alt="" />
        </div>
      </section>
      {/*====== Consultation Section End ======*/}
      {/*====== Call To Action Start ======*/}
      <section className="call-to-action style-two bg-color-primary">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-7">
              <div className="cta-content">
                <h2 className="title">
                  Ready To Get Our Professional SEO Service Solutions ?{" "}
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
      </section>
      {/*====== Call To Action End ======*/}
      <div className="section-blob-bg-two">
        {/*====== Testimonial Section Start ======*/}
        <section className="testimonial-section section-gap">
          <div className="container">
            <div className="testimonial-area">
              <div className="section-heading text-center mb-50">
                <h2 className="title">What’s Clients Say</h2>
                <span className="tagline">Best SEO Optimization Agency</span>
              </div>
              <TestimonialTwoSlider />
            </div>
          </div>
        </section>
        {/*====== Testimonial Section End ======*/}
        {/*====== Faq Section Start ======*/}
        <section className="faq-section">
          <div className="container">
            <div className="content-boxed">
              <div className="content-left">
                <div
                  className="qolle-video"
                  style={{ backgroundImage: "url(assets/img/faq-video.jpg)" }}
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
                  <h2 className="title">Freequently Asked Questions</h2>
                  <span className="tagline">Best SEO Optimization Agency</span>
                </div>
                <FaqAccordion extraClass={"__acc"} />
              </div>
            </div>
          </div>
        </section>
        {/*====== Faq Section End ======*/}
        {/*====== Pricing Sectioin Start ======*/}
        <section className="pricing-section pricing-section-line section-gap">
          <div className="container">
            <div className="section-heading text-center mb-50">
              <h2 className="title">Best Pricing For Business</h2>
              <span className="tagline">Best SEO Optimization Agency</span>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="pricing-table mt-30">
                  <h4 className="plan-name">Basic Plan</h4>
                  <p>
                    Amet consectetu adipiscing elit sedie eiusmod tempor incidie
                    labore
                  </p>
                  <div className="plan-price">
                    <span className="currency">$</span>
                    <span className="price">29.57</span>
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
        </section>
        {/*====== Pricing Sectioin End ======*/}
      </div>
      {/*====== Latest New Section Start ======*/}
      <section className="bg-color-primary-7 section-gap triangle-pattern-right">
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
      </section>
    </Fragment>
  );
};
export default Index4Page;
