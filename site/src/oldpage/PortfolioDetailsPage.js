import Link from "next/link";
import { Fragment } from "react";
import Slider from "react-slick";
import PageTitle from "../layout/PageTitle";
import { portfolioslider } from "../sliderProps";

const PortfolioDetailsPage = () => {
  return (
    <Fragment>
      <PageTitle pageName={"Portfolio Details"} />
      <section className="portfolio-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12 order-first">
              <div className="portfolio-thumb">
                <img
                  src="../assets/img/portfolio/portfolio-details.jpg"
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-4 order-lg-last">
              <div className="portfolio-info-box wow fadeInUp">
                <h4 className="box-title">Project Info</h4>
                <ul>
                  <li>
                    <span className="info-title">Clients</span>
                    <span className="info">Webtend Agency</span>
                  </li>
                  <li>
                    <span className="info-title">Project Category</span>
                    <span className="info">Digital Marketing Solutions</span>
                  </li>
                  <li>
                    <span className="info-title">Location</span>
                    <span className="info">55 Main Street, New York</span>
                  </li>
                  <li>
                    <span className="info-title">Project Date</span>
                    <span className="info">25 September 2021</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="portfolio-details-content wow fadeInUp">
                <h2 className="portfolio-title">
                  Digital Marketing Consultations
                </h2>
                <p className="mb-30">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur
                </p>
                <p className="mb-30">
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium ,totam rem aperiam eaque
                  ipsa quae aillo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit sed quia
                  consequuntur magni dolores eos ratione voluptatem sequi
                  nesciunt.Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit
                </p>
                <div className="row">
                  <div className="col-sm-6">
                    <img
                      src="../assets/img/portfolio/portfolio-details-01.jpg"
                      alt="Image"
                      className="mb-30"
                    />
                  </div>
                  <div className="col-sm-6">
                    <img
                      src="../assets/img/portfolio/portfolio-details-02.jpg"
                      alt="Image"
                      className="mb-30"
                    />
                  </div>
                </div>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur? Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur
                </p>
                <div className="row">
                  <div className="col-lg-9">
                    <div className="feature-lists mt-30">
                      <div className="simple-icon-box icon-left mb-30 wow fadeInUp">
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
                      <div className="simple-icon-box icon-left mb-30 wow fadeInUp">
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
                      <div className="simple-icon-box icon-left mb-30 wow fadeInUp">
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
                  </div>
                </div>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Portfolio Area End ======*/}
      {/*====== Related Portfolio Start ======*/}
      <section className="related-portfolio bg-color-primary-7 section-gap">
        <div className="container">
          <div className="section-heading text-center mb-60">
            <h2 className="title">Related Projects</h2>
            <span className="tagline">Best SEO Optimization Agency</span>
          </div>
          <Slider {...portfolioslider} className="row portfolio-slider">
            <div className="portfolio-items-two">
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
            <div className="portfolio-items-two">
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
            <div className="portfolio-items-two">
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
            <div className="portfolio-items-two">
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
            <div className="portfolio-items-two">
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
            <div className="portfolio-items-two">
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
          </Slider>
        </div>
      </section>
    </Fragment>
  );
};
export default PortfolioDetailsPage;
