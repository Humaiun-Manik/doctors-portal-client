import React from "react";
import chair from "../../assets/images/chair.png";

const Banner = () => {
  return (
    <section className="min-h-screen lg:flex items-center">
      <div>
        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
        <p className="py-10 text-xl">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
          In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <button className="btn btn-primary text-white font-bold text-xl bg-gradient-to-r from-secondary to-primary">
          Get Started
        </button>
      </div>
      <div className="mt-10 lg:mt-0 ">
        <img src={chair} alt="" />
      </div>
    </section>
  );
};

export default Banner;
