import Link from "next/link";
import { Fragment } from "react";
import Counter from "../components/Counter";
import FaqAccordion from "../components/FaqAccordion";

const Index3Page = () => {
  return (
    <Fragment>
      <section className="hero-area-three">
        <div className="container">
          <div className="row align-items-end justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-10">
              <div className="hero-content">
                <h1 className="hero-title wow fadeInDown" data-wow-delay="0.3s">
                  Grow Business with the right marketers
                </h1>
                <p className="wow fadeInLeft" data-wow-delay="0.4s">
                  Sed ut perspiciatis unde iste natus error siluptatem
                  accusantium doloremque laudantium totam rem
                </p>
                <ul className="hero-btns">
                  <li className="wow fadeInUp" data-wow-delay="0.5s">
                    <a href="#" className="template-btn">
                      Start a Project <i className="far fa-long-arrow-right" />
                    </a>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay="0.6s">
                    <a
                      href="https://www.youtube.com/watch?v=XSGBVzeBUbk"
                      className="video-btn"
                      data-lity=""
                    >
                      <i className="fas fa-play" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-9 col-sm-10">
              <div
                className="hero-img text-center text-lg-right wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <img
                  src="/assets/img/hero/hero-illustration-three.png"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Hero Area ======*/}
      {/*====== Start Service Section ======*/}
      <section className="service-section section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-heading text-center mb-40">
                <h2 className="title">
                  Smarter Way Serve Digital Product Marketing
                </h2>
                <span className="tagline">Best Marketing Agency Solutions</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid fluid-p-70">
          <div className="row justify-content-center services-loop">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-9">
              <div
                className="image-content-box mt-30 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="thumbnail">
                  <img src="/assets/img/image-box/01.jpg" alt="Image" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Product Engineering</a>
                    </Link>
                  </h4>
                  <span>Marketing Analysis</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-9">
              <div
                className="image-content-box mt-30 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="thumbnail">
                  <img src="/assets/img/image-box/02.jpg" alt="Image" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/service-details">Web &amp; IT Consulting</Link>
                  </h4>
                  <span>Digital Marketing</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-9">
              <div
                className="image-content-box mt-30 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="thumbnail">
                  <img src="/assets/img/image-box/03.jpg" alt="Image" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/service-details">Innovative Strategy</Link>
                  </h4>
                  <span>Marketing Analysis</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-9">
              <div
                className="image-content-box mt-30 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="thumbnail">
                  <img src="/assets/img/image-box/01.jpg" alt="Image" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/service-details">Business Strategy</Link>
                  </h4>
                  <span>Marketing Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service Section ======*/}
      {/*====== Skills Section Start ======*/}
      <section className="skill-section section-gap-bottom">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="skill-image text-center text-lg-left content-mb-md-50 wow fadeInLeft">
                <img
                  src="/assets/img/skill-image-3.png"
                  alt="Image"
                  className="animate-float-bob-y"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-9">
              <div className="skill-content pl-xl-3">
                <div className="section-heading mb-20">
                  <h2 className="title">
                    We’re Very Experience In Digital marketing
                  </h2>
                  <span className="tagline">Best Digital Agency Solutions</span>
                </div>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor amet
                  consectetur adipisci velitsed quia non numquam eius modi
                  tempra labore et dolore magnam aliquam quaerat voluptatem
                </p>
                <div className="skill-progress-bars">
                  <div className="progress-bar-item mt-35">
                    <div className="progress-bar-top">
                      <h5 className="title">Busines Consulting</h5>

                      <span className="counter">85%</span>
                    </div>
                    <div className="progress-line" data-percentage={85}>
                      <div className="line" />
                    </div>
                  </div>
                  <div className="progress-bar-item mt-35">
                    <div className="progress-bar-top">
                      <h5 className="title">Digital Marketing</h5>

                      <span className="counter">65%</span>
                    </div>
                    <div className="progress-line" data-percentage={65}>
                      <div className="line" />
                    </div>
                  </div>
                  <div className="progress-bar-item mt-35">
                    <div className="progress-bar-top">
                      <h5 className="title">Financial Investment</h5>

                      <span className="counter">79%</span>
                    </div>
                    <div className="progress-line" data-percentage={79}>
                      <div className="line" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Skills Section End ======*/}
      {/*====== Services Section Start ======*/}
      <section className="service-section section-gap bg-color-secondary section-doted-bg">
        <div className="container">
          <div className="section-heading text-center heading-white mb-60">
            <h2 className="title">Service We Provide</h2>
            <span className="tagline">Best Marketing Agency Solutions</span>
          </div>
          <div className="iconic-bordered-boxes white-version">
            <div className="single-box">
              <div className="icon">
                <img src="/assets/img/icon/code.png" alt="Code" />
              </div>
              <h4 className="title">
                <Link href="/service-details">
                  <a>Web Development</a>
                </Link>
              </h4>
              <p>Amet consectetur adipi scing elit sed eiusmod tempor</p>
            </div>
            <div className="single-box">
              <div className="icon">
                <img src="/assets/img/icon/code.png" alt="Code" />
              </div>
              <h4 className="title">
                <Link href="/service-details">
                  <a>Marketing Strategy</a>
                </Link>
              </h4>
              <p>Amet consectetur adipi scing elit sed eiusmod tempor</p>
            </div>
            <div className="single-box">
              <div className="icon">
                <img src="/assets/img/icon/code.png" alt="Code" />
              </div>
              <h4 className="title">
                <Link href="/service-details">IT Consultation</Link>
              </h4>
              <p>Amet consectetur adipi scing elit sed eiusmod tempor</p>
            </div>
            <div className="single-box last-box">
              <div className="icon">
                <img src="/assets/img/icon/code.png" alt="Code" />
              </div>
              <h4 className="title">
                <Link href="/service-details">
                  <a>Market Analysis</a>
                </Link>
              </h4>
              <p>Amet consectetur adipi scing elit sed eiusmod tempor</p>
            </div>
            <div className="single-box box-bottom">
              <div className="icon">
                <img src="/assets/img/icon/code.png" alt="Code" />
              </div>
              <h4 className="title">
                <Link href="/service-details">
                  <a>Cyber Security</a>
                </Link>
              </h4>
              <p>Amet consectetur adipi scing elit sed eiusmod tempor</p>
            </div>
            <div className="single-box box-bottom">
              <div className="icon">
                <img src="/assets/img/icon/code.png" alt="Code" />
              </div>
              <h4 className="title">
                <Link href="/service-details">Business Planing</Link>
              </h4>
              <p>Amet consectetur adipi scing elit sed eiusmod tempor</p>
            </div>
            <div className="single-box box-bottom">
              <div className="icon">
                <img src="/assets/img/icon/code.png" alt="Code" />
              </div>
              <h4 className="title">
                <Link href="/service-details">Product Design</Link>
              </h4>
              <p>Amet consectetur adipi scing elit sed eiusmod tempor</p>
            </div>
            <div className="single-box view-more">
              <a href="#" className="template-btn">
                View More <i className="far fa-long-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*====== Services Section End ======*/}
      {/*====== Counter Section Start ======*/}
      <section className="counter-section section-gap-top-less">
        <h2 className="d-none">Title</h2>
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-5 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="counter-item counter-box mt-30">
                <div className="icon">
                  <i className="flaticon-rating" />
                </div>
                <div className="counter-wrap">
                  <Counter end={156} />
                  <span className="suffix">+</span>
                </div>
                <p className="title">Happy Clients</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-5 col-sm-6 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="counter-item counter-box bg-color-2 mt-30">
                <div className="icon">
                  <i className="flaticon-web-design" />
                </div>
                <div className="counter-wrap">
                  <Counter end={7856} />
                  <span className="suffix">+</span>
                </div>
                <p className="title">Project Complete</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-5 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="counter-item counter-box bg-color-3 mt-30">
                <div className="icon">
                  <i className="flaticon-checked" />
                </div>
                <div className="counter-wrap">
                  <Counter end={25} />
                  <span className="suffix">+</span>
                </div>
                <p className="title">Year of Experience</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-5 col-sm-6 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="counter-item counter-box bg-color-4 mt-30">
                <div className="icon">
                  <i className="flaticon-winner" />
                </div>
                <div className="counter-wrap">
                  <Counter end={8563} />
                  <span className="suffix">+</span>
                </div>
                <p className="title">Wining Award</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Counter Section End ======*/}
      {/*====== Team With Video Start ======*/}
      <div className="team-with-video">
        <section className="video-section">
          <h2 className="d-none">Title</h2>
          <div className="container">
            <div
              className="qolle-video"
              style={{ backgroundImage: "url(/assets/img/team-video.jpg)" }}
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
        </section>
        <section className="team-section section-gap-top">
          <div className="container-fluid container-1600">
            <div className="section-heading heading-white text-center mb-40">
              <h2 className="title">Meet The Team Members</h2>
              <span className="tagline">Best SEO Marketing Agency</span>
            </div>
            <div className="row team-member-items justify-content-center">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="member-item mt-30">
                  <div className="member-photo">
                    <img src="/assets/img/team-member/01.jpg" alt="Image One" />
                    <ul className="social-icons">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h4 className="name">
                    <a href="#">Geraldo M. Lundy</a>
                  </h4>
                  <span className="title">Senior Manager</span>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="member-item mt-30">
                  <div className="member-photo">
                    <img src="/assets/img/team-member/02.jpg" alt="Image One" />
                    <ul className="social-icons">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h4 className="name">
                    <a href="#">Sevin P. Gonzalez</a>
                  </h4>
                  <span className="title">Senior Manager</span>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="member-item mt-30">
                  <div className="member-photo">
                    <img src="/assets/img/team-member/03.jpg" alt="Image One" />
                    <ul className="social-icons">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h4 className="name">
                    <a href="#">Michael K. Walker</a>
                  </h4>
                  <span className="title">Senior Manager</span>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="member-item mt-30">
                  <div className="member-photo">
                    <img src="/assets/img/team-member/04.jpg" alt="Image One" />
                    <ul className="social-icons">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h4 className="name">
                    <a href="#">Geraldo M. Lundy</a>
                  </h4>
                  <span className="title">Senior Manager</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/*====== Team With Video End ======*/}
      {/*====== Faq Section Start ======*/}
      <section className="faq-section section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 order-lg-last">
              <div className="faq-image text-center text-lg-right content-mb-md-50">
                <img src="/assets/img/faq-image-2.jpg" alt="Image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="faq-content content-r-spacing">
                <div className="section-heading mb-30">
                  <h2 className="title">Freequently Asked Questions</h2>
                  <span className="tagline">Best SEO Optimization Agency</span>
                </div>
                <FaqAccordion />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Faq Section End ======*/}
      {/*====== Pricing Section Start ======*/}
      <section className="pricing-section pricing-section-line section-gap bg-color-off-white">
        <div className="container">
          <div className="section-heading text-center mb-50">
            <h2 className="title">Best Pricing For Business</h2>
            <span className="tagline">Best SEO Optimization Agency</span>
          </div>
          <div className="row no-gutters align-items-center justify-content-center">
            <div className="col-lg-4 col-md-7 col-sm-8">
              <div className="pricing-table pricing-table-two">
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
                    <i className="far fa-check" /> Create Unique Websites
                  </li>
                  <li>
                    <i className="far fa-check" /> Automate Your Busy Work
                  </li>
                  <li>
                    <i className="far fa-check" /> Optimize All Your Efforts
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-9">
              <div className="pricing-table pricing-table-two featured-plan">
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
                    <i className="far fa-check" /> Create Unique Websites
                  </li>
                  <li>
                    <i className="far fa-check" /> Automate Your Busy Work
                  </li>
                  <li>
                    <i className="far fa-check" /> Optimize All Your Efforts
                  </li>
                  <li>
                    <i className="far fa-check" /> Centralized Teams
                  </li>
                  <li>
                    <i className="far fa-check" /> Shareable Team Libraries
                  </li>
                </ul>
                <span className="featured-label">Popular</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-7 col-sm-8">
              <div className="pricing-table pricing-table-two">
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
                    <i className="far fa-check" /> Create Unique Websites
                  </li>
                  <li>
                    <i className="far fa-check" /> Automate Your Busy Work
                  </li>
                  <li>
                    <i className="far fa-check" /> Centralized Teams
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Pricing Section End ======*/}
      {/*====== Call To Action Start ======*/}
      <section className="call-to-action style-two bg-color-secondary">
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
              <a href="#" className="template-btn bordered-white">
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
    </Fragment>
  );
};
export default Index3Page;
