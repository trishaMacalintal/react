import React, { useEffect, useState } from "react";

function ScrollToTop() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (scroll) {
      window.scrollTo(0, 0); 
      setScroll(false); 
    }
  }, [scroll]);

  return (
    <button
      className="btn scroll-to-top text-white rounded-circle d-flex justify-content-center align-items-center bg-primary"
      onClick={() => setScroll(true)} 
    >
      <span className="uil uil-angle-up"></span>
    </button>
  );
}

export default ScrollToTop;
