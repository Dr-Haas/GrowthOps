import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import rtl from "../../rtl";

export const Home = () => {
  const [path, setPath] = useState(null);
  useEffect(() => {
    let location = window.location.pathname;
    setPath(location.includes("rtl"));
  }, []);

  return (
    <Fragment>
      <li>
        <Link href={`${rtl()}`}>SEO Agency</Link>
      </li>
      <li>
        <Link href={`${rtl()}index-2`}>Digital Agency</Link>
      </li>
      <li>
        <Link href={`${rtl()}index-3`}>Marketing Agency</Link>
      </li>
      <li>
        <Link href={`${rtl()}index-4`}>Digital Agency Dark</Link>
      </li>
      {!path && (
        <li>
          <Link href={`/index-5`}>Design Studio</Link>
        </li>
      )}
    </Fragment>
  );
};
export const Services = () => (
  <Fragment>
    <li>
      <Link href={`${rtl()}marketing-services`}>Marketing Services</Link>
    </li>
    <li>
      <Link href={`${rtl()}agency-services`}>Agency Services</Link>
    </li>
    <li>
      <Link href={`${rtl()}service-details`}>Services Details</Link>
    </li>
  </Fragment>
);
export const Works = () => (
  <Fragment>
    <li>
      <Link href={`${rtl()}portfolio`}>Works One</Link>
    </li>
    <li>
      <Link href={`${rtl()}portfolio-2`}>Works Two</Link>
    </li>
    <li>
      <Link href={`${rtl()}portfolio-details`}>Works Details</Link>
    </li>
  </Fragment>
);
export const Blog = () => (
  <Fragment>
    <li>
      <Link href={`${rtl()}blog-standard`}>Blog Standard</Link>
    </li>
    <li>
      <Link href={`${rtl()}blog-details`}>Blog Details</Link>
    </li>
  </Fragment>
);
export const Pages = () => (
  <Fragment>
    <li>
      <Link href={`${rtl()}about`}>About Us</Link>
    </li>
    <li>
      <Link href={`${rtl()}pricing`}>Pricing</Link>
    </li>
    <li>
      <Link href={`${rtl()}faq`}>Faq</Link>
    </li>
    <li>
      <Link href={`${rtl()}team`}>Our Team</Link>
    </li>
    <li>
      <Link href={`${rtl()}team-details`}>Team Details</Link>
    </li>
    <li>
      <Link href={`${rtl()}shop`}>Shop</Link>
    </li>
    <li>
      <Link href={`${rtl()}shop-details`}>Shop Details</Link>
    </li>
  </Fragment>
);
export const Contact = () => (
  <Fragment>
    <Link href={`${rtl()}contact`}>Contact</Link>
  </Fragment>
);
