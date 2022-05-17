import { Fragment } from "react";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import PageTitle from "../layout/PageTitle";
import { logocarouselactive } from "../sliderProps";

const PricingPage = () => {
  return (
    <Fragment>
      <PageTitle pageName={"Pricing Plan"} />
      <section className="pricing-section pricing-section-line section-gap pricing-blur-bg">
        <div className="container">
          <div className="section-heading text-center mb-50">
            <h2 className="title">Best Pricing For Business</h2>
            <span className="tagline">Best SEO Optimization Agency</span>
          </div>
          <Tab.Container defaultActiveKey={"monthly"}>
            <div className="pricing-tab-nav">
              <Nav
                as={"ul"}
                className="nav nav-tabs"
                id="pricingTab"
                role="tablist"
              >
                <Nav.Item as={"li"} className="nav-item">
                  <Nav.Link
                    as={"a"}
                    className="nav-link"
                    href="#monthly"
                    eventKey={"monthly"}
                  >
                    Monthly Package <i className="far fa-long-arrow-right" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as={"li"} className="nav-item">
                  <Nav.Link
                    as={"a"}
                    className="nav-link"
                    href="#yearly"
                    eventKey={"yearly"}
                  >
                    Yearly Package <i className="far fa-long-arrow-right" />
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <Tab.Content className="tab-content" id="pricingTabContent">
              <Tab.Pane
                className="tab-pane fade"
                eventKey="monthly"
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
              </Tab.Pane>
              <Tab.Pane
                className="tab-pane fade"
                eventKey="yearly"
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
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </section>
      {/*====== Pricing Section End ======*/}
      <div className="section-blob-bg-six section-gap">
        {/*====== Feature Section Start ======*/}
        <section className="feature-section section-gap-bottom">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="feature-img text-lg-left text-center content-mb-md-50">
                  <img src="../assets/img/feature-3.jpg" alt="Image" />
                </div>
              </div>
              <div className="col-lg-6 col-md-10">
                <div className="feature-text-block content-l-spacing">
                  <div className="section-heading mb-30">
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
        {/*====== Brand Section Start ======*/}
        <section className="brand-logo-section">
          <h2 className="d-none">title</h2>
          <div className="container">
            <div className="logo-carousel">
              <Slider
                {...logocarouselactive}
                className="row logo-carousel-active align-items-center"
              >
                <div className="col">
                  <a href="#">
                    <img
                      src="../assets/img/brand-logo/01.png"
                      alt="Brand logo"
                    />
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <img
                      src="../assets/img/brand-logo/02.png"
                      alt="Brand logo"
                    />
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <img
                      src="../assets/img/brand-logo/03.png"
                      alt="Brand logo"
                    />
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <img
                      src="../assets/img/brand-logo/04.png"
                      alt="Brand logo"
                    />
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <img
                      src="../assets/img/brand-logo/01.png"
                      alt="Brand logo"
                    />
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <img
                      src="../assets/img/brand-logo/02.png"
                      alt="Brand logo"
                    />
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <img
                      src="../assets/img/brand-logo/03.png"
                      alt="Brand logo"
                    />
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <img
                      src="../assets/img/brand-logo/04.png"
                      alt="Brand logo"
                    />
                  </a>
                </div>
              </Slider>
            </div>
          </div>
        </section>
        {/*====== Brand Section End ======*/}
      </div>
    </Fragment>
  );
};
export default PricingPage;
