import React from "react";

function CollaboratorSection() {
  return (
    <section class="container mb-8 mb-lg-13">
      <div class="row align-items-center">
        <div class="col-12 col-lg-6 col-xl-5 order-lg-1">
          <img
            class="img-fluid"
            src="assets/img/Hero/Collaborator.webp"
            alt=""
          />
        </div>
        <div class="col-12 col-lg-6 col-xl-7">
          <div class="row justify-content-center justify-content-lg-start">
            <div class="col-sm-10 col-md-8 col-lg-11">
              <h2 class="fs-4 fs-lg-3 fw-bold mb-2 text-center text-lg-start">
                {" "}
                Organize remote team fast & easily.
              </h2>
              <p class="fs-8 mb-4 mb-lg-5 lh-lg text-center text-lg-start fw-normal">
                Organizing and managing your remote teams has never been this
                easy!
              </p>
            </div>
            <div class="col-12">
              <div class="mb-x1 mb-lg-3">
                <h5 class="fs-8 fw-bold lh-lg mb-1">Create Unlimited Teams </h5>
                <p class="b-0 lh-xl">
                  Create unlimited teams and boost productivity with efficient
                  collaboration.
                </p>
              </div>
              <div>
                <h5 class="fs-8 fw-bold lh-lg mb-1">
                  {" "}
                  Hasslefree Chat with Everyone
                </h5>
                <p class="lh-xl mb-0">
                  With unique and simple UIs, keep yourself connected across all
                  the teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CollaboratorSection;
