import ContactUs from "./footerLinks/ContactUs";
import CopyRight from "./footerLinks/CopyRight";
import Newsletters from "./footerLinks/Newsletters";
import QuickLink from "./footerLinks/QuickLink";
import Support from "./footerLinks/Support";

const Footer2 = () => {
  return (
    <footer className="template-footer">
      <div className="container">
        <div className="footer-widgets-area">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <ContactUs logo={"logo"} />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <QuickLink />
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <Support />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Newsletters />
            </div>
          </div>
        </div>
        <div className="copyright-box">
          <CopyRight />
        </div>
      </div>
    </footer>
  );
};
export default Footer2;
