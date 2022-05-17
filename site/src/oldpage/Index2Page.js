import Link from "next/link";
import { Fragment } from "react";
import Slider from "react-slick";
import Counter from "../components/Counter";
import FreeConsultation from "../components/FreeConsultation";
import { testimonialsliderone } from "../sliderProps";

const Index2Page = () => {
  return (
    <Fragment>
      <section className="hero-area-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-10">
              <div className="hero-content">
                <h1 className="hero-title wow fadeInDown" data-wow-delay="0.3s">
                  Best SEO Optimization Agency
                </h1>
                <a
                  href="#"
                  className="template-btn wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  Let’s Talk About SEO <i className="far fa-long-arrow-right" />
                </a>
                <p className="wow fadeInUp" data-wow-delay="0.5s">
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse quam nihil molestiae consequatur
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hero-img d-none d-lg-block wow fadeInRight"
          data-wow-delay="0.3s"
        >
          <img
            src="/assets/img/hero/hero-illustration-one.png"
            alt="Illustration"
          />
        </div>
      </section>
      {/*====== End Hero Area ======*/}
      {/*====== About Area Start ======*/}
      <section className="about-section section-gap bg-color-secondary section-animate-icons">
        <h2 className="d-none">Title</h2>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="about-img content-mb-md-50 wow fadeInUp">
                <img
                  src="/assets/img/illustrations/about-illustration.png"
                  alt="Image"
                  className="animate-float-bob-y"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-8">
              <div className="about-text color-white-70 content-x-spacing">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremq dantium, totam rem aperiam, eaque ipsa
                  quae inventore veritatis et quasi architecto beatae
                </p>
                <div className="simple-icon-box icon-left mt-30 mb-40">
                  <div className="icon color-tertiary">
                    <i className="flaticon-stats" />
                  </div>
                  <div className="content">
                    <p>
                      Sit amet consectetur adipiscing elit sed do eiusmod tempor
                      incididunt ut dolore magna aliqua ipsum suspendisse
                      ultrices{" "}
                    </p>
                  </div>
                </div>
                <a href="#" className="template-btn btn-hover-white-bg">
                  Learn More Us <i className="far fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Animate Icons */}
        <div className="animate-icons">
          <img
            src="/assets/img/shape/line-rectangle.png"
            alt="Icon"
            className="line-rectangle"
          />
          <img
            src="/assets/img/shape/dots-circle.png"
            alt="Icon"
            className="dots-circle animate-zoom-fade"
          />
          <img
            src="/assets/img/shape/dots-square.png"
            alt="Icon"
            className="dots-square"
          />
          <img
            src="/assets/img/shape/wave-line-white.png"
            alt="Icon"
            className="wave-line"
          />
        </div>
      </section>
      {/*====== About Area End ======*/}
      {/*====== Service Section Start ======*/}
      <section className="service-section section-gap">
        <div className="container">
          <div className="section-heading text-center mb-30">
            <h2 className="title">Services We Provide</h2>
            <span className="tagline">Best SEO Optimization Agency</span>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="row service-boxes justify-content-center">
                <div className="col-md-6 col-sm-8 col-11">
                  <div className="fancy-iconic-box no-hover-effect mt-30 color-1">
                    <div className="icon">
                      <i className="flaticon-analysis" />
                    </div>
                    <h4 className="title">
                      <Link href="/service-details">
                        <a>Data Analysis</a>
                      </Link>
                    </h4>
                    <p>Quis autem reprehenderit quiinea volup tate</p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-8 col-11">
                  <div className="fancy-iconic-box no-hover-effect mt-30 color-2">
                    <div className="icon">
                      <i className="flaticon-seo" />
                    </div>
                    <h4 className="title">
                      <Link href="/service-details">
                        <a>Optimization</a>
                      </Link>
                    </h4>
                    <p>Quis autem reprehenderit quiinea volup tate</p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-8 col-11">
                  <div className="fancy-iconic-box no-hover-effect mt-30 color-3">
                    <div className="icon">
                      <i className="flaticon-startup" />
                    </div>
                    <h4 className="title">
                      <Link href="/service-details">
                        <a>Marketing</a>
                      </Link>
                    </h4>
                    <p>Quis autem reprehenderit quiinea volup tate</p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-8 col-11">
                  <div className="fancy-iconic-box no-hover-effect mt-30 color-4">
                    <div className="icon">
                      <i className="flaticon-analytics" />
                    </div>
                    <h4 className="title">
                      <Link href="/service-details">
                        <a>Development</a>
                      </Link>
                    </h4>
                    <p>Quis autem reprehenderit quiinea volup tate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 wow fadeInRight">
              <div className="service-img text-center text-lg-right pl-xl-3 content-mt-md-50">
                <img
                  src="/assets/img/illustrations/service-illustration.png"
                  alt="Image"
                  className="animate-float-bob-y"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Service Section End ======*/}
      {/*====== Case & Work Process Section Start ======*/}
      <section className="case-section bg-color-off-white section-gap overflow-hidden">
        <div className="container">
          <div className="section-heading text-center mb-30">
            <h2 className="title">Working Process</h2>
            <span className="tagline">Best SEO Optimization Agency</span>
          </div>
          <div className="fancy-step-boxes">
            <div className="single-step-box wow fadeInUp" data-wow-delay="0.3s">
              <div className="step-box-inner">
                <div className="content">
                  <div className="icon">
                    <i className="flaticon-support" />
                  </div>
                  <h5 className="title">Welcome To Qolle</h5>
                </div>
                <span className="step-count">01</span>
              </div>
            </div>
            <div className="single-step-box wow fadeInUp" data-wow-delay="0.4s">
              <div className="step-box-inner">
                <div className="content">
                  <div className="icon">
                    <i className="flaticon-target" />
                  </div>
                  <h5 className="title">Choose Your Services</h5>
                </div>
                <span className="step-count">02</span>
              </div>
            </div>
            <div className="single-step-box wow fadeInUp" data-wow-delay="0.5s">
              <div className="step-box-inner">
                <div className="content">
                  <div className="icon">
                    <i className="flaticon-diagnostic" />
                  </div>
                  <h5 className="title">Your Project Analysis</h5>
                </div>
                <span className="step-count">03</span>
              </div>
            </div>
            <div className="single-step-box wow fadeInUp" data-wow-delay="0.6s">
              <div className="step-box-inner">
                <div className="content">
                  <div className="icon">
                    <i className="flaticon-badge" />
                  </div>
                  <h5 className="title">Get Final Results</h5>
                </div>
                <span className="step-count">04</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid container-1600 section-gap-top">
          <div className="section-heading text-center mb-30">
            <h2 className="title">Popular Case Studies</h2>
            <span className="tagline">Best SEO Optimization Agency</span>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="portfolio-items-one mt-30">
                <div className="portfolio-thumb">
                  <img src="/assets/img/portfolio/01.jpg" alt="Image" />
                </div>
                <div className="portfolio-content">
                  <div className="categories">
                    <a href="#">Marketing Strategy</a>
                  </div>
                  <h4 className="title">
                    <a href="#">SEO Marketing Ideas</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="portfolio-items-one mt-30">
                <div className="portfolio-thumb">
                  <img src="/assets/img/portfolio/02.jpg" alt="Image" />
                </div>
                <div className="portfolio-content">
                  <div className="categories">
                    <a href="#">Business Planning</a>
                  </div>
                  <h4 className="title">
                    <a href="#">Strategy For Business</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="portfolio-items-one mt-30">
                <div className="portfolio-thumb">
                  <img src="/assets/img/portfolio/03.jpg" alt="Image" />
                </div>
                <div className="portfolio-content">
                  <div className="categories">
                    <a href="#">Marketing Strategy</a>
                  </div>
                  <h4 className="title">
                    <a href="#">Social Media Marketing</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="portfolio-items-one mt-30">
                <div className="portfolio-thumb">
                  <img src="/assets/img/portfolio/04.jpg" alt="Image" />
                </div>
                <div className="portfolio-content">
                  <div className="categories">
                    <a href="#">SEO Optimizations</a>
                  </div>
                  <h4 className="title">
                    <a href="#">Products Engineering</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Case & Work Process Section End ======*/}
      {/*====== Testimonial Section Start ======*/}
      <section className="testimonial-section section-gap">
        <div className="container">
          <div className="row align-items-center justify-content-lg-start justify-content-center">
            <div className="col-lg-5">
              <div className="section-thumb text-lg-left text-center content-mb-md-50">
                <img src="/assets/img/testimonial-image-one.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="testimonial-area content-l-spacing">
                <div className="section-heading mb-50">
                  <h2 className="title">What’s Clients Say</h2>
                  <span className="tagline">Best SEO Optimization Agency</span>
                </div>
                <Slider
                  {...testimonialsliderone}
                  className="testimonial-slider-one"
                >
                  <div className="testimonial-item">
                    <div className="content">
                      <p>
                        Quis autem vel eum iure reprehenderit quin voluptate
                        velit esse quam molestia consequat dolorem eum fugiat
                        voluptas nulla pariaturor empsum dolor amet consectetur
                        adipiscing elitsed eiusmod tempor incididunt laboret
                        dolore magna aliquauis suspendisse
                      </p>
                    </div>
                    <div className="author">
                      <div className="author-photo">
                        <img
                          src="/assets/img/author/01.png"
                          alt="William P. Harris"
                        />
                      </div>
                      <div className="author-info">
                        <h4 className="name">William P. Harris</h4>
                        <span className="title">Senior Manager</span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <div className="content">
                      <p>
                        Quis autem vel eum iure reprehenderit quin voluptate
                        velit esse quam molestia consequat dolorem eum fugiat
                        voluptas nulla pariaturor empsum dolor amet consectetur
                        adipiscing elitsed eiusmod tempor incididunt laboret
                        dolore magna aliquauis suspendisse
                      </p>
                    </div>
                    <div className="author">
                      <div className="author-photo">
                        <img
                          src="/assets/img/author/01.png"
                          alt="William P. Harris"
                        />
                      </div>
                      <div className="author-info">
                        <h4 className="name">William P. Harris</h4>
                        <span className="title">Senior Manager</span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <div className="content">
                      <p>
                        Quis autem vel eum iure reprehenderit quin voluptate
                        velit esse quam molestia consequat dolorem eum fugiat
                        voluptas nulla pariaturor empsum dolor amet consectetur
                        adipiscing elitsed eiusmod tempor incididunt laboret
                        dolore magna aliquauis suspendisse
                      </p>
                    </div>
                    <div className="author">
                      <div className="author-photo">
                        <img
                          src="/assets/img/author/01.png"
                          alt="William P. Harris"
                        />
                      </div>
                      <div className="author-info">
                        <h4 className="name">William P. Harris</h4>
                        <span className="title">Senior Manager</span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <div className="content">
                      <p>
                        Quis autem vel eum iure reprehenderit quin voluptate
                        velit esse quam molestia consequat dolorem eum fugiat
                        voluptas nulla pariaturor empsum dolor amet consectetur
                        adipiscing elitsed eiusmod tempor incididunt laboret
                        dolore magna aliquauis suspendisse
                      </p>
                    </div>
                    <div className="author">
                      <div className="author-photo">
                        <img
                          src="/assets/img/author/01.png"
                          alt="William P. Harris"
                        />
                      </div>
                      <div className="author-info">
                        <h4 className="name">William P. Harris</h4>
                        <span className="title">Senior Manager</span>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Testimonial Section End ======*/}
      {/*====== Consultation Section Start ======*/}
      <section className="consultation-section section-polygon-bg section-gap bg-color-primary">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-md-9">
                  <div className="consultation-text text-white pr-xl-5">
                    <div className="section-heading heading-white mb-30">
                      <h2 className="title">Better Way To Get More Updates</h2>
                      <span className="tagline">
                        Best SEO Optimization Agency
                      </span>
                    </div>
                    <p>
                      Sed ut perspiciatis unde omnis natus error luptatem
                      accusantium doloremque laudantium, totam rem apea eaque
                      quae abillo inventore veritatis quasi architecto beatae
                      vitae dicta sunt explica boemo enim
                    </p>
                    <div className="counter-items row">
                      <div className="col-lg-6">
                        <div className="counter-item counter-white mt-40">
                          <div className="counter-wrap">
                            <Counter end={950} />
                            <span className="suffix">+</span>
                          </div>
                          <h6 className="title">Project Complate</h6>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="counter-item counter-white mt-40">
                          <div className="counter-wrap">
                            <Counter end={950} />
                            <span className="suffix">+</span>
                          </div>
                          <h6 className="title">Project Complate</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-8 wow fadeInUp">
                  <div className="consultation-form-area pl-xl-3 content-mt-md-50">
                    <FreeConsultation />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Consultation Section End ======*/}
      {/*====== Latest New Section Start ======*/}
      <section className="latest-post-section section-gap">
        <div className="container">
          <div className="section-heading text-center mb-20">
            <h2 className="title">Latest Blog &amp; News</h2>
            <span className="tagline">Best SEO Optimization Agency</span>
          </div>
          <div className="latest-post-bordered">
            <div className="post-bordered-item">
              <div className="latest-post-box mt-40">
                <h4 className="post-title">
                  <a href="#">Guide To Newly Suppored Modern CSS Pseudo</a>
                </h4>
                <div className="post-meta">
                  <a href="#">
                    <i className="far fa-calculator" />
                    25 September 2021
                  </a>
                </div>
                <div className="post-thumb">
                  <img src="/assets/img/latest-post/01.jpg" alt="" />
                </div>
                <div className="post-content">
                  <p>
                    Sit amet consecte adipiscing eiusmod see tempor incididunt
                    labore dolore
                  </p>
                  <a href="#" className="template-btn bg-primary-10">
                    Read More <i className="far fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="post-bordered-item">
              <div className="latest-post-box mt-40">
                <h4 className="post-title">
                  <a href="#">Deep Dive Into Eleventy Static Site Generator</a>
                </h4>
                <div className="post-meta">
                  <a href="#">
                    <i className="far fa-calculator" />
                    25 September 2021
                  </a>
                </div>
                <div className="post-thumb">
                  <img src="/assets/img/latest-post/02.jpg" alt="" />
                </div>
                <div className="post-content">
                  <p>
                    Sit amet consecte adipiscing eiusmod see tempor incididunt
                    labore dolore
                  </p>
                  <a href="#" className="template-btn bg-primary-10">
                    Read More <i className="far fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="post-bordered-item">
              <div className="latest-post-box mt-40">
                <h4 className="post-title">
                  <a href="#">Context And Variables In Hugo Site Generator</a>
                </h4>
                <div className="post-meta">
                  <a href="#">
                    <i className="far fa-calculator" />
                    25 September 2021
                  </a>
                </div>
                <div className="post-thumb">
                  <img src="/assets/img/latest-post/03.jpg" alt="" />
                </div>
                <div className="post-content">
                  <p>
                    Sit amet consecte adipiscing eiusmod see tempor incididunt
                    labore dolore
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
export default Index2Page;
