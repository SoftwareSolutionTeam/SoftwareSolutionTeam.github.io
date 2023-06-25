import { Swiper, Parallax, Navigation } from "swiper";
import "../../../../node_modules/swiper/swiper-bundle.css";
import "../../../../node_modules/swiper/swiper-bundle.js";
import React, { useEffect, useRef, useState } from "react";
import "../../../../node_modules/font-awesome/css/font-awesome.min.css";

Swiper.use([Parallax, Navigation]);

function RelatedProducts() {
  useEffect(() => {
    var swiper = new Swiper(".slide-container", {
      slidesPerView: 6,
      spaceBetween: 10,
      slidesPerGroup: 6,
      loop: true,
      centerSlide: true,
      fadeEffect: true,
      grabCursor: false,
      observer: true,
      observeParents: true,
      parallax: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
          slidesPerGroup: 1,
        },
        520: {
          slidesPerView: 2,
          spaceBetween: 10,
          slidesPerGroup: 2,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
          slidesPerGroup: 3,
        },
        995: {
          slidesPerView: 4,
          spaceBetween: 10,
          slidesPerGroup: 4,
        },
        1000: {
          slidesPerView: 4,
          spaceBetween: 10,
          slidesPerGroup: 4,
        },
        1042: {
          slidesPerView: 5,
          spaceBetween: 10,
          slidesPerGroup: 5,
        },
        1050: {
          slidesPerView: 6,
          spaceBetween: 10,
          slidesPerGroup: 6,
        },
      },
    });
  }, []);

  function oneSlider({ imgUrl, name, price }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isWishlistActive, setIsWishlistActive] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    const handleWishlistClick = () => {
      setIsWishlistActive(!isWishlistActive);
    };
    return (
      <div
        className="card swiper-slide"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`p-2 ${!isHovered?'opacity-0':''}`}>
          <button onClick={handleWishlistClick} className={`btn wish-list fa fa-regular p-1 fa-heart bg-dark text-light ${isWishlistActive?'wishlist-red-color':''}`} />
        </div>
        <div className="image-box">
          <img className="related-product-image" src={imgUrl} alt="" />
        </div>
        <div className="profile-details text-center">
          <div className="name-job">
            <h3 className="name ">{name}</h3>
            <h4 className="job">{price} $</h4>
          </div>
          <div className="mb-3">
            <button
              className={`btn btn-warning ${isHovered ? "" : "opacity-0"}`}
            >
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <h1 className="display-4 fw-bolder text-center text-dark">
        Related Products
      </h1>
      <div className="container swiper mb-2">
        <div className="slide-container">
          <div className="card-wrapper swiper-wrapper">
            {oneSlider({
              imgUrl:
                "https://cdn.dsmcdn.com/ty814/product/media/images/20230406/11/319331216/250484948/1/1_org_zoom.jpg",
              name: "Iphone 11",
              price: "34.549",
            })}
            {oneSlider({
              imgUrl:
                "https://cdn.dsmcdn.com/ty814/product/media/images/20230406/11/319331216/250484948/1/1_org_zoom.jpg",
              name: "Iphone 13",
              price: "34.549",
            })}
            {oneSlider({
              imgUrl:
                "https://cdn.dsmcdn.com/ty814/product/media/images/20230406/11/319331216/250484948/1/1_org_zoom.jpg",
              name: "Iphone 13",
              price: "34.549",
            })}
            {oneSlider({
              imgUrl:
                "https://cdn.dsmcdn.com/ty814/product/media/images/20230406/11/319331216/250484948/1/1_org_zoom.jpg",
              name: "Iphone 13",
              price: "34.549",
            })}
            {oneSlider({
              imgUrl:
                "https://cdn.dsmcdn.com/ty814/product/media/images/20230406/11/319331216/250484948/1/1_org_zoom.jpg",
              name: "Iphone 13",
              price: "34.549",
            })}
            {oneSlider({
              imgUrl:
                "https://cdn.dsmcdn.com/ty814/product/media/images/20230406/11/319331216/250484948/1/1_org_zoom.jpg",
              name: "Iphone 13",
              price: "34.549",
            })}
            {oneSlider({
              imgUrl:
                "https://cdn.dsmcdn.com/ty814/product/media/images/20230406/11/319331216/250484948/1/1_org_zoom.jpg",
              name: "Iphone 13",
              price: "34.549",
            })}
            {oneSlider({
              imgUrl:
                "https://cdn.dsmcdn.com/ty814/product/media/images/20230406/11/319331216/250484948/1/1_org_zoom.jpg",
              name: "Iphone 13",
              price: "34.549",
            })}
            {oneSlider({
              imgUrl:
                "https://cdn.dsmcdn.com/ty814/product/media/images/20230406/11/319331216/250484948/1/1_org_zoom.jpg",
              name: "Iphone 13",
              price: "34.549",
            })}
          </div>
        </div>

        <div className="swiper-button-prev swiper-navBtn ml-1"></div>
        <div className="swiper-button-next swiper-navBtn"></div>
        <div className="swiper-pagination"></div>
      </div>
    </>
  );
}

export default RelatedProducts;
