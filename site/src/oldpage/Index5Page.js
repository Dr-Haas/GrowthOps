import Link from "next/link";
import { Fragment } from "react";
import Slider from "react-slick";
import Counter from "../components/Counter";
import {
  clientCarousel,
  pricingcenterslide,
  testimonialslidervertical,
} from "../sliderProps";

const Index5Page = () => {
  return (
    <Fragment>
      <section className="hero-area-four">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-10">
              <div className="hero-content wow fadeInUp" data-wow-delay="0.4s">
                <a
                  href="https://www.youtube.com/watch?v=XSGBVzeBUbk"
                  className="video-btn"
                  data-lity=""
                >
                  <i className="fas fa-play" />
                </a>
                <h1 className="hero-title">We’re Digital Web Design Agency</h1>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error siluptatem
                  accusantium doloremque laudantium totam rem
                </p>
                <a
                  href="#"
                  className="template-btn bordered-btn bordered-fourth"
                >
                  Start a Project <i className="far fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-img d-none d-lg-block">
          <img src="/assets/img/hero/hero-design-studio.jpg" alt="HeroImage" />
        </div>
      </section>
      {/*====== End Hero Area ======*/}
      {/*====== Feature Section Start ======*/}
      <section className="feature-section design-studio-feature">
        <div className="container wow fadeInUp" data-wow-delay="0.4s">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="iconic-box-two white-version mb-30">
                <div className="icon">
                  <img src="/assets/img/icon/megaphone.png" alt="Megaphone" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="">Creative Design</a>
                  </h4>
                  <p>
                    Neque porro quisquam est dolore esum quia dolor amet
                    consectur adipis velitse
                  </p>
                  <a href="#" className="box-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="iconic-box-two white-version mb-30">
                <div className="icon">
                  <img src="/assets/img/icon/target.png" alt="Target" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="">Marketing</a>
                  </h4>
                  <p>
                    Neque porro quisquam est dolore esum quia dolor amet
                    consectur adipis velitse
                  </p>
                  <a href="#" className="box-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="iconic-box-two white-version mb-30">
                <div className="icon">
                  <img src="/assets/img/icon/calendar.png" alt="Megaphone" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="">UI/UX Strategy</a>
                  </h4>
                  <p>
                    Neque porro quisquam est dolore esum quia dolor amet
                    consectur adipis velitse
                  </p>
                  <a href="#" className="box-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="iconic-box-two white-version mb-30">
                <div className="icon">
                  <img src="/assets/img/icon/sms.png" alt="Megaphone" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="">Development</a>
                  </h4>
                  <p>
                    Neque porro quisquam est dolore esum quia dolor amet
                    consectur adipis velitse
                  </p>
                  <a href="#" className="box-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="iconic-box-two white-version mb-30">
                <div className="icon">
                  <img
                    src="/assets/img/icon/cloud-computing.png"
                    alt="Megaphone"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="">SEO Optimization</a>
                  </h4>
                  <p>
                    Neque porro quisquam est dolore esum quia dolor amet
                    consectur adipis velitse
                  </p>
                  <a href="#" className="box-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="iconic-box-two white-version mb-30">
                <div className="icon">
                  <img
                    src="/assets/img/icon/business-target.png"
                    alt="Megaphone"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="">IT &amp; Technology</a>
                  </h4>
                  <p>
                    Neque porro quisquam est dolore esum quia dolor amet
                    consectur adipis velitse
                  </p>
                  <a href="#" className="box-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Feature Section End ======*/}
      {/*====== About Section Start ======*/}
      <section className="about-section section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-7">
              <div
                className="about-img content-mb-md-5 wow fadeInLeft"
                data-wow-delay="0.3s"
              >
                <img
                  src="/assets/img/illustrations/about-illustration-2.png"
                  alt="Illustrations"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-9">
              <div className="about-text content-x-spacing">
                <div className="section-heading mb-20">
                  <span className="tagline-two">About Company</span>
                  <h2 className="title">We’re Provide Web Design Solutions</h2>
                </div>
                <p className="mb-1">
                  Neque porro quisquam est dolorem sum quia dolor amet
                  consectetur adipisci velitsed quianon numquam modempra dolore
                  magnam aliquam quaerat voluptatem
                </p>
                <div className="row">
                  <div className="col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="check-list-box mt-20">
                      <i className="far fa-check-circle" />
                      Web Design Solutions
                    </div>
                  </div>
                  <div className="col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
                    <div className="check-list-box mt-20">
                      <i className="far fa-check-circle" />
                      Marketing Strategy
                    </div>
                  </div>
                  <div className="col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="check-list-box mt-20">
                      <i className="far fa-check-circle" />
                      Products Engineering
                    </div>
                  </div>
                  <div className="col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
                    <div className="check-list-box mt-20">
                      <i className="far fa-check-circle" />
                      Web &amp; Apps Development
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== About Section End ======*/}
      {/*====== Brand Section Start ======*/}
      <section className="clients-section bg-color-secondary">
        <div className="container">
          <div className="client-carousel-heading">
            <h6>We Have 25632+ Global Clients</h6>
            <div className="client-carousel-arrows" />
          </div>
          <Slider {...clientCarousel} className="client-carousel-active">
            <div className="col">
              <a href="#">
                <img
                  src="/assets/img/brand-logo/01-white.png"
                  alt="Brand logo"
                />
              </a>
            </div>
            <div className="col">
              <a href="#">
                <img
                  src="/assets/img/brand-logo/02-white.png"
                  alt="Brand logo"
                />
              </a>
            </div>
            <div className="col">
              <a href="#">
                <img
                  src="/assets/img/brand-logo/03-white.png"
                  alt="Brand logo"
                />
              </a>
            </div>
            <div className="col">
              <a href="#">
                <img
                  src="/assets/img/brand-logo/04-white.png"
                  alt="Brand logo"
                />
              </a>
            </div>
            <div className="col">
              <a href="#">
                <img
                  src="/assets/img/brand-logo/05-white.png"
                  alt="Brand logo"
                />
              </a>
            </div>
            <div className="col">
              <a href="#">
                <img
                  src="/assets/img/brand-logo/06-white.png"
                  alt="Brand logo"
                />
              </a>
            </div>
            <div className="col">
              <a href="#">
                <img
                  src="/assets/img/brand-logo/01-white.png"
                  alt="Brand logo"
                />
              </a>
            </div>
            <div className="col">
              <a href="#">
                <img
                  src="/assets/img/brand-logo/02-white.png"
                  alt="Brand logo"
                />
              </a>
            </div>
            <div className="col">
              <a href="#">
                <img
                  src="/assets/img/brand-logo/03-white.png"
                  alt="Brand logo"
                />
              </a>
            </div>
            <div className="col">
              <a href="#">
                <img
                  src="/assets/img/brand-logo/04-white.png"
                  alt="Brand logo"
                />
              </a>
            </div>
            <div className="col">
              <a href="#">
                <img
                  src="/assets/img/brand-logo/05-white.png"
                  alt="Brand logo"
                />
              </a>
            </div>
            <div className="col">
              <a href="#">
                <img
                  src="/assets/img/brand-logo/06-white.png"
                  alt="Brand logo"
                />
              </a>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== Brand Section End ======*/}
      {/*====== Portfolio Section Start ======*/}
      <section className="portfolio-section section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-11">
              <div className="section-heading text-center mb-30">
                <span className="tagline-two both-border">Latest Project</span>
                <h2 className="title">
                  We Have Lot’s Of Project That We Recently Completed
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="portfolio-items-three mt-30">
                <div className="portfolio-thumb">
                  <img src="/assets/img/portfolio/26.jpg" alt="Image" />
                </div>
                <div className="portfolio-content">
                  <h4 className="title">
                    <a href="#">Book Cover Design</a>
                  </h4>
                  <p className="tags">
                    <a href="#">Design,</a>
                    <a href="#">Branding</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="portfolio-items-three mt-30">
                <div className="portfolio-thumb">
                  <img src="/assets/img/portfolio/27.jpg" alt="Image" />
                </div>
                <div className="portfolio-content">
                  <h4 className="title">
                    <a href="#">Illustrator Design</a>
                  </h4>
                  <p className="tags">
                    <a href="#">Design,</a>
                    <a href="#">Branding</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="portfolio-items-three mt-30">
                <div className="portfolio-thumb">
                  <img src="/assets/img/portfolio/28.jpg" alt="Image" />
                </div>
                <div className="portfolio-content">
                  <h4 className="title">
                    <a href="#">Cup Cover Design</a>
                  </h4>
                  <p className="tags">
                    <a href="#">Design,</a>
                    <a href="#">Branding</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="portfolio-items-three mt-30">
                <div className="portfolio-thumb">
                  <img src="/assets/img/portfolio/30.jpg" alt="Image" />
                </div>
                <div className="portfolio-content">
                  <h4 className="title">
                    <a href="#">Mockup Design</a>
                  </h4>
                  <p className="tags">
                    <a href="#">Design,</a>
                    <a href="#">Branding</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="portfolio-items-three mt-30">
                <div className="portfolio-thumb">
                  <img src="/assets/img/portfolio/29.jpg" alt="Image" />
                </div>
                <div className="portfolio-content">
                  <h4 className="title">
                    <a href="#">App Design</a>
                  </h4>
                  <p className="tags">
                    <a href="#">Design,</a>
                    <a href="#">Branding</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="text-center">
                <a href="#" className="template-btn bg-fourth mt-50">
                  View More Project <i className="far fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Portfolio Section End ======*/}
      {/*====== Statices Section Start ======*/}
      <section className="statices-section">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-7 col-lg-10 col-md-10">
              <div className="statices-img text-xl-left text-center">
                <img src="/assets/img/statices-img.jpg" alt="Image" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-8 col-md-8">
              <div className="statices-content">
                <div className="section-heading mb-50">
                  <span className="tagline-two">Company Statices</span>
                  <h2 className="title">Someting Know About Our Achievement</h2>
                </div>
                <div className="row justify-content-center">
                  <div className="col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="counter-item counter-box-two">
                      <div className="icon">
                        <img src="/assets/img/icon/target.png" alt="Target" />
                      </div>
                      <div className="counter-wrap">
                        <Counter end={3654} />
                        <span className="suffix">+</span>
                      </div>
                      <p className="title">Project Done</p>
                    </div>
                    <div className="counter-item counter-box-two mt-30">
                      <div className="icon">
                        <img src="/assets/img/icon/trophy.png" alt="Target" />
                      </div>
                      <div className="counter-wrap">
                        <Counter end={7856} />
                        <span className="suffix">+</span>
                      </div>
                      <p className="title">Awards Winning</p>
                    </div>
                  </div>
                  <div className="col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
                    <div className="counter-item counter-box-two mt-30">
                      <div className="icon">
                        <img src="/assets/img/icon/reviews.png" alt="Target" />
                      </div>
                      <div className="counter-wrap">
                        <Counter end={9634} />
                        <span className="suffix">+</span>
                      </div>
                      <p className="title">Global Parters</p>
                    </div>
                    <div className="counter-item counter-box-two mt-30">
                      <div className="icon">
                        <img src="/assets/img/icon/object.png" alt="Target" />
                      </div>
                      <div className="counter-wrap">
                        <Counter end={7851} />
                        <span className="suffix">+</span>
                      </div>
                      <p className="title">Creative Teams</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Statices Section End ======*/}
      {/*====== Testimonial Section Start ======*/}
      <section className="testimonial-section section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.4s">
              <div className="section-heading text-center mb-50">
                <span className="tagline-two">Our Testimonials</span>
                <h2 className="title">What Our Clients Say About Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 col-md-8">
              <div className="testimonial-img text-lg-left text-center content-mb-md-50">
                <img src="/assets/img/testimonial-img.png" alt="Image" />
              </div>
            </div>
            <div className="col-lg-7 col-md-11">
              <Slider
                {...testimonialslidervertical}
                className="testimonial-slider-vertical"
              >
                <div className="testimonial-item-two">
                  <div className="content">
                    <p>
                      Sit amet consectetur adipiscing elitsed eiusmod tempor
                      incididunt ut labore ets dolore magna aliqua spendisse
                      ultricesy gravida. Risus commodo viverra maece nas
                      accumsan lacus facilisis
                    </p>
                  </div>
                  <div className="author">
                    <div className="author-photo">
                      <img
                        src="/assets/img/author/02.png"
                        alt="William P. Harris"
                      />
                    </div>
                    <div className="author-info">
                      <h4 className="name">William P. Harris</h4>
                      <span className="title">Senior Manager</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item-two">
                  <div className="content">
                    <p>
                      Sit amet consectetur adipiscing elitsed eiusmod tempor
                      incididunt ut labore ets dolore magna aliqua spendisse
                      ultricesy gravida. Risus commodo viverra maece nas
                      accumsan lacus facilisis
                    </p>
                  </div>
                  <div className="author">
                    <div className="author-photo">
                      <img
                        src="/assets/img/author/02.png"
                        alt="William P. Harris"
                      />
                    </div>
                    <div className="author-info">
                      <h4 className="name">William P. Harris</h4>
                      <span className="title">Senior Manager</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item-two">
                  <div className="content">
                    <p>
                      Sit amet consectetur adipiscing elitsed eiusmod tempor
                      incididunt ut labore ets dolore magna aliqua spendisse
                      ultricesy gravida. Risus commodo viverra maece nas
                      accumsan lacus facilisis
                    </p>
                  </div>
                  <div className="author">
                    <div className="author-photo">
                      <img
                        src="/assets/img/author/02.png"
                        alt="William P. Harris"
                      />
                    </div>
                    <div className="author-info">
                      <h4 className="name">William P. Harris</h4>
                      <span className="title">Senior Manager</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item-two">
                  <div className="content">
                    <p>
                      Sit amet consectetur adipiscing elitsed eiusmod tempor
                      incididunt ut labore ets dolore magna aliqua spendisse
                      ultricesy gravida. Risus commodo viverra maece nas
                      accumsan lacus facilisis
                    </p>
                  </div>
                  <div className="author">
                    <div className="author-photo">
                      <img
                        src="/assets/img/author/02.png"
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
      </section>
      {/*====== Testimonial Section End ======*/}
      {/*====== Pricing Section Start ======*/}
      <section className="pricing-section-start bg-color-fourth section-gap section-polygon-bg">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between justify-content-center">
            <div className="col-xl-4 col-lg-5 col-md-10">
              <div className="section-heading heading-white mb-20">
                <span className="tagline-two">Pricing Plan</span>
                <h2 className="title">
                  Best Pricing For Create Awesome Web Design
                </h2>
              </div>
              <p className="text-white">
                Neque porro quisquam estui dolorem ipsum quia consectetur
                adipisci velitsed quia non numquames labore et dolore magnam
                aliquam
              </p>
              <Link href="/pricing">
                <a className="template-btn bordered-btn bordered-white mt-30">
                  View Pricing <i className="far fa-long-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="col-lg-7 col-md-10 col-sm-10">
              <Slider
                {...pricingcenterslide}
                className="pricing-center-slide content-mt-md-50"
              >
                <div className="pricing-slide-item">
                  <div className="pricing-table pricing-table-three featured-plan">
                    <h4 className="plan-name">Standard Plan</h4>
                    <p>
                      Consectetu adipiscing elit sedie mod tempor incidie labore
                    </p>
                    <div className="plan-price">
                      <span className="currency">$</span>
                      <span className="price">49.86</span>
                    </div>
                    <a href="#" className="template-btn bordered-btn">
                      Choose Package <i className="far fa-long-arrow-right" />
                    </a>
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
                <div className="pricing-slide-item">
                  <div className="pricing-table pricing-table-three">
                    <h4 className="plan-name">Basic Plan</h4>
                    <p>
                      Consectetu adipiscing elit sedie mod tempor incidie labore
                    </p>
                    <div className="plan-price">
                      <span className="currency">$</span>
                      <span className="price">29.57</span>
                    </div>
                    <a href="#" className="template-btn bordered-btn">
                      Choose Package <i className="far fa-long-arrow-right" />
                    </a>
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
                <div className="pricing-slide-item">
                  <div className="pricing-table pricing-table-three">
                    <h4 className="plan-name">Premium Plan</h4>
                    <p>
                      Consectetu adipiscing elit sedie mod tempor incidie labore
                    </p>
                    <div className="plan-price">
                      <span className="currency">$</span>
                      <span className="price">59.57</span>
                    </div>
                    <a href="#" className="template-btn bordered-btn">
                      Choose Package <i className="far fa-long-arrow-right" />
                    </a>
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
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/*====== Pricing Section End ======*/}
      {/*====== Latest New Section Start ======*/}
      <section className="latest-news-section section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="section-heading text-center mb-30">
                <span className="tagline-two both-border">
                  Our News &amp; Blog
                </span>
                <h2 className="title">
                  Get Every Single Update Latest News &amp; Tips
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div className="latest-post-box-two mt-30">
                <div className="post-thumb">
                  <img src="/assets/img/latest-post/06.jpg" alt="Image" />
                  <Link href="/blog-details">
                    <a className="box-link">
                      <i className="far fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="post-content">
                  <h4 className="post-title">
                    <a href="#">Guide To Newly Suppored Modern CSS Pseudo</a>
                  </h4>
                  <p>
                    Sit amet consecte adipiscin eiusmod see tempor incididunt
                    labore dolore
                  </p>
                  <ul className="post-meta">
                    <li>
                      <a href="#">
                        <i className="far fa-calendar-alt" /> 25 Feb 2022
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-comments" /> Comment (5)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div className="latest-post-box-two mt-30">
                <div className="post-thumb">
                  <img src="/assets/img/latest-post/07.jpg" alt="Image" />
                  <Link href="/blog-details">
                    <a className="box-link">
                      <i className="far fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="post-content">
                  <h4 className="post-title">
                    <a href="#">Guide To Newly Suppored Modern CSS Pseudo</a>
                  </h4>
                  <p>
                    Sit amet consecte adipiscin eiusmod see tempor incididunt
                    labore dolore
                  </p>
                  <ul className="post-meta">
                    <li>
                      <a href="#">
                        <i className="far fa-calendar-alt" /> 25 Feb 2022
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-comments" /> Comment (5)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div className="latest-post-box-two mt-30">
                <div className="post-thumb">
                  <img src="/assets/img/latest-post/08.jpg" alt="Image" />
                  <Link href="/blog-details">
                    <a className="box-link">
                      <i className="far fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="post-content">
                  <h4 className="post-title">
                    <a href="#">Guide To Newly Suppored Modern CSS Pseudo</a>
                  </h4>
                  <p>
                    Sit amet consecte adipiscin eiusmod see tempor incididunt
                    labore dolore
                  </p>
                  <ul className="post-meta">
                    <li>
                      <a href="#">
                        <i className="far fa-calendar-alt" /> 25 Feb 2022
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-comments" /> Comment (5)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Latest New Section End ======*/}
      {/*====== CTA Section Start ======*/}
      <section
        className="cta-section-two"
        style={{ backgroundImage: "url(assets/img/cta-bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="cta-content">
                <div className="section-heading heading-white mb-30">
                  <span className="tagline-two">Work Together</span>
                  <h2 className="title">Have Any Project On Your Minds?</h2>
                </div>
                <a
                  href="#"
                  className="template-btn bordered-btn bordered-white"
                >
                  Meet Our Team <i className="far fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Index5Page;
