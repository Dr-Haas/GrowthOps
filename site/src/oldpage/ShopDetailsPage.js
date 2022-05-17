import Link from "next/link";
import { Fragment } from "react";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import ProductSlider from "../components/ProductSlider";
import PageTitle from "../layout/PageTitle";
import { relatedproductslider } from "../sliderProps";

const ShopDetailsPage = () => {
  return (
    <Fragment>
      <PageTitle pageName={"Shop Details"} />
      <section className="shop-area section-gap">
        <div className="container">
          <div className="product-details-wrapper">
            <div className="product-summary-area">
              <div className="row">
                <div className="col-lg-5">
                  <div className="product-gallery-wrapper">
                    <ProductSlider />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="product-summery-wrapper">
                    <div className="summery-top-wrap">
                      <div className="summery-top-left">
                        <h3 className="title">Green Table Light </h3>
                        <span className="subtitle">
                          Feature flexible, Cotton-covered
                        </span>
                      </div>
                      <div className="summery-top-right">
                        <span className="price">$75</span>
                        <ul className="rating">
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="far fa-star" />
                          </li>
                          <li>
                            <span>(12)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-short-descriptions">
                      <p>
                        A collection of textile samples lay spread out on the
                        table - Samosa was travelling salesman - and above it
                        there hung a picture that he had recently cut out of an
                        illustrated magazine and housed in a nice, gilded frame.
                        It showed a lady fitted out with a fur hat and fur boa
                        who sat upright, raising a heavy.
                      </p>
                    </div>
                    <div className="product-meta">
                      <ul className="product-categories">
                        <li>
                          <span>Categories:</span>
                        </li>
                        <li>
                          <a href="#">Essentials,</a>
                        </li>
                        <li>
                          <a href="#">Lights</a>
                        </li>
                      </ul>
                      <ul className="product-tags">
                        <li>
                          <span>Tags:</span>
                        </li>
                        <li>
                          <a href="#">Decor,</a>
                        </li>
                        <li>
                          <a href="#">Interior</a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-cart-form">
                      <form action="#" onSubmit={(e) => e.preventDefault()}>
                        <div className="quantity">
                          <input type="number" defaultValue={1} min={1} />
                        </div>
                        <div className="submit-btn">
                          <button type="submit" className="template-btn">
                            Add to Cart
                          </button>
                        </div>
                        <div className="wishlist">
                          <a href="#">
                            <i className="far fa-heart" />
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Tab.Container defaultActiveKey={"descriptions"}>
              <div className="product-details-tab">
                <Nav
                  as={"ul"}
                  className="nav nav-tabs"
                  id="productTab"
                  role="tablist"
                >
                  <Nav.Item as={"li"}>
                    <Nav.Link
                      as={"a"}
                      className="nav-link"
                      href="#descriptions"
                      eventKey="descriptions"
                    >
                      Descriptions
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as={"li"}>
                    <Nav.Link
                      as={"a"}
                      className="nav-link"
                      href="#information"
                      eventKey="information"
                      role="tab"
                    >
                      Information
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as={"li"}>
                    <Nav.Link
                      as={"a"}
                      className="nav-link"
                      href="#reviews"
                      eventKey="reviews"
                      role="tab"
                    >
                      Reviews(5k)
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content className="tab-content" id="productTabContent">
                  <Tab.Pane className="tab-pane fade" eventKey="descriptions">
                    <h3 className="tab-title">About Product</h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore verit atis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit sed quia non numquam eius modi
                      tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis suscipit laboriosam, nisi ut
                      aliquid ex ea commodi consequatur? Quis autem vel eum iure
                      reprehenderit qui in ea voluptate velit esse quam nihil
                      molestiae consequatur, vel illum qui dolorem eum
                    </p>
                  </Tab.Pane>
                  <Tab.Pane className="tab-pane fade" eventKey="information">
                    <h3 className="tab-title">Information</h3>
                    <table className="information-table">
                      <tbody>
                        <tr>
                          <th>Model</th>
                          <td>Microsoft Surface Pro 6</td>
                        </tr>
                        <tr>
                          <th>Processor</th>
                          <td>Intel® Core™ 8th Gen i5-8250U or i7-8650U</td>
                        </tr>
                        <tr>
                          <th>Memory</th>
                          <td>8GB or 16GB RAM </td>
                        </tr>
                        <tr>
                          <th>Storage</th>
                          <td>
                            Solid-state drive (SSD) options: 128GB, 256GB,
                            512GB, or 1TB
                          </td>
                        </tr>
                        <tr>
                          <th>Battery life</th>
                          <td>Up to 13.5 hours of local video playback</td>
                        </tr>
                        <tr>
                          <th>Graphics</th>
                          <td>
                            Intel® UHD Graphics 620 (i5) <br /> Intel® UHD
                            Graphics 620 (i7){" "}
                          </td>
                        </tr>
                        <tr>
                          <th>Warranty</th>
                          <td>1-year limited hardware warranty </td>
                        </tr>
                      </tbody>
                    </table>
                  </Tab.Pane>
                  <Tab.Pane
                    className="tab-pane fade"
                    eventKey="reviews"
                    role="tabpanel"
                  >
                    <h3 className="tab-title">Reviews</h3>
                    <div className="review-area">
                      <div className="row">
                        <div className="col-lg-6">
                          <ul className="review-lists">
                            <li className="single-review">
                              <div className="thumb">
                                <img
                                  src="/assets/img/author/01.png"
                                  alt="image"
                                />
                              </div>
                              <div className="review-desc">
                                <h5 className="name">Rosalina Kelian</h5>
                                <span className="date">19th May 2018</span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Aenean commodo ligula eget
                                  dolor. Aenean massa. cu sociis natoque
                                </p>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star" />
                                  </li>
                                  <li>
                                    <i className="fas fa-star" />
                                  </li>
                                  <li>
                                    <i className="fas fa-star" />
                                  </li>
                                  <li>
                                    <i className="fas fa-star-half-alt" />
                                  </li>
                                  <li>
                                    <i className="far fa-star" />
                                  </li>
                                </ul>
                                <a href="#" className="reply-btn">
                                  Reply
                                </a>
                              </div>
                            </li>
                            <li className="single-review">
                              <div className="thumb">
                                <img
                                  src="/assets/img/author/02.png"
                                  alt="image"
                                />
                              </div>
                              <div className="review-desc">
                                <h5 className="name">Rosalina Kelian</h5>
                                <span className="date">19th May 2018</span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Aenean commodo ligula eget
                                  dolor. Aenean massa. cu sociis natoque
                                </p>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star" />
                                  </li>
                                  <li>
                                    <i className="fas fa-star" />
                                  </li>
                                  <li>
                                    <i className="fas fa-star" />
                                  </li>
                                  <li>
                                    <i className="fas fa-star-half-alt" />
                                  </li>
                                  <li>
                                    <i className="far fa-star" />
                                  </li>
                                </ul>
                                <a href="#" className="reply-btn">
                                  Reply
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <div className="reviews-form content-mt-md-50">
                            <h5>Add Your Review</h5>
                            <form
                              action="#"
                              onSubmit={(e) => e.preventDefault()}
                            >
                              <div className="row">
                                <div className="col-md-6">
                                  <input type="text" placeholder="Your Name" />
                                </div>
                                <div className="col-md-6">
                                  <input
                                    type="email"
                                    placeholder="Your Email"
                                  />
                                </div>
                                <div className="col-12">
                                  <textarea
                                    placeholder="Your Review"
                                    defaultValue={""}
                                  />
                                </div>
                                <div className="col-12">
                                  <button
                                    type="submit"
                                    className="template-btn"
                                  >
                                    Submit Review
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </Tab.Container>
          </div>
          <div className="related-product-wrap">
            <h2 className="related-product-title">Related Products</h2>
            <Slider
              {...relatedproductslider}
              className="product-loop row related-product-slider"
            >
              <div className="single-product">
                <div className="product-thumb">
                  <img src="../assets/img/shop/01.jpg" alt="Image" />
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="far fa-shopping-cart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-expand" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product-info">
                  <ul className="rating">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                  <h6 className="title">
                    <Link href="/shop-details">
                      <a>Wood Home Decor</a>
                    </Link>
                  </h6>
                  <span className="price">$23.97</span>
                </div>
              </div>
              <div className="single-product">
                <div className="product-thumb">
                  <img src="../assets/img/shop/02.jpg" alt="Image" />
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="far fa-shopping-cart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-expand" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product-info">
                  <ul className="rating">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                  <h6 className="title">
                    <Link href="/shop-details">
                      <a>Wood Home Decor</a>
                    </Link>
                  </h6>
                  <span className="price">$23.97</span>
                </div>
              </div>
              <div className="single-product">
                <div className="product-thumb">
                  <img src="../assets/img/shop/03.jpg" alt="Image" />
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="far fa-shopping-cart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-expand" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product-info">
                  <ul className="rating">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                  <h6 className="title">
                    <Link href="/shop-details">
                      <a>Wood Home Decor</a>
                    </Link>
                  </h6>
                  <span className="price">$23.97</span>
                </div>
              </div>
              <div className="single-product">
                <div className="product-thumb">
                  <img src="../assets/img/shop/04.jpg" alt="Image" />
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="far fa-shopping-cart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-expand" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product-info">
                  <ul className="rating">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                  <h6 className="title">
                    <Link href="/shop-details">
                      <a>Wood Home Decor</a>
                    </Link>
                  </h6>
                  <span className="price">$23.97</span>
                </div>
              </div>
              <div className="single-product">
                <div className="product-thumb">
                  <img src="../assets/img/shop/05.jpg" alt="Image" />
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="far fa-shopping-cart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-expand" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product-info">
                  <ul className="rating">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                  <h6 className="title">
                    <Link href="/shop-details">
                      <a>Wood Home Decor</a>
                    </Link>
                  </h6>
                  <span className="price">$23.97</span>
                </div>
              </div>
              <div className="single-product">
                <div className="product-thumb">
                  <img src="../assets/img/shop/06.jpg" alt="Image" />
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="far fa-shopping-cart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-expand" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product-info">
                  <ul className="rating">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                  <h6 className="title">
                    <Link href="/shop-details">
                      <a>Wood Home Decor</a>
                    </Link>
                  </h6>
                  <span className="price">$23.97</span>
                </div>
              </div>
              <div className="single-product">
                <div className="product-thumb">
                  <img src="../assets/img/shop/07.jpg" alt="Image" />
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="far fa-shopping-cart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-expand" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product-info">
                  <ul className="rating">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                  <h6 className="title">
                    <Link href="/shop-details">
                      <a>Wood Home Decor</a>
                    </Link>
                  </h6>
                  <span className="price">$23.97</span>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default ShopDetailsPage;
