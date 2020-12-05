import * as React from "react";
import gsap from "gsap";

import "../scss/SignUp";

const SignUp: React.FunctionComponent = () => {
  React.useEffect(() => {
    // Update the document title using the browser API
    var tl = gsap.timeline({ delay: 0.2 });
    tl.from("svg", {
      duration: 0.3,
      scale: 1.2,
      opacity: 0,
      rotation: -25,
      ease: "power2.out"
    });
    tl.from(".field-container", { duration: 0.4, opacity: 0 });
    tl.from("h3", { duration: 0.4, opacity: 0, y: -5 }, "-=0.4");
    tl.from(".field-container > input", {
      duration: 0.4,
      width: 0,
      padding: 0,
      ease: "power2.out"
    });
    tl.from(".submit-button", {
      duration: 1,
      scale: 0,
      ease: "elastic.out(1, 0.3)"
    });
    tl.from(
      ".skip-button",
      { duration: 0.4, opacity: 0, ease: "power2.out" },
      "-=0.8"
    );

    console.log("loaded");
  });

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h3>Enter your email for exclusive rewards!</h3>

        <div className="center-container">
          <div className="field-container shadow">
            <i className="fas fa-envelope"></i>
            <input type="text" placeholder="Johndoe@hisdomain.com"></input>
          </div>

          <button className="submit-button shadow">
            <i className="fas fa-check"></i>
          </button>
        </div>

        <button className="skip-button">
          Skip <i className="fas fa-long-arrow-alt-right"></i>
        </button>

        <svg width="200" height="270" viewBox="0 0 200 270">
          <path
            d="M44.335,165.539c-3.967-3.967-1.9-2.848-11.467-5.409a32.935,32.935,0,0,1-11.608-6.08L.549,204.829a7.3,7.3,0,0,0,7.044,10.056l24.052-.918,16.543,17.474a7.3,7.3,0,0,0,12.065-2.264l23.76-58.257a32.759,32.759,0,0,1-39.678-5.382Zm130.409,39.29-20.711-50.78a32.861,32.861,0,0,1-11.608,6.08c-9.618,2.575-7.509,1.452-11.467,5.409a32.766,32.766,0,0,1-39.682,5.382l23.76,58.257a7.3,7.3,0,0,0,12.065,2.264l16.548-17.474,24.052.918a7.306,7.306,0,0,0,7.044-10.056Zm-54.687-49.62c6.975-7.1,7.774-6.487,17.707-9.194a18.551,18.551,0,0,0,13-13.229c3.415-12.964,2.529-11.4,11.846-20.884a18.937,18.937,0,0,0,4.757-18.068c-3.41-12.955-3.415-11.147,0-24.116a18.937,18.937,0,0,0-4.757-18.068c-9.317-9.486-8.431-7.925-11.846-20.884a18.551,18.551,0,0,0-13-13.229c-12.727-3.474-11.193-2.565-20.519-12.056A18.163,18.163,0,0,0,99.492.638C86.77,4.107,88.545,4.111,75.8.638A18.153,18.153,0,0,0,58.048,5.481c-9.317,9.486-7.783,8.582-20.515,12.056a18.551,18.551,0,0,0-13,13.229c-3.41,12.96-2.529,11.4-11.846,20.884A18.926,18.926,0,0,0,7.934,69.718c3.41,12.946,3.415,11.138,0,24.112A18.948,18.948,0,0,0,12.691,111.9c9.317,9.486,8.431,7.92,11.846,20.884a18.551,18.551,0,0,0,13,13.229c10.216,2.785,10.979,2.346,17.7,9.194a18.142,18.142,0,0,0,22.706,2.657,18.112,18.112,0,0,1,19.414,0A18.136,18.136,0,0,0,120.057,155.209ZM44.581,80.326c0-24.207,19.282-43.832,43.065-43.832s43.065,19.624,43.065,43.832-19.282,43.832-43.065,43.832S44.581,104.534,44.581,80.326Z"
            fill="#343434"
          />
        </svg>
      </div>
    </div>
  );
};

export default SignUp;
