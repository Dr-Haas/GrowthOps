import Link from "next/link";
import { Fragment, useState } from "react";
import rtl from "../../rtl";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

const Header5 = () => {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <Fragment>
      <header className="template-header navbar-right sticky-header header-border-bottom">
        <div className="container-fluid fluid-p-70">
          <div className="header-inner">
            <div className="header-left">
              <div className="site-logo">
                <Link href={`${rtl()}`}>
                  <a>
                    <img src="/assets/img/logo.png" alt="Qolle" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="header-right">
              <Nav />
              <ul className="header-extra">
                <li className="header-btns d-none d-md-block">
                  <a href="#" className="template-btn bg-fourth">
                    Let’s Talk
                    <i className="far fa-long-arrow-right" />
                  </a>
                </li>
                <li className="d-none d-xl-block">
                  <a
                    href="#"
                    className="off-canvas-btn style-two"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <span />
                    <span />
                    <span />
                  </a>
                </li>
                <li className="d-xl-none">
                  <div
                    className="navbar-toggler"
                    onClick={() => setMobileToggle(true)}
                  >
                    <span />
                    <span />
                    <span />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Sidebar active={sidebarToggle} close={() => setSidebarToggle(false)} />
      </header>
      <MobileMenu active={mobileToggle} close={() => setMobileToggle(false)} />
    </Fragment>
  );
};
export default Header5;
