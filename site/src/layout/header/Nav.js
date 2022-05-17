import Link from "next/link";
import { Blog, Contact, Home, Pages, Services, Works } from "./menu";
const Nav = () => {
  return (
    <nav className="nav-menu d-none d-xl-block">
      <ul className="primary-menu">
        <li>
          <Link href="/">
            <a>
              Home
              <span className="dd-trigger">
                <i className="fas fa-angle-down" />
              </span>
            </a>
          </Link>
          <ul className="submenu">
            <Home />
          </ul>
        </li>
        <li>
          <Link href="/marketing-services">
            <a>
              Services
              <span className="dd-trigger">
                <i className="fas fa-angle-down" />
              </span>
            </a>
          </Link>
          <ul className="submenu">
            <Services />
          </ul>
        </li>
        <li>
          <Link href="/portfolio">
            <a>
              Works
              <span className="dd-trigger">
                <i className="fas fa-angle-down" />
              </span>
            </a>
          </Link>
          <ul className="submenu">
            <Works />
          </ul>
        </li>
        <li>
          <Link href="/blog-standard">
            <a>
              Blog
              <span className="dd-trigger">
                <i className="fas fa-angle-down" />
              </span>
            </a>
          </Link>
          <ul className="submenu">
            <Blog />
          </ul>
        </li>
        <li>
          <a href="#">
            Pages
            <span className="dd-trigger">
              <i className="fas fa-angle-down" />
            </span>
          </a>
          <ul className="submenu">
            <Pages />
          </ul>
        </li>
        <li>
          <Contact />
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
