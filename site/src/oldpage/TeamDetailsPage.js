import { Fragment } from "react";
import Counter from "../components/Counter";
import PageTitle from "../layout/PageTitle";

const TeamDetailsPage = () => {
  return (
    <Fragment>
      <PageTitle pageName={"Team Details"} />
      <section className="team-section section-gap">
        <div className="container">
          <div className="team-details-box wow fadeInUp">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="member-photo text-lg-left text-center">
                  <img
                    src="../assets/img/team-member/member-details.jpg"
                    alt="Image"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="member-information">
                  <h3 className="member-name">
                    <a href="#">Geraldo M. Lundy</a>
                  </h3>
                  <span className="member-title">Senior Manager</span>
                  <p className="mb-20">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia
                  </p>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesunt. Neque porro quisquam est,
                    qui dolorem ipsum quia
                  </p>
                  <div className="counter-items row">
                    <div className="col-md-4 col-sm-6">
                      <div className="counter-item mt-40">
                        <div className="counter-wrap">
                          <Counter end={156} />
                          <span className="suffix">+</span>
                        </div>
                        <h6 className="title">Happy Clients</h6>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="counter-item mt-40">
                        <div className="counter-wrap">
                          <Counter end={720} />
                          <span className="suffix">+</span>
                        </div>
                        <h6 className="title">Project Complate</h6>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="counter-item mt-40">
                        <div className="counter-wrap">
                          <Counter end={15} />
                          <span className="suffix">+</span>
                        </div>
                        <h6 className="title">Years Of Experience</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-from section-gap-top">
            <div className="section-heading text-center mb-60">
              <h2 className="title">Feel Free To Message Me</h2>
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
export default TeamDetailsPage;
