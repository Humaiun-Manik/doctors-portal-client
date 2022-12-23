import React from "react";
import bg from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Contact = () => {
  return (
    <section style={{ backgroundImage: `url(${bg})` }} className="hero">
      <div className="hero-content py-36">
        <div className="card flex-shrink-0 w-full sm:max-w-sm lg:max-w-lg text-center">
          <div className="card-body p-0">
            <div>
              <h4 className="text-xl text-secondary font-bold mb-3">Contact Us</h4>
              <h2 className="text-4xl text-white mb-10">Stay connected with us</h2>
            </div>
            <div className="form-control mb-5">
              <input type="text" placeholder="Email Address" className="input input-bordered" />
            </div>
            <div className="form-control mb-5">
              <input type="text" placeholder="Subject" className="input input-bordered" />
            </div>
            <div className="form-control mb-5">
              <textarea type="text" placeholder="Your message" rows={10} className="input input-bordered" />
            </div>
            <div className="form-control mt-8 w-2/4 mx-auto">
              <PrimaryButton>Submit</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
