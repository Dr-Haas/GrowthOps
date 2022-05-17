import Link from "next/link";
import { Fragment } from "react";
import PageTitle from "../layout/PageTitle";

const BlogDetailsPage = () => {
  return (
    <Fragment>
      <PageTitle pageName={"Blog Details"} />
      <section className="blog-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="single-blog-post blog-details-content pr-xl-5">
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
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium dolor emque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam vluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni lores eos qui ratione
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui
                    doloem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem ullam corporis
                    suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem eum fugiat quo voluptas nulla pariatur
                  </p>
                  <blockquote>
                    <p>
                      Smashing Podcast Episode Pauloag Conve Optimization
                      Inspired Decisions
                    </p>
                    <cite>Rasalina Willamson</cite>
                  </blockquote>
                  <p>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae
                  </p>
                  <div className="content-footer">
                    <ul className="related-tags">
                      <li className="title">Tags:</li>
                      <li>
                        <a href="#">Agency</a>
                      </li>
                      <li>
                        <a href="#">Cosmetics</a>
                      </li>
                      <li>
                        <a href="#">Beauty</a>
                      </li>
                    </ul>
                    <ul className="post-share">
                      <li className="title">Share:</li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                    <div className="post-author">
                      <div className="author-photo">
                        <img src="../assets/img/blog/author.jpg" alt="Image" />
                      </div>
                      <div className="author-content">
                        <h4 className="name">Rasalina Wilimson</h4>
                        <p>
                          Quis autem eum reprehenderit voluptate esse quam
                          molestiae consequatu dolorem voluptas nulla pariano
                          rejects
                        </p>
                        <ul className="share-links">
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-behance" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-dribbble" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="post-nav">
                      <div className="prev-post">
                        <div className="post-thumb">
                          <img
                            src="../assets/img/blog/post-nav-prev.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="content">
                          <h6>How Deal With Back During Pregn</h6>
                          <span>25 May 2021</span>
                        </div>
                      </div>
                      <div className="next-post">
                        <div className="post-thumb">
                          <img
                            src="../assets/img/blog/post-nav-next.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="content">
                          <h6>Online Environme Work Older See</h6>
                          <span>25 May 2021</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-template">
                    <h4 className="template-title">Peopel Comments</h4>
                    <ul className="comment-list">
                      <li>
                        <div className="comment-body">
                          <div className="author-thumb">
                            <img
                              src="../assets/img/blog/comment-author-01.jpg"
                              alt="Image"
                            />
                          </div>
                          <div className="comment-content">
                            <h6 className="name">
                              John F. Medina
                              <span className="comment-date">25 May 2021</span>
                            </h6>
                            <p>
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem doloremque laudantium totam rem
                              aperiam
                            </p>
                            <a href="#" className="reply-link">
                              Reply <i className="far fa-long-arrow-right" />
                            </a>
                          </div>
                        </div>
                        <ul className="children">
                          <li>
                            <div className="comment-body">
                              <div className="author-thumb">
                                <img
                                  src="../assets/img/blog/comment-author-02.jpg"
                                  alt="Image"
                                />
                              </div>
                              <div className="comment-content">
                                <h6 className="name">
                                  Jeffrey T. Kelly
                                  <span className="comment-date">
                                    25 May 2021
                                  </span>
                                </h6>
                                <p>
                                  Perspiciatis unde omnis iste natus error sit
                                  voluptatem accusantium doloremque laudantium
                                </p>
                                <a href="#" className="reply-link">
                                  Reply{" "}
                                  <i className="far fa-long-arrow-right" />
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="comment-body">
                          <div className="author-thumb">
                            <img
                              src="../assets/img/blog/comment-author-03.jpg"
                              alt="Image"
                            />
                          </div>
                          <div className="comment-content">
                            <h6 className="name">
                              Richard B. Zellmer
                              <span className="comment-date">25 May 2021</span>
                            </h6>
                            <p>
                              Unde omnis iste natus error sit voluptate
                              accusantium dolore mque laudantium totam rem
                              aperiam
                            </p>
                            <a href="#" className="reply-link">
                              Reply <i className="far fa-long-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="comment-form">
                      <h4 className="template-title">Leave A Message</h4>
                      <form action="#" onSubmit={(e) => e.preventDefault()}>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="input-field mb-30">
                              <input type="text" placeholder="Name" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="input-field mb-30">
                              <input type="email" placeholder="Email" />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="input-field mb-30">
                              <textarea
                                placeholder="Write Comment"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="input-field">
                              <button type="submit" className="template-btn">
                                Leave a Comments{" "}
                                <i className="far fa-long-arrow-right" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
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
export default BlogDetailsPage;
