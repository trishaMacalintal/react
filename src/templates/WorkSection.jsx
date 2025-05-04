import React from "react";

function WorkSection() {
  return (
    <section class="container mb-8 mb-lg-11">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-7">
          <h3 class="fs-4 fs-lg-3 fw-bold text-center mb-2 mb-lg-x1">
            {" "}
            How does <span class="text-nowrap">it work?</span>
          </h3>
          <p class="fs-8 mb-7 mb-lg-8 text-center lh-lg">
            You can use this as it is or tweak it as you seem necessary. you
            seem necessary.
          </p>
        </div>
        <div class="col-12">
          <div class="row g-sm-2 g-lg-3 align-items-center timeline">
            <div class="col-12 col-lg-4 d-flex flex-row flex-lg-column justify-content-center gap-2 gap-sm-x1 gap-md-4 gap-lg-0">
              <div class="timeline-step-1 w-25 w-lg-100 mb-4 mb-lg-5 mb-xl-6">
                <div class="timeline-item d-flex justify-content-center">
                  <div class="timeline-icon bg-primary rounded-circle d-flex justify-content-center align-items-center">
                    <span class="fs-6 fs-lg-5 fs-xl-4 text-white"> 1</span>
                  </div>
                </div>
              </div>
              <div class="py-1 py-lg-0 px-lg-5 w-75 w-sm-50 w-lg-100 timeline-content">
                <h6 class="fs-8 fw-bold text-lg-center lh-lg mb-2">
                  Install App
                </h6>
                <p class="text-lg-center lh-xl mb-0">
                  Install the app with a single click.
                </p>
              </div>
            </div>
            <div class="col-12 col-lg-4 d-flex flex-row flex-lg-column justify-content-center gap-2 gap-sm-x1 gap-md-4 gap-lg-0">
              <div class="timeline-step-2 w-25 w-lg-100 mb-4 mb-lg-5 mb-xl-6">
                <div class="timeline-item d-flex justify-content-center">
                  <div class="timeline-icon bg-success rounded-circle d-flex justify-content-center align-items-center">
                    <span class="fs-6 fs-lg-5 fs-xl-4 text-white"> 2</span>
                  </div>
                </div>
              </div>
              <div class="py-1 py-lg-0 px-lg-5 w-75 w-sm-50 w-lg-100 timeline-content">
                <h6 class="fs-8 fw-bold text-lg-center lh-lg mb-2">
                  Add Team Members
                </h6>
                <p class="text-lg-center lh-xl mb-0">
                  Start with adding team members to{" "}
                  <span class="text-nowrap">your channels. </span>
                </p>
              </div>
            </div>
            <div class="col-12 col-lg-4 d-flex flex-row flex-lg-column justify-content-center gap-2 gap-sm-x1 gap-md-4 gap-lg-0">
              <div class="timeline-step-3 position-relative z-1 overflow-hidden w-25 w-lg-100 mb-4 mb-lg-5 mb-xl-6">
                <div class="timeline-item d-flex justify-content-center">
                  <div class="timeline-icon bg-info rounded-circle d-flex justify-content-center align-items-center">
                    <span class="fs-6 fs-lg-5 fs-xl-4 text-white"> 3</span>
                  </div>
                </div>
              </div>
              <div class="py-1 py-lg-0 px-lg-5 w-75 w-sm-50 w-lg-100 timeline-content">
                <h6 class="fs-8 fw-bold text-lg-center lh-lg mb-2">
                  Start Rolling
                </h6>
                <p class="text-lg-center lh-xl mb-0">
                  Start operating your business in a simpler way{" "}
                  <span class="text-nowrap">and grow!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
