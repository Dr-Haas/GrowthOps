import Link from "next/link";
import { Fragment } from "react";
import Counter from "../components/Counter";
import FaqAccordion from "../components/FaqAccordion";
import PageTitle from "../layout/PageTitle";

const AboutPage = () => {
  return (
    <Fragment>
      <PageTitle pageName={"About us"} />
      <section className="feature-section section-gap">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="feature-text-block content-r-spacing">
                <div className="section-heading mb-50">
                  <h2 className="title">
                    25 Years Of Experience We Provide Solutions
                  </h2>
                  <span className="tagline">Best SEO Optimization Agency</span>
                </div>
                <div className="feature-lists">
                  <div className="simple-icon-box icon-left wow fadeInUp mb-30">
                    <div className="icon">
                      <i className="flaticon-crop" />
                    </div>
                    <div className="content">
                      <h4 className="title">Professional Agency</h4>
                      <p>
                        Consectetur adipisci velitsed quia non numquam eius mode
                        tempralabore et dolore magnam aliquam quaerat
                      </p>
                    </div>
                  </div>
                  <div className="simple-icon-box icon-left wow fadeInUp mb-30">
                    <div className="icon">
                      <i className="flaticon-crop" />
                    </div>
                    <div className="content">
                      <h4 className="title">Best Solutions Provider</h4>
                      <p>
                        Consectetur adipisci velitsed quia non numquam eius mode
                        tempralabore et dolore magnam aliquam quaerat
                      </p>
                    </div>
                  </div>
                </div>
                <a href="#" className="template-btn mt-10">
                  Start a Project <i className="far fa-long-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-9">
              <div className="feature-img text-lg-right text-center content-mt-md-50">
                <img
                  src="/assets/img/illustrations/feature-illustration.png"
                  alt="Image"
                  className="animate-float-bob-y"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Feature Section End ======*/}
      <div className="service-with-team">
        {/*====== Service Section Start ======*/}
        <section className="service-section section-gap">
          <div className="container">
            <div className="section-heading heading-white text-center mb-30">
              <h2 className="title">Services We Provide</h2>
              <span className="tagline">Best SEO Optimization Agency</span>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6 wow fadeInUp">
                <div className="iconic-box icon-left bg-white mt-30">
                  <div className="icon">
                    <i className="fal fa-desktop-alt" />
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
                <div className="iconic-box icon-left bg-white mt-30">
                  <div className="icon">
                    <i className="fal fa-desktop-alt" />
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
                <div className="iconic-box icon-left bg-white mt-30">
                  <div className="icon">
                    <i className="fal fa-desktop-alt" />
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
                <div className="iconic-box icon-left bg-white mt-30">
                  <div className="icon">
                    <i className="fal fa-desktop-alt" />
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
                <div className="iconic-box icon-left bg-white mt-30">
                  <div className="icon">
                    <i className="fal fa-desktop-alt" />
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
        {/*====== Team Section Start ======*/}
        <section className="team-section section-gap-bottom">
          <div className="container-fluid container-1600">
            <div className="row team-member-items">
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
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="member-item mt-30">
                  <div className="member-photo">
                    <img src="/assets/img/team-member/05.jpg" alt="Image One" />
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
                    <a href="#">Steven H. Brown</a>
                  </h4>
                  <span className="title">Senior Manager</span>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="member-item mt-30">
                  <div className="member-photo">
                    <img src="/assets/img/team-member/06.jpg" alt="Image One" />
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
                    <a href="#">Dana J. Bingham</a>
                  </h4>
                  <span className="title">Senior Manager</span>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="member-item mt-30">
                  <div className="member-photo">
                    <img src="/assets/img/team-member/07.jpg" alt="Image One" />
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
                    <a href="#">Russell K. McCormick</a>
                  </h4>
                  <span className="title">Senior Manager</span>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="member-item mt-30">
                  <div className="member-photo">
                    <img src="/assets/img/team-member/08.jpg" alt="Image One" />
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
                    <a href="#">Michael H. Thompson</a>
                  </h4>
                  <span className="title">Senior Manager</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Team Section End ======*/}
        <div className="animate-icon d-none d-lg-block">
          <img
            src="/assets/img/shape/gradient-pipe.png"
            alt="icon"
            className="animate-rotate-me"
          />
        </div>
      </div>
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
                  <Counter end={7851} />
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
      {/*====== Faq Section Start ======*/}
      <section className="faq-section section-gap">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 order-lg-last">
              <div className="faq-image text-center text-lg-right content-mb-md-50">
                <img src="/assets/img/faq-image.jpg" alt="Image" />
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
    </Fragment>
  );
};
export default AboutPage;
