import { Fragment } from "react";
import FaqAccordion from "../components/FaqAccordion";
import FreeConsultation from "../components/FreeConsultation";
import PageTitle from "../layout/PageTitle";

const FAQPage = () => {
  return (
    <Fragment>
      <PageTitle pageName={"Faq"} />
      <section className="faq-section section-gap-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-heading text-center mb-50">
                <h2 className="title">Our Asked Questions</h2>
                <span className="tagline">Best SEO Optimization Agency</span>
              </div>
              <FaqAccordion extraClass={"__"} extraFaq />
            </div>
          </div>
        </div>
      </section>
      {/*====== Faq Section End ======*/}
      {/*====== Consultation Section Start ======*/}
      <section className="consultation-section section-gap section-blob-bg-six">
        <div className="container">
          <div className="content-boxed">
            <div className="content-left">
              <div className="consultation-form-img">
                <img
                  src="../assets/img/consultation-img.jpg"
                  alt="Consultation"
                  className="rounded"
                />
              </div>
            </div>
            <div className="content-right">
              <FreeConsultation extraClass={"consultation-style-two"} />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default FAQPage;
