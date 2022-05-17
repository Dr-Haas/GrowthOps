import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import Paggination from "../components/Paggination";
import PageTitle from "../layout/PageTitle";
import { getPagination, pagination } from "../utils";

const BlogStandardPage = () => {
  let sort = 2;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".single-blog-post", sort, active);
    let list = document.querySelectorAll(".single-blog-post");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Fragment>
      <PageTitle pageName={"Blog Standard"} />
      <section className="blog-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-post-loop pr-xl-5">
                <div className="single-blog-post">
                  <div className="post-thumbnail">
                    <img src="../assets/img/blog/01.jpg" alt="Image" />
                  </div>
                  <div className="post-content">
                    <div className="post-categories">
                      <a href="#">Marketing</a>
                    </div>
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle" /> David D. Ansley
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" /> 25 Sep 2021
                        </a>
                      </li>
                    </ul>
                    <h3 className="post-title">
                      <Link href="/blog-details">
                        <a>
                          Front-End Performance Checklist 2021 PDF, Apple Pages,
                          MS Word
                        </a>
                      </Link>
                    </h3>
                    <p>
                      Sit amet consectetur adipiscing elit sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua psum
                      suspendisse ultrices gravida.
                    </p>
                    <a href="#" className="post-btn">
                      Read More <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="single-blog-post no-thumbnail">
                  <div className="post-content">
                    <div className="post-categories">
                      <a href="#">Business</a>
                    </div>
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle" /> David D. Ansley
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" /> 25 Sep 2021
                        </a>
                      </li>
                    </ul>
                    <h3 className="post-title">
                      <Link href="/blog-details">
                        <a>
                          Smashing Guide To The World Of Search Engine
                          Optimization
                        </a>
                      </Link>
                    </h3>
                    <p>
                      Sit amet consectetur adipiscing elit sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua psum
                      suspendisse ultrices gravida.
                    </p>
                    <a href="#" className="post-btn">
                      Read More <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="single-blog-post video-post">
                  <div className="post-thumbnail">
                    <img src="../assets/img/blog/02.jpg" alt="Image" />
                    <a
                      href="https://www.youtube.com/watch?v=XSGBVzeBUbk"
                      className="video-popup"
                      data-lity=""
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="post-categories">
                      <a href="#">Marketing</a>
                    </div>
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle" /> David D. Ansley
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" /> 25 Sep 2021
                        </a>
                      </li>
                    </ul>
                    <h3 className="post-title">
                      <Link href="/blog-details">
                        <a>
                          How To Create A Headless WordPress Site On The
                          JAMstack
                        </a>
                      </Link>
                    </h3>
                    <p>
                      Sit amet consectetur adipiscing elit sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua psum
                      suspendisse ultrices gravida.
                    </p>
                    <a href="#" className="post-btn">
                      Read More <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="single-blog-post quote-post">
                  <div className="post-content">
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle" /> David D. Ansley
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" /> 25 Sep 2021
                        </a>
                      </li>
                    </ul>
                    <h3 className="post-title">
                      <Link href="/blog-details">
                        <a>
                          Understanding CSS Grid Creating Container Smashing
                          Guide World Of Search
                        </a>
                      </Link>
                    </h3>
                  </div>
                </div>
                <div className="single-blog-post">
                  <div className="post-thumbnail">
                    <img src="../assets/img/blog/03.jpg" alt="Image" />
                  </div>
                  <div className="post-content">
                    <div className="post-categories">
                      <a href="#">Marketing</a>
                    </div>
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle" /> David D. Ansley
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" /> 25 Sep 2021
                        </a>
                      </li>
                    </ul>
                    <h3 className="post-title">
                      <Link href="/blog-details">
                        <a>
                          Front-End Performance Checklist 2021 PDF, Apple Pages,
                          MS Word
                        </a>
                      </Link>
                    </h3>
                    <p>
                      Sit amet consectetur adipiscing elit sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua psum
                      suspendisse ultrices gravida.
                    </p>
                    <a href="#" className="post-btn">
                      Read More <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>{" "}
              <ul className="page-pagination">
                <Paggination
                  setActive={setActive}
                  active={active}
                  state={state}
                />
              </ul>
            </div>
            <div className="col-lg-4">
              <div className="primary-sidebar">
                <div className="widget search-widget">
                  <h4 className="search-title">Search Here</h4>
                  <form>
                    <input type="search" placeholder="Keywords" />
                    <button className="search-btn">
                      <i className="far fa-search" />
                    </button>
                  </form>
                </div>
                <div className="widget category-widget">
                  <h4 className="widget-title">Category</h4>
                  <ul className="category-link">
                    <li>
                      <a href="#">Web Development</a>
                    </li>
                    <li>
                      <a href="#">Email Marketing</a>
                    </li>
                    <li>
                      <a href="#">IT Consultancy</a>
                    </li>
                    <li>
                      <a href="#">Business Consulting</a>
                    </li>
                    <li>
                      <a href="#">Apps Development</a>
                    </li>
                    <li>
                      <a href="#">Media Marketing</a>
                    </li>
                    <li>
                      <a href="#">SEO Optimizations</a>
                    </li>
                  </ul>
                </div>
                <div className="widget latest-post-widget">
                  <h4 className="widget-title">Latest News</h4>
                  <div className="popular-posts-wrapper">
                    <div className="popular-posts-item">
                      <div className="popular-posts-thumbnail">
                        <Link href="/blog-details">
                          <a>
                            <img
                              src="../assets/img/blog/latest-post-thumbnail-1.jpg"
                              alt="latest post one"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="popular-posts-item-content">
                        <h5 className="popular-posts-title">
                          <Link href="/blog-details">
                            <a>Build Seamless Spreadshet Import Experience</a>
                          </Link>
                        </h5>
                        <a href="#" className="posts-date">
                          <i className="far fa-calendar-alt" /> 25 May 2021
                        </a>
                      </div>
                    </div>
                    <div className="popular-posts-item">
                      <div className="popular-posts-thumbnail">
                        <Link href="/blog-details">
                          <a>
                            <img
                              src="../assets/img/blog/latest-post-thumbnail-2.jpg"
                              alt="latest post two"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="popular-posts-item-content">
                        <h5 className="popular-posts-title">
                          <Link href="/blog-details">
                            <a>Creating Online Environment Work Well Older</a>
                          </Link>
                        </h5>
                        <a href="#" className="posts-date">
                          <i className="far fa-calendar-alt" /> 25 May 2021
                        </a>
                      </div>
                    </div>
                    <div className="popular-posts-item">
                      <div className="popular-posts-thumbnail">
                        <Link href="/blog-details">
                          <a>
                            <img
                              src="../assets/img/blog/latest-post-thumbnail-3.jpg"
                              alt="latest post three"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="popular-posts-item-content">
                        <h5 className="popular-posts-title">
                          <Link href="/blog-details">
                            <a>Signs Website Feels More Haunted House</a>
                          </Link>
                        </h5>
                        <a href="#" className="posts-date">
                          <i className="far fa-calendar-alt" /> 25 May 2021
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="widget cta-widget"
                  style={{
                    backgroundImage: "url(../assets/img/blog/cta-widget.jpg)",
                  }}
                >
                  <h4 className="cta-title">Get Free Consultations</h4>
                  <span className="subtitle">Special advisors</span>
                  <p>Quis autem vel eum iure repreh ende lorem</p>
                  <a href="#" className="cta-btn">
                    Let’s Talk SEO <i className="far fa-long-arrow-right" />
                  </a>
                </div>
                <div className="widget widget-tag-cloud">
                  <h4 className="widget-title">Popular Tags</h4>
                  <div className="tags">
                    <a href="#">Marketing</a>
                    <a href="#">Strategy</a>
                    <a href="#">Development</a>
                    <a href="#">Consultancy</a>
                    <a href="#">Law farms</a>
                    <a href="#">Farms</a>
                    <a href="#">Management</a>
                    <a href="#">Planning</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default BlogStandardPage;
