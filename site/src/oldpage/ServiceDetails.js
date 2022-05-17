import Link from "next/link";
import { Fragment } from "react";
import PageTitle from "../layout/PageTitle";

const ServiceDetails = () => {
  return (
    <Fragment>
      <PageTitle pageName={"Service Details"} />
      <section className="service-top-area section-gap">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-9 col-sm-10">
              <div className="service-illustration pr-lg-4 content-mb-md-50">
                <img
                  src="../assets/img/illustrations/service-illustration-2.png"
                  alt="Image"
                  className="animate-float-bob-y"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="service-top-content pl-xl-4">
                <div className="section-heading mb-50">
                  <h2 className="title">
                    We’re Very Experience In Digital marketing
                  </h2>
                  <span className="tagline">Best SEO Optimization Agency</span>
                </div>
                <ul className="icon-bordered-list">
                  <li className="wow fadeInUp" data-wow-delay="0.3s">
                    <div className="icon">
                      <i className="fal fa-desktop-alt" />
                    </div>
                    <div className="content">
                      <h5 className="title">Web Development</h5>
                      <p>Consectetur adipi scing elit sed eiusmod tempor</p>
                    </div>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay="0.4s">
                    <div className="icon">
                      <i className="fal fa-desktop-alt" />
                    </div>
                    <div className="content">
                      <h5 className="title">Web Development</h5>
                      <p>Consectetur adipi scing elit sed eiusmod tempor</p>
                    </div>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay="0.5s">
                    <div className="icon">
                      <i className="fal fa-desktop-alt" />
                    </div>
                    <div className="content">
                      <h5 className="title">Web Development</h5>
                      <p>Consectetur adipi scing elit sed eiusmod tempor</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Service Area End ======*/}
      {/*====== Process Section Start ======*/}
      <section
        className="process-section section-gap bg-color-primary-7 bg-cover-center"
        style={{ backgroundImage: "url(../assets/img/service-bg-2.jpg)" }}
      >
        <div className="container">
          <div className="section-heading mb-50 text-center">
            <h2 className="title">How To Manage Digital Solutions</h2>
            <span className="tagline">Best SEO Optimization Agency</span>
          </div>
          <div className="process-boxes">
            <div
              className="single-process-box wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-sm-10">
                  <div className="process-img">
                    <img
                      src="../assets/img/illustrations/process-1.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="process-content">
                    <span className="process-count">step 01</span>
                    <h2 className="title">Analysis Project</h2>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error luptatem
                      accusantium doloremque laudantium, totam rem apeam, eaque
                      ipsa quae illo inventore veritatis et quasi architecto
                      beatae vitae dicta sunt explicabo. Nemo enipsluptatem quia
                      voluptas sit aspernatur aut odit aut fugit, sed quia
                      consequuntur magni dolores eos qui ratione
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="single-process-box wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-sm-10 order-lg-last">
                  <div className="process-img">
                    <img
                      src="../assets/img/illustrations/process-2.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="process-content">
                    <span className="process-count">step 02</span>
                    <h2 className="title">Drow Your Projects</h2>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error luptatem
                      accusantium doloremque laudantium, totam rem apeam, eaque
                      ipsa quae illo inventore veritatis et quasi architecto
                      beatae vitae dicta sunt explicabo. Nemo enipsluptatem quia
                      voluptas sit aspernatur aut odit aut fugit, sed quia
                      consequuntur magni dolores eos qui ratione
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="single-process-box wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-sm-10">
                  <div className="process-img">
                    <img
                      src="../assets/img/illustrations/process-3.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="process-content">
                    <span className="process-count">step 03</span>
                    <h2 className="title">Project Monitoring</h2>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error luptatem
                      accusantium doloremque laudantium, totam rem apeam, eaque
                      ipsa quae illo inventore veritatis et quasi architecto
                      beatae vitae dicta sunt explicabo. Nemo enipsluptatem quia
                      voluptas sit aspernatur aut odit aut fugit, sed quia
                      consequuntur magni dolores eos qui ratione
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="single-process-box wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-sm-10 order-lg-last">
                  <div className="process-img">
                    <img
                      src="../assets/img/illustrations/process-4.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="process-content">
                    <span className="process-count">step 04</span>
                    <h2 className="title">Get Your Final Result</h2>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error luptatem
                      accusantium doloremque laudantium, totam rem apeam, eaque
                      ipsa quae illo inventore veritatis et quasi architecto
                      beatae vitae dicta sunt explicabo. Nemo enipsluptatem quia
                      voluptas sit aspernatur aut odit aut fugit, sed quia
                      consequuntur magni dolores eos qui ratione
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Process Section End ======*/}
      {/*====== Portfolio Section Start ======*/}
      <section className="portfolio-section section-gap">
        <div className="container">
          <div className="section-heading text-center mb-50">
            <h2 className="title">Some Of Our Latest Projects</h2>
            <span className="tagline">Best SEO Optimization Agency</span>
          </div>
          <div className="portfolio-filter">
            <ul>
              <li data-filter="*" className="active">
                Show All
              </li>
              <li data-filter=".design">Design</li>
              <li data-filter=".motions">Motions</li>
              <li data-filter=".graphics">Graphics</li>
              <li data-filter=".branding">Branding</li>
            </ul>
          </div>
          <div className="row filter-items">
            <div className="col-lg-4 col-sm-6 filter-item design graphics">
              <div className="portfolio-items-two mt-50">
                <div className="portfolio-thumb">
                  <img src="../assets/img/portfolio/05.jpg" alt="Image" />
                  <Link href="/portfolio-details">
                    <a className="portfolio-link" />
                  </Link>
                </div>
                <div className="portfolio-content">
                  <h4 className="title">
                    <Link href="/portfolio-details">
                      <a>Digital Agency Template</a>
                    </Link>
                  </h4>
                  <div className="categories">
                    <a href="#">Marketing Strategy</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 filter-item motions branding">
              <div className="portfolio-items-two mt-50">
                <div className="portfolio-thumb">
                  <img src="../assets/img/portfolio/06.jpg" alt="Image" />
                  <Link href="/portfolio-details">
                    <a className="portfolio-link" />
                  </Link>
                </div>
                <div className="portfolio-content">
                  <h4 className="title">
                    <Link href="/portfolio-details">
                      <a>Chatbot Web Template</a>
                    </Link>
                  </h4>
                  <div className="categories">
                    <a href="#">Marketing Strategy</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 filter-item design graphics">
              <div className="portfolio-items-two mt-50">
                <div className="portfolio-thumb">
                  <img src="../assets/img/portfolio/07.jpg" alt="Image" />
                  <Link href="/portfolio-details">
                    <a className="portfolio-link" />
                  </Link>
                </div>
                <div className="portfolio-content">
                  <h4 className="title">
                    <Link href="/portfolio-details">
                      <a>Digital Products Design</a>
                    </Link>
                  </h4>
                  <div className="categories">
                    <a href="#">Marketing Strategy</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 filter-item motions branding">
              <div className="portfolio-items-two mt-50">
                <div className="portfolio-thumb">
                  <img src="../assets/img/portfolio/08.jpg" alt="Image" />
                  <Link href="/portfolio-details">
                    <a className="portfolio-link" />
                  </Link>
                </div>
                <div className="portfolio-content">
                  <h4 className="title">
                    <Link href="/portfolio-details">
                      <a>Digital Agency Template</a>
                    </Link>
                  </h4>
                  <div className="categories">
                    <a href="#">Marketing Strategy</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 filter-item design graphics">
              <div className="portfolio-items-two mt-50">
                <div className="portfolio-thumb">
                  <img src="../assets/img/portfolio/09.jpg" alt="Image" />
                  <Link href="/portfolio-details">
                    <a className="portfolio-link" />
                  </Link>
                </div>
                <div className="portfolio-content">
                  <h4 className="title">
                    <Link href="/portfolio-details">
                      <a>Fitness Program Template</a>
                    </Link>
                  </h4>
                  <div className="categories">
                    <a href="#">Marketing Strategy</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 filter-item motions branding">
              <div className="portfolio-items-two mt-50">
                <div className="portfolio-thumb">
                  <img src="../assets/img/portfolio/10.jpg" alt="Image" />
                  <Link href="/portfolio-details">
                    <a className="portfolio-link" />
                  </Link>
                </div>
                <div className="portfolio-content">
                  <h4 className="title">
                    <Link href="/portfolio-details">
                      <a>E-Wallet Template</a>
                    </Link>
                  </h4>
                  <div className="categories">
                    <a href="#">Marketing Strategy</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Portfolio Section End ======*/}
      {/*====== Consultation Section Start ======*/}
      <section
        className="consultation-section section-gap bg-cover-center triangle-pattern-left have-blob-image overflow-hidden"
        style={{ backgroundImage: "url(../assets/img/consultation-bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-lg-between align-items-center justify-content-center">
            <div className="col-lg-5 col-md-10">
              <div className="consultation-form-area">
                <div className="consultation-form">
                  <h3 className="title">Free Consultation</h3>
                  <p className="subtitle">Get More SEO Updates</p>
                  <form action="#" onSubmit={(e) => e.preventDefault()}>
                    <div className="input-field">
                      <input type="text" placeholder="Full Name" />
                    </div>
                    <div className="input-field">
                      <input type="text" placeholder="Email Address" />
                    </div>
                    <div className="input-field">
                      <input type="text" placeholder="Phone Number" />
                    </div>
                    <div className="input-field">
                      <select>
                        <option value={1} disabled="" selected="">
                          Subject
                        </option>
                        <option value={2}>Subject One</option>
                        <option value={3}>Subject Two</option>
                        <option value={4}>Subject Three</option>
                      </select>
                    </div>
                    <div className="input-field">
                      <button type="submit" className="template-btn">
                        Get Consultations{" "}
                        <i className="far fa-long-arrow-right" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-10">
              <div className="fancy-image-gallery content-l-spacing content-mt-md-50">
                <div className="images-wrap">
                  <div className="image-one wow fadeInUp" data-wow-delay="0.1s">
                    <img src="../assets/img/fancy-gallery/01.jpg" alt="Image" />
                  </div>
                  <div className="image-two wow fadeInUp" data-wow-delay="0.2s">
                    <img src="../assets/img/fancy-gallery/02.jpg" alt="Image" />
                  </div>
                  <div
                    className="image-three wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <img src="../assets/img/fancy-gallery/03.jpg" alt="Image" />
                  </div>
                  <div
                    className="image-four wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <img src="../assets/img/fancy-gallery/04.jpg" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blob-image">
          <img src="../assets/img/shape/blob-white.png" alt="" />
        </div>
      </section>
    </Fragment>
  );
};
export default ServiceDetails;
