import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import NiceSelect from "../components/NiceSelect";
import Paggination from "../components/Paggination";
import PageTitle from "../layout/PageTitle";
import { getPagination, pagination } from "../utils";

const ShopPage = () => {
  let sort = 6;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".single_product_item", sort, active);
    let list = document.querySelectorAll(".single_product_item");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Fragment>
      <PageTitle pageName={"Shop"} />
      <section className="shop-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 order-lg-last">
              <div className="product-loop-topbar">
                <div className="row justify-content-between align-items-center">
                  <div className="col-sm-6">
                    <p className="product-count">Showing 1 - 5 of 12 Results</p>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="product-ordering">
                      <NiceSelect
                        value={[
                          "Default Sorting",
                          "Sort by Latest",
                          "Sort by Rating",
                          "Sort by Popularity",
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-loop row">
                <div className="single_product_item col-lg-4 col-md-6 col-sm-6">
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
                </div>
                <div className="single_product_item col-lg-4 col-md-6 col-sm-6">
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
                </div>
                <div className="single_product_item col-lg-4 col-md-6 col-sm-6">
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
                </div>
                <div className="single_product_item col-lg-4 col-md-6 col-sm-6">
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
                </div>
                <div className="single_product_item col-lg-4 col-md-6 col-sm-6">
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
                </div>
                <div className="single_product_item col-lg-4 col-md-6 col-sm-6">
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
                </div>
                <div className="single_product_item col-lg-4 col-md-6 col-sm-6">
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
                </div>
                <div className="single_product_item col-lg-4 col-md-6 col-sm-6">
                  <div className="single-product">
                    <div className="product-thumb">
                      <img src="../assets/img/shop/08.jpg" alt="Image" />
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
                </div>
                <div className="single_product_item col-lg-4 col-md-6 col-sm-6">
                  <div className="single-product">
                    <div className="product-thumb">
                      <img src="../assets/img/shop/09.jpg" alt="Image" />
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
                </div>
                <div className="single_product_item col-lg-4 col-md-6 col-sm-6">
                  <div className="single-product">
                    <div className="product-thumb">
                      <img src="../assets/img/shop/10.jpg" alt="Image" />
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
                </div>
                <div className="single_product_item col-lg-4 col-md-6 col-sm-6">
                  <div className="single-product">
                    <div className="product-thumb">
                      <img src="../assets/img/shop/11.jpg" alt="Image" />
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
                </div>
                <div className="single_product_item col-lg-4 col-md-6 col-sm-6">
                  <div className="single-product">
                    <div className="product-thumb">
                      <img src="../assets/img/shop/12.jpg" alt="Image" />
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
                </div>
              </div>
              <ul className="product-pagination">
                <Paggination
                  setActive={setActive}
                  active={active}
                  state={state}
                />
              </ul>
            </div>
            <div className="col-lg-3 order-lg-first">
              <div className="shop-sidebar">
                <div className="widget product-search-widget">
                  <form action="#" onSubmit={(e) => e.preventDefault()}>
                    <input type="search" placeholder="Search Food" />
                    <button type="submit">
                      <i className="far fa-search" />
                    </button>
                  </form>
                </div>
                <div className="widget product-category-widget">
                  <h4 className="widget-title">Category</h4>
                  <ul>
                    <li>
                      <a href="#">Canvas Basket</a>
                    </li>
                    <li>
                      <a href="#">Home Decoration</a>
                    </li>
                    <li>
                      <a href="#">Wood Essentials</a>
                    </li>
                    <li>
                      <a href="#">Home/Furniture</a>
                    </li>
                    <li>
                      <a href="#">Interior Office</a>
                    </li>
                    <li>
                      <a href="#">House Lights</a>
                    </li>
                  </ul>
                </div>
                <div className="widget product-list-widget">
                  <h4 className="widget-title">Sale Product</h4>
                  <ul>
                    <li>
                      <div className="product-thumb">
                        <img
                          src="../assets/img/shop/product-list-01.jpg"
                          alt="Image"
                        />
                      </div>
                      <div className="product-desc">
                        <h6 className="title">
                          <a href="#">Home Decor</a>
                        </h6>
                        <span className="category">Smart Watch</span>
                      </div>
                    </li>
                    <li>
                      <div className="product-thumb">
                        <img
                          src="../assets/img/shop/product-list-02.jpg"
                          alt="Image"
                        />
                      </div>
                      <div className="product-desc">
                        <h6 className="title">
                          <a href="#">Home Decore</a>
                        </h6>
                        <span className="category">Table Lamp</span>
                      </div>
                    </li>
                    <li>
                      <div className="product-thumb">
                        <img
                          src="../assets/img/shop/product-list-03.jpg"
                          alt="Image"
                        />
                      </div>
                      <div className="product-desc">
                        <h6 className="title">
                          <a href="#">Shoe Collection</a>
                        </h6>
                        <span className="category">Men Shoe</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget product-filter-widget">
                  <h4 className="widget-title">Filter By Price</h4>
                  <input
                    type="range"
                    min={5}
                    max={500}
                    defaultValue={300}
                    className="range-slider"
                  />
                  <span>$5-$5000</span>
                </div>
                <div className="widget product-tags-widget">
                  <h4 className="widget-title">Popular Tags</h4>
                  <ul>
                    <li>
                      <a href="#">Pasta</a>
                    </li>
                    <li>
                      <a href="#">Burger</a>
                    </li>
                    <li>
                      <a href="#">Coffee</a>
                    </li>
                    <li>
                      <a href="#">Pizza Pasta</a>
                    </li>
                    <li>
                      <a href="#">Organic</a>
                    </li>
                    <li>
                      <a href="#">Sea Fish</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default ShopPage;
