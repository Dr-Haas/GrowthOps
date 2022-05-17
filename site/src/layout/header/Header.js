import Link from "next/link";
import { Fragment, useState } from "react";
import rtl from "../../rtl";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

const Header = ({ dark }) => {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <Fragment>
      <header className="template-header absolute-header sticky-header" >
        <div className="container-fluid container-1550">
          <div className="header-inner">
            <div className="header-left">
              <div className="site-logo">
                <Link href={`${rtl()}`}>
                  <a>
                    <img
                      src={`/assets/img/${dark ? "logo-white" : "logo"}.png`}
                      alt="Growth Ops"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="header-center">
              {/*<Nav />*/}
            </div>
            <div className="header-right">
              <ul className="header-extra">
                <li className="d-none d-xl-block">
                  <a
                    href="#"
                    className="off-canvas-btn"
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
export default Header;
