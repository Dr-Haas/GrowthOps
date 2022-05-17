import { Fragment } from "react";
import PageTitle from "../layout/PageTitle";

const CreativeAgencyPage = () => {
  return (
    <Fragment>
      <PageTitle pageName={"Creative Agency"} />
      <section className="work-process-section  section-gap overflow-hidden">
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
      </section>
      {/*====== Work Process Section End ======*/}
      {/*====== Feature Section Start ======*/}
      <section className="feature-section section-gap-bottom">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="feature-img text-lg-left text-center content-mb-md-50">
                <img
                  src="../assets/img/illustrations/feature-illustration-02.png"
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="feature-text-block content-l-spacing">
                <div className="section-heading mb-30">
                  <h2 className="title">
                    25 Years Of Experience We Provide Solutions
                  </h2>
                  <span className="tagline">Best SEO Optimization Agency</span>
                </div>
                <div className="feature-lists">
                  <div className="simple-icon-box icon-left mb-30">
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
                  <div className="simple-icon-box icon-left mb-30">
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
          </div>
        </div>
      </section>
      {/*====== Feature Section End ======*/}
      {/*====== Case Section Start ======*/}
      <section className="case-section bg-color-off-white section-gap overflow-hidden">
        <div className="container">
          <div className="section-heading text-center mb-30">
            <h2 className="title">Services We Offer For Agency</h2>
            <span className="tagline">Best SEO Optimization Agency</span>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="portfolio-items-one mt-30">
                <div className="portfolio-thumb">
                  <img src="../assets/img/portfolio/01.jpg" alt="Image" />
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
            <div className="col-lg-4 col-sm-6">
              <div className="portfolio-items-one mt-30">
                <div className="portfolio-thumb">
                  <img src="../assets/img/portfolio/02.jpg" alt="Image" />
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
            <div className="col-lg-4 col-sm-6">
              <div className="portfolio-items-one mt-30">
                <div className="portfolio-thumb">
                  <img src="../assets/img/portfolio/03.jpg" alt="Image" />
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
            <div className="col-lg-4 col-sm-6">
              <div className="portfolio-items-one mt-30">
                <div className="portfolio-thumb">
                  <img src="../assets/img/portfolio/04.jpg" alt="Image" />
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
            <div className="col-lg-4 col-sm-6">
              <div className="portfolio-items-one mt-30">
                <div className="portfolio-thumb">
                  <img src="../assets/img/portfolio/24.jpg" alt="Image" />
                </div>
                <div className="portfolio-content">
                  <div className="categories">
                    <a href="#">SEO Optimizations</a>
                  </div>
                  <h4 className="title">
                    <a href="#">Best Market Analysis</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="portfolio-items-one mt-30">
                <div className="portfolio-thumb">
                  <img src="../assets/img/portfolio/25.jpg" alt="Image" />
                </div>
                <div className="portfolio-content">
                  <div className="categories">
                    <a href="#">SEO Optimizations</a>
                  </div>
                  <h4 className="title">
                    <a href="#">Website Application</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Case Section End ======*/}
      {/*====== Pricing Section Start ======*/}
      <section className="pricing-section pricing-section-line section-gap pricing-blur-bg">
        <div className="container">
          <div className="section-heading text-center mb-50">
            <h2 className="title">Best Pricing For Business</h2>
            <span className="tagline">Best SEO Optimization Agency</span>
          </div>
          <div className="tab-content" id="pricingTabContent">
            <div
              className="tab-pane fade show active"
              id="monthly"
              role="tabpanel"
            >
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="pricing-table mt-40">
                    <h4 className="plan-name">Basic Plan</h4>
                    <p>
                      Amet consectetu adipiscing elit sedie eiusmod tempor
                      incidie labore
                    </p>
                    <div className="plan-price">
                      <span className="currency">$</span>
                      <span className="price">19.57</span>
                    </div>
                    <a href="#" className="template-btn bordered-btn">
                      Choose Package <i className="far fa-long-arrow-right" />
                    </a>
                    <p>
                      Quis autem vel eumcur reprehenderit ea voluptate velit
                      esse quam
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
                  <div className="pricing-table featured-plan mt-40">
                    <h4 className="plan-name">Standard Plan</h4>
                    <p>
                      Amet consectetu adipiscing elit sedie eiusmod tempor
                      incidie labore
                    </p>
                    <div className="plan-price">
                      <span className="currency">$</span>
                      <span className="price">39.86</span>
                    </div>
                    <a href="#" className="template-btn bordered-btn">
                      Choose Package <i className="far fa-long-arrow-right" />
                    </a>
                    <p>
                      Quis autem vel eumcur reprehenderit ea voluptate velit
                      esse quam
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
                  <div className="pricing-table mt-40">
                    <h4 className="plan-name">Premium Plan</h4>
                    <p>
                      Amet consectetu adipiscing elit sedie eiusmod tempor
                      incidie labore
                    </p>
                    <div className="plan-price">
                      <span className="currency">$</span>
                      <span className="price">59.57</span>
                    </div>
                    <a href="#" className="template-btn bordered-btn">
                      Choose Package <i className="far fa-long-arrow-right" />
                    </a>
                    <p>
                      Quis autem vel eumcur reprehenderit ea voluptate velit
                      esse quam
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
            <div className="tab-pane fade" id="yearly" role="tabpanel">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="pricing-table mt-40">
                    <h4 className="plan-name">Basic Plan</h4>
                    <p>
                      Amet consectetu adipiscing elit sedie eiusmod tempor
                      incidie labore
                    </p>
                    <div className="plan-price">
                      <span className="currency">$</span>
                      <span className="price">29.57</span>
                    </div>
                    <a href="#" className="template-btn bordered-btn">
                      Choose Package <i className="far fa-long-arrow-right" />
                    </a>
                    <p>
                      Quis autem vel eumcur reprehenderit ea voluptate velit
                      esse quam
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
                  <div className="pricing-table featured-plan mt-40">
                    <h4 className="plan-name">Standard Plan</h4>
                    <p>
                      Amet consectetu adipiscing elit sedie eiusmod tempor
                      incidie labore
                    </p>
                    <div className="plan-price">
                      <span className="currency">$</span>
                      <span className="price">49.86</span>
                    </div>
                    <a href="#" className="template-btn bordered-btn">
                      Choose Package <i className="far fa-long-arrow-right" />
                    </a>
                    <p>
                      Quis autem vel eumcur reprehenderit ea voluptate velit
                      esse quam
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
                  <div className="pricing-table mt-40">
                    <h4 className="plan-name">Premium Plan</h4>
                    <p>
                      Amet consectetu adipiscing elit sedie eiusmod tempor
                      incidie labore
                    </p>
                    <div className="plan-price">
                      <span className="currency">$</span>
                      <span className="price">99.57</span>
                    </div>
                    <a href="#" className="template-btn bordered-btn">
                      Choose Package <i className="far fa-long-arrow-right" />
                    </a>
                    <p>
                      Quis autem vel eumcur reprehenderit ea voluptate velit
                      esse quam
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
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default CreativeAgencyPage;
