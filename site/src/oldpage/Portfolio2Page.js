import Link from "next/link";
import { Fragment } from "react";
import PageTitle from "../layout/PageTitle";

const Portfolio2Page = () => {
  return (
    <Fragment>
      <PageTitle pageName={"Portfolio"} />
      <section className="portfolio-section section-gap-top-less">
        <h2 className="d-none">title</h2>
        <div className="container-fluid fluid-p-70">
          <div className="row">
            <div className="col-lg-6">
              <div className="portfolio-items-two no-content mt-30">
                <div className="portfolio-thumb">
                  <img src="../assets/img/portfolio/14.jpg" alt="Image" />
                  <Link href="/portfolio-details">
                    <a className="portfolio-link" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-sm-6">
                  <div className="portfolio-items-two no-content mt-30">
                    <div className="portfolio-thumb">
                      <img src="../assets/img/portfolio/15.jpg" alt="Image" />
                      <Link href="/portfolio-details">
                        <a className="portfolio-link" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="portfolio-items-two no-content mt-30">
                    <div className="portfolio-thumb">
                      <img src="../assets/img/portfolio/16.jpg" alt="Image" />
                      <Link href="/portfolio-details">
                        <a className="portfolio-link" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="portfolio-items-two no-content mt-30">
                    <div className="portfolio-thumb">
                      <img src="../assets/img/portfolio/17.jpg" alt="Image" />
                      <Link href="/portfolio-details">
                        <a className="portfolio-link" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="portfolio-items-two no-content mt-30">
                    <div className="portfolio-thumb">
                      <img src="../assets/img/portfolio/18.jpg" alt="Image" />
                      <Link href="/portfolio-details">
                        <a className="portfolio-link" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-last">
              <div className="portfolio-items-two no-content mt-30">
                <div className="portfolio-thumb">
                  <img src="../assets/img/portfolio/23.jpg" alt="Image" />
                  <Link href="/portfolio-details">
                    <a className="portfolio-link" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-sm-6">
                  <div className="portfolio-items-two no-content mt-30">
                    <div className="portfolio-thumb">
                      <img src="../assets/img/portfolio/19.jpg" alt="Image" />
                      <Link href="/portfolio-details">
                        <a className="portfolio-link" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="portfolio-items-two no-content mt-30">
                    <div className="portfolio-thumb">
                      <img src="../assets/img/portfolio/20.jpg" alt="Image" />
                      <Link href="/portfolio-details">
                        <a className="portfolio-link" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="portfolio-items-two no-content mt-30">
                    <div className="portfolio-thumb">
                      <img src="../assets/img/portfolio/21.jpg" alt="Image" />
                      <Link href="/portfolio-details">
                        <a className="portfolio-link" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="portfolio-items-two no-content mt-30">
                    <div className="portfolio-thumb">
                      <img src="../assets/img/portfolio/22.jpg" alt="Image" />
                      <Link href="/portfolio-details">
                        <a className="portfolio-link" />
                      </Link>
                    </div>
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
export default Portfolio2Page;
