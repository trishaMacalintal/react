import React from "react";

function HeroSection() {
  return (
    <section
      class="hero-section overflow-hidden position-relative z-0 mb-4 mb-lg-0"
      id="home"
    >
      <div class="hero-background">
        <div class="container">
          <div class="row gy-4 gy-md-8 pt-9 pt-lg-0">
            <div class="col-lg-6 text-center text-lg-start">
              <h1 class="fs-2 fs-lg-1 text-white fw-bold mb-2 mb-lg-x1 lh-base mt-3 mt-lg-0">
                {" "}
                Manage your remote <span class="text-nowrap">team work</span>
              </h1>
              <p class="fs-8 text-white mb-3 mb-lg-4 lh-lg">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next consultancy website within few minutes
              </p>
              <div class="d-flex justify-content-center justify-content-lg-start">
                <a
                  class="btn btn-primary btn-lg lh-xl mb-4 mb-md-5 mb-lg-7"
                  href="#!"
                >
                  Explore more
                </a>
              </div>
              <p class="mb-x1 fs-10 button-text text-uppercase fw-bold lh-base text-300">
                Download our app
              </p>
              <div class="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2 position-relative z-2">
                <a
                  class="border-0 p-0 bg-transparent cursor-pointer rounded-1"
                  href="#!"
                >
                  {" "}
                  <img
                    class="img-fluid"
                    src="assets/img/logos/App_Store.webp"
                    alt="assets/img/logos/App_Store.webp"
                  />
                </a>
                <a
                  class="border-0 p-0 bg-transparent cursor-pointer rounded-1"
                  href="#!"
                >
                  {" "}
                  <img
                    class="img-fluid"
                    src="assets/img/logos/Play_Store.webp"
                    alt="assets/img/logos/Play_Store.webp"
                  />
                </a>
              </div>
            </div>
            <div class="col-lg-6 position-lg-relative">
              <div class="position-lg-absolute z-1 text-center">
                <img
                  class="img-fluid chat-image"
                  src="assets/img/Hero/Frame.webp"
                  alt=""
                />
                <div class="position-absolute dots d-none d-md-block">
                  {" "}
                  <img
                    class="img-fluid w-50 w-lg-75"
                    src="assets/img/illustrations/Dots.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="position-absolute bottom-0 start-0 end-0 z-1">
        <img
          class="wave mb-md-n2"
          src="assets/img/illustrations/Wave.svg"
          alt=""
        />
        <div class="bg-white py-2 py-md-5"></div>
      </div>
    </section>
  );
}

export default HeroSection;
