import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const ProductSlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  return (
    <div className="product-gallery-wrapper">
      <Slider
        asNavFor={nav2}
        ref={(slider) => setSlider1(slider)}
        slidesToShow={1}
        slidesToScroll={1}
        arrows={false}
        fade={false}
        className="product-main-gallery"
      >
        <div className="single-thumbnail">
          <img src="../assets/img/shop/shop-gallery-01.jpg" alt="Gallery" />
        </div>
        <div className="single-thumbnail">
          <img src="../assets/img/shop/shop-gallery-01.jpg" alt="Gallery" />
        </div>
        <div className="single-thumbnail">
          <img src="../assets/img/shop/shop-gallery-01.jpg" alt="Gallery" />
        </div>
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={(slider) => setSlider2(slider)}
        slidesToShow={3}
        slidesToScroll={1}
        dots={false}
        centerMode={false}
        focusOnSelect={true}
        className="product-thumb-gallery"
      >
        <div className="col">
          <div className="single-thumb">
            <img
              src="../assets/img/shop/shop-gallery-thumb-01.jpg"
              alt="Image"
            />
          </div>
        </div>
        <div className="col">
          <div className="single-thumb">
            <img
              src="../assets/img/shop/shop-gallery-thumb-02.jpg"
              alt="Image"
            />
          </div>
        </div>
        <div className="col">
          <div className="single-thumb">
            <img
              src="../assets/img/shop/shop-gallery-thumb-03.jpg"
              alt="Image"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default ProductSlider;
