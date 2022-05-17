import { useState } from "react";
import { Blog, Contact, Home, Pages, Services, Works } from "./menu";

const MobileMenu = ({ active, close }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeIcon = (value) => (value === activeMenu ? "submenu-opened" : ""),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <div
      className={`slide-panel mobile-slide-panel ${active ? "show-panel" : ""}`}
    >
      <div className="panel-overlay" onClick={() => close()} />
      <div className="panel-inner">
        <div className="panel-logo">
          <img src="/assets/img/logo.png" alt="" />
        </div>
        <nav className="mobile-menu">
          <ul className="primary-menu">
            <li>
              <a href="#">
                Home
                <span
                  className={`dd-trigger ${activeIcon("home")}`}
                  onClick={() => activeMenuSet("home")}
                >
                  <i className="fas fa-angle-down" />
                </span>
              </a>
              <ul className="submenu" style={activeLi("home")}>
                <Home />
              </ul>
            </li>
            <li>
              <a href="#">
                Services
                <span
                  className={`dd-trigger ${activeIcon("Services")}`}
                  onClick={() => activeMenuSet("Services")}
                >
                  <i className="fas fa-angle-down" />
                </span>
              </a>
              <ul className="submenu" style={activeLi("Services")}>
                <Services />
              </ul>
            </li>
            <li>
              <a href="#">
                Works
                <span
                  className={`dd-trigger ${activeIcon("Works")}`}
                  onClick={() => activeMenuSet("Works")}
                >
                  <i className="fas fa-angle-down" />
                </span>
              </a>
              <ul className="submenu" style={activeLi("Works")}>
                <Works />
              </ul>
            </li>
            <li>
              <a href="#">
                Blog
                <span
                  className={`dd-trigger ${activeIcon("Blog")}`}
                  onClick={() => activeMenuSet("Blog")}
                >
                  <i className="fas fa-angle-down" />
                </span>
              </a>
              <ul className="submenu" style={activeLi("Blog")}>
                <Blog />
              </ul>
            </li>
            <li>
              <a href="#">
                Pages
                <span
                  className={`dd-trigger ${activeIcon("Pages")}`}
                  onClick={() => activeMenuSet("Pages")}
                >
                  <i className="fas fa-angle-down" />
                </span>
              </a>
              <ul className="submenu" style={activeLi("Pages")}>
                <Pages />
              </ul>
            </li>
            <li>
              <Contact />
            </li>
          </ul>
        </nav>
        <a href="#" className="panel-close" onClick={() => close()}>
          <i className="fal fa-times" />
        </a>
      </div>
    </div>
  );
};
export default MobileMenu;
