import Link from "next/link";
import { Fragment } from "react";
import PageTitle from "../layout/PageTitle";

const MarketingServicesPage = () => {
  return (
    <Fragment>
      <PageTitle pageName={"Marketing Services"} />
      {/*====== Page Title Area End ======*/}
      {/*====== About Area Start ======*/}
      <section className="about-section section-gap overflow-hidden">
        <div className="custom-container-fluid">
          <div className="row align-items-center justify-content-xl-start justify-content-center">
            <div className="col-xl-4 col-lg-8 col-sm-10">
              <div className="about-contant content-mb-lg-80">
                <div className="section-heading mb-20">
                  <h2 className="title">
                    Improve Your Business By Digital Solutions
                  </h2>
                  <span className="tagline">Best Digital Agency Solutions</span>
                </div>
                <p>
                  Sed perspiciatis unde omnis iste natus error sit voluptatem
                  santium doloremque laudantium, totam rem aperiam, eaque ipsa
                  quae abilloe inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explibo. enim ipsam voluptatem quia voluptas
                  sit aspernatur
                </p>
                <ul className="circle-list mb-40 mt-30 wow fadeInUp">
                  <li>Professional Agency</li>
                  <li>Best Solutions Provider</li>
                  <li>Web &amp; Design Solutions</li>
                </ul>
                <a href="#" className="template-btn bordered-btn">
                  Start a Project <i className="fas fa-long-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 col-lg-10 col-md-10">
              <div className="fancy-image-gallery-two">
                <div className="row align-items-center">
                  <div className="col-sm-6 wow fadeInUp">
                    <img
                      className="mb-30"
                      src="/assets/img/fancy-gallery/05.jpg"
                      alt="About Image"
                    />
                  </div>
                  <div className="col-sm-6 wow fadeInUp">
                    <img
                      className="mb-30"
                      src="/assets/img/fancy-gallery/06.jpg"
                      alt="About Image"
                    />
                    <img
                      className="mb-30"
                      src="/assets/img/fancy-gallery/07.jpg"
                      alt="About Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== About Area End ======*/}
      {/*====== Service Section Start ======*/}
      <section
        className="service-section section-gap bg-color-primary-7 bg-cover-center"
        style={{ backgroundImage: "url(assets/img/service-bg.jpg)" }}
      >
        <div className="container">
          <div className="section-heading mb-30 text-center">
            <h2 className="title">Services We Provide</h2>
            <span className="tagline">Best Digital Agency Solutions</span>
          </div>
          <div className="row service-boxes justify-content-center">
            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <i className="flaticon-seo-2" />
                </div>
                <h4 className="title">
                  <Link href="/service-details">SEO Optimiz</Link>
                </h4>
                <p>Quis autem reprehenderit quiinea volup tate</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <i className="flaticon-email" />
                </div>
                <h4 className="title">
                  <Link href="/service-details">Email Ma rketing</Link>
                </h4>
                <p>Quis autem reprehenderit quiinea volup tate</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="fancy-iconic-box mt-30">
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
            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="fancy-iconic-box mt-30">
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
            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <i className="flaticon-click" />
                </div>
                <h4 className="title">
                  <Link href="/service-details">Pay-par Click</Link>
                </h4>
                <p>Quis autem reprehenderit quiinea volup tate</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <i className="flaticon-subscription" />
                </div>
                <h4 className="title">
                  <Link href="/service-details">Content Writting</Link>
                </h4>
                <p>Quis autem reprehenderit quiinea volup tate</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="fancy-iconic-box mt-30">
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
            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="fancy-iconic-box mt-30">
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
      </section>
      {/*====== Service Section End ======*/}
      <div className="section-blob-bg-three">
        {/*====== Skills Section Start ======*/}
        <section className="skill-section section-gap">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-9">
                <div className="skill-image text-lg-left text-center content-mb-md-50">
                  <img
                    src="/assets/img/skill-image-2.jpg"
                    alt="Image"
                    className="animate-float-bob-y"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-10">
                <div className="skill-content content-r-spacing">
                  <div className="section-heading mb-20">
                    <h2 className="title">
                      We’re Very Experience In Digital marketing
                    </h2>
                    <span className="tagline">
                      Best Digital Agency Solutions
                    </span>
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
        {/*====== Pricing Sectioin Start ======*/}
        <section className="pricing-section pricing-section-line section-gap-bottom">
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
      {/*====== Call To Action Start ======*/}
    </Fragment>
  );
};
export default MarketingServicesPage;
