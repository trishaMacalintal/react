import React, { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Mousewheel, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import testimonials from "../data/testimonial.js";
import Testimonial from "../components/Testimonial.jsx";

function TestimonialSection() {
  useEffect(() => {
    const swiperConfig = {
      modules: [Navigation, Mousewheel, Autoplay],
      spaceBetween: 20,
      mousewheel: {
        forceToAxis: true,
        sensitivity: 20,
        releaseOnEdges: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          direction: "horizontal",
          centeredSlides: true,
          loop: true,
        },
        768: {
          direction: "horizontal",
          centeredSlides: true,
          slidesPerView: 2,
          loop: true,
        },
        992: {
          slidesPerView: 3,
          direction: "vertical",
          loop: false,
        },
      },
    };

    const swiperInstance = new Swiper(".swiper", swiperConfig);

    return () => {
      if (swiperInstance) {
        swiperInstance.destroy();
      }
    };
  }, []);

  return (
    <section className="bg-1100 mt-n1">
      <div className="mx-auto text-center">
        <hr className="horizontal-rule m-0 d-inline-block" />
      </div>
      <div className="container pb-8 pb-lg-10">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-7">
            <h2 className="fs-6 fs-lg-5 fw-bold text-white text-center pt-7 pb-4 pt-lg-9 pb-lg-6 lh-lg">
              {" "}
              <span className="underline"> 1,749 remote teams </span>have shared
              their experience with our app!
            </h2>
          </div>
          <div className="col-12 mb-4 mb-lg-6">
            <div className="row g-2">
              <div className="swiper-theme-container">
                <div className="swiper position-relative">
                  <div className="swiper-wrapper">
                    {testimonials.map((testimonial, key) => (
                      <div key={key} className="col-12 swiper-slide">
                        <Testimonial
                          image={testimonial.image}
                          name={testimonial.name}
                          text={testimonial.text}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a className="py-1 link-success" href="#!">
              <span>Read more reviews </span>
              <span className="uil uil-arrow-right icon"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
