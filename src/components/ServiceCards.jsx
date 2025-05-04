import React from "react";

function ServiceCards(props) {
  return (
    <>
      <img src={props.src} alt="" />
      <div>
        <h5 class="fs-8 text-white lh-lg fw-bold">{props.title}</h5>
        <p class="text-white text-opacity-50 lh-xl mb-0">
          {props.description}
        </p>
      </div>
    </>
  );
}

export default ServiceCards;
