import { Fragment } from "react";
import PageTitle from "../layout/PageTitle";

const ContactPage = () => {
  return (
    <Fragment>
      <PageTitle pageName={"Contact Us"} />
      <section className="contact-info-section section-gap">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-10">
              <div className="section-heading mb-30">
                <h2 className="title">
                  Ready To Get Popular Marketing Service
                </h2>
                <span className="tagline">Best SEO Optimization Agency</span>
              </div>
              <div className="contact-info-box wow fadeInUp">
                <div className="single-contact-info">
                  <div className="icon">
                    <i className="fal fa-map-marker-alt" />
                  </div>
                  <div className="content">
                    <h4 className="info-title">Address</h4>
                    <p>
                      7895 Piermont, Albuquerque, <br /> NM 198866, USA
                    </p>
                  </div>
                </div>
                <div className="single-contact-info">
                  <div className="icon">
                    <i className="fal fa-envelope-open" />
                  </div>
                  <div className="content">
                    <h4 className="info-title">Email Us</h4>
                    <p>
                      support@gmail.com <br /> www.infomar.net
                    </p>
                  </div>
                </div>
                <div className="single-contact-info">
                  <div className="icon">
                    <i className="fal fa-phone" />
                  </div>
                  <div className="content">
                    <h4 className="info-title">Phone</h4>
                    <p>
                      +012 (345) 678 99 <br /> +12345678
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-9">
              <div className="contact-img text-lg-right text-center content-mt-md-50">
                <img
                  src="../assets/img/illustrations/about-illustration.png"
                  alt="Image"
                  className="animate-float-bob-y"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Contact Info End ======*/}
      {/*====== Contact Maps Start ======*/}
      <section className="contact-map-area overflow-hidden">
        <h2 className="d-none">title</h2>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d162839.89482870552!2d-73.94144927060226!3d40.678878939453796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1630508446475!5m2!1sen!2sbd"
            loading="lazy"
          />
        </div>
      </section>
      {/*====== Contact Maps End ======*/}
      {/*====== Contact Form Start ======*/}
      <section className="contact-from-area section-gap">
        <div className="container">
          <div className="contact-from">
            <div className="section-heading text-center mb-60">
              <h2 className="title">Send Us Message</h2>
              <span className="tagline">Best Digital Agency Solutions</span>
            </div>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="input-field">
                    <input type="text" placeholder="Your Full Name" />
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="input-field">
                    <input type="text" placeholder="Phone Number" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="input-field">
                    <input type="email" placeholder="Email Address" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-field">
                    <input type="text" placeholder="Website" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-field">
                    <input type="text" placeholder="Subject" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-field">
                    <textarea placeholder="Message" defaultValue={""} />
                  </div>
                </div>
                <div className="col-12">
                  <button className="template-btn w-100">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default ContactPage;
