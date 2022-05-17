import dynamic from "next/dynamic";
import { Fragment } from "react";
import FreeConsultation from "../components/FreeConsultation";
import PageTitle from "../layout/PageTitle";

const LatestProjectsIsotop = dynamic(
  () => import("../components/LatestProjectsIsotop"),
  {
    ssr: false,
  }
);

const ServiceDetailsPage = () => {
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
          <LatestProjectsIsotop />
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
                <FreeConsultation />
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
export default ServiceDetailsPage;
