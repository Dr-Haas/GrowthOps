import dynamic from "next/dynamic";
import { Fragment } from "react";
import PageTitle from "../layout/PageTitle";
const LatestProjectsIsotop = dynamic(
  () => import("../components/LatestProjectsIsotop"),
  {
    ssr: false,
  }
);

const PortfolioPage = () => {
  return (
    <Fragment>
      <PageTitle pageName={"Portfolio"} />
      <section className="portfolio-section section-gap">
        <div className="container">
          <div className="section-heading text-center mb-50">
            <h2 className="title">Some Of Our Latest Projects</h2>
            <span className="tagline">Best SEO Optimization Agency</span>
          </div>
          <LatestProjectsIsotop />
        </div>
      </section>
    </Fragment>
  );
};
export default PortfolioPage;
