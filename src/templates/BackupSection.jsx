import React, { useState, useRef, useEffect } from "react";

function BackupSection() {
  const [activeItem, setActiveItem] = useState("collapse1");
  const contentRefs = {
    collapse1: useRef(null),
    collapse2: useRef(null),
    collapse3: useRef(null),
    collapse4: useRef(null),
    collapse5: useRef(null),
  };

  const accordionStyle = {
    transition: "height 0.35s ease",
    overflow: "hidden"
  };

  const toggleAccordion = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (contentRefs.collapse1.current) {
        contentRefs.collapse1.current.style.height = `${contentRefs.collapse1.current.scrollHeight}px`;
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    Object.keys(contentRefs).forEach(id => {
      if (contentRefs[id].current) {
        if (id === activeItem) {
          contentRefs[id].current.style.height = `${contentRefs[id].current.scrollHeight}px`;
        } else {
          contentRefs[id].current.style.height = "0px";
        }
      }
    });
  }, [activeItem]);

  return (
    <section className="bg-1100">
      <div className="container">
        <div className="row py-8 py-md-10 py-lg-11">
          <div className="col-lg-6">
            <div className="row justify-content-center justify-content-lg-start">
              <div className="col-md-8 col-lg-12 col-xl-11">
                <h2 className="text-white fs-4 fs-lg-3 lh-sm mb-2 text-center text-lg-start fw-bold">
                  We are always here for your backup.
                </h2>
                <p className="fs-8 text-white text-opacity-65 mb-4 mb-md-6 mb-lg-7 lh-lg mb-6 mb-lg-7 text-center text-lg-start">
                  {" "}
                  We share common trends and strategies for creating & improving
                  your text-nowrap rental income.
                </p>
              </div>
              <div className="col-lg-10">
                <div className="d-flex gap-2 gap-lg-x1 mb-4 mb-lg-5">
                  <div>
                    <div className="check-icon bg-success mb-1 rounded-circle d-flex align-items-center justify-content-center">
                      {" "}
                      <span className="uil uil-check text-white"></span>
                    </div>
                  </div>
                  <div>
                    <h5 className="fs-8 fw-bold lh-lg mb-1 text-white">
                      Noise Free Locations
                    </h5>
                    <p className="lh-xl text-white text-opacity-70 mb-0">
                      We ensure noise-free locations for your peace of mind and
                      sound sleep.
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-2 gap-lg-x1 mb-4 mb-lg-5">
                  <div>
                    <div className="check-icon bg-success mb-1 rounded-circle d-flex align-items-center justify-content-center">
                      {" "}
                      <span className="uil uil-check text-white"></span>
                    </div>
                  </div>
                  <div>
                    <h5 className="fs-8 fw-bold lh-lg mb-1 text-white">
                      24/7 Hour Support
                    </h5>
                    <p className="lh-xl text-white text-opacity-70 mb-0">
                      Get support from our efficient customer support team,
                      24/7, all year round.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="accordion mt-lg-4 ps-3 pe-x1 bg-white" id="accordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading1">
                  <button
                    className={`accordion-button fs-8 lh-lg fw-bold pt-x1 pb-2 ${activeItem !== "collapse1" ? "collapsed" : ""}`}
                    type="button"
                    onClick={() => toggleAccordion("collapse1")}
                  >
                    How to setup BrainwaveIO?
                  </button>
                </h2>
                <div
                  ref={contentRefs.collapse1}
                  style={{...accordionStyle, height: activeItem === "collapse1" ? "auto" : "0px"}}
                  className={`accordion-collapse ${activeItem === "collapse1" ? "show" : ""}`}
                  id="collapse1"
                >
                  <div className="accordion-body lh-xl pt-0 pb-x1">
                    Enjoy the easy setup process with little to no coding
                    knowledge with us!
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading2">
                  <button
                    className={`accordion-button fs-8 lh-lg fw-bold pt-x1 pb-2 ${activeItem !== "collapse2" ? "collapsed" : ""}`}
                    type="button"
                    onClick={() => toggleAccordion("collapse2")}
                  >
                    Can I use BrainwaveIO for my clients?
                  </button>
                </h2>
                <div
                  ref={contentRefs.collapse2}
                  style={accordionStyle}
                  className={`accordion-collapse ${activeItem === "collapse2" ? "show" : ""}`}
                  id="collapse2"
                >
                  <div className="accordion-body lh-xl pt-0 pb-x1">
                    Yes, you can. Enjoy special rates for your first client!
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading3">
                  <button
                    className={`accordion-button fs-8 lh-lg fw-bold pt-x1 pb-2 ${activeItem !== "collapse3" ? "collapsed" : ""}`}
                    type="button"
                    onClick={() => toggleAccordion("collapse3")}
                  >
                    How often do you release update?
                  </button>
                </h2>
                <div
                  ref={contentRefs.collapse3}
                  style={accordionStyle}
                  className={`accordion-collapse ${activeItem === "collapse3" ? "show" : ""}`}
                  id="collapse3"
                >
                  <div className="accordion-body lh-xl pt-0 pb-x1">
                    We will keep updating the theme; stay with us to get
                    updated!
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading4">
                  <button
                    className={`accordion-button fs-8 lh-lg fw-bold pt-x1 pb-2 ${activeItem !== "collapse4" ? "collapsed" : ""}`}
                    type="button"
                    onClick={() => toggleAccordion("collapse4")}
                  >
                    How can I access to old version?
                  </button>
                </h2>
                <div
                  ref={contentRefs.collapse4}
                  style={accordionStyle}
                  className={`accordion-collapse ${activeItem === "collapse4" ? "show" : ""}`}
                  id="collapse4"
                >
                  <div className="accordion-body lh-xl pt-0 pb-x1">
                    Go to your cloud storage and provide the password. You'll
                    find it there..
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading5">
                  <button
                    className={`accordion-button fs-8 lh-lg fw-bold pt-x1 pb-2 ${activeItem !== "collapse5" ? "collapsed" : ""}`}
                    type="button"
                    onClick={() => toggleAccordion("collapse5")}
                  >
                    How can I get your support?
                  </button>
                </h2>
                <div
                  ref={contentRefs.collapse5}
                  style={accordionStyle}
                  className={`accordion-collapse ${activeItem === "collapse5" ? "show" : ""}`}
                  id="collapse5"
                >
                  <div className="accordion-body lh-xl pt-0 pb-x1">
                    To reach our support team, simply send an email to
                    support@brainwaveio.com. Our team will promptly address your
                    inquiry and provide assistance as needed.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BackupSection;
