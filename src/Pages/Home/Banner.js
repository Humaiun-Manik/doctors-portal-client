import React from "react";
import { Link } from "react-router-dom";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <section className="min-h-screen lg:flex md:flex-row-reverse items-center gap-3 px-5">
      <div className="my-10 lg:mt-0 ">
        <img src={chair} alt="" />
      </div>
      <div>
        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
        <p className="py-10 text-xl">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
          In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <Link to="/appointment">
          <PrimaryButton>Get Started</PrimaryButton>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
