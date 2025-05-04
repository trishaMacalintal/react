import React from "react";

function Testimonial(props) {
  return (

      <div className="d-flex justify-content-center gap-2">
        <div
          className={`d-flex flex-column flex-lg-row gap-2 px-4 py-x1 ${props.cardClass}`}
        >
          <div className="text-center text-lg-start">
            <img
              className="card-image rounded-circle object-fit-cover"
              src={props.image}
              alt={`${props.name} avatar`}
            />
          </div>
          <div className="text-center text-lg-start">
            <p className="fs-8 mb-2 lh-lg line-clamp-3 text-1100">
              "{props.text}"
            </p>
            <p className="text-800 lh-xl mb-0">{props.name}</p>
          </div>
        </div>
      </div>
  );
}

export default Testimonial;
