import React from "react";
import Service from "./Service";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description:
        "Fluoride is a natural mineral that builds strong teeth and prevents cavities. It’s been an essential oral health treatment for decades.",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description:
        "You should expect to be at your dentist's office for around an hour. This gives him or her enough time to take x-rays if needed.",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description:
        "Everyone notices a bright, white, glowing smile. And everyone notices confident you feel when you have that beautiful smile.",
      img: whitening,
    },
  ];

  return (
    <section className=" my-44">
      <div className="text-center">
        <h1 className="text-3xl text-secondary uppercase font-bold">Our services</h1>
        <h1 className="text-5xl mt-4">Services We Provide</h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 mt-20">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div className="hero min-h-screen py-20">
        <div className="hero-content flex-col lg:flex-row gap-20">
          <img src={treatment} alt="" className="max-w-lg rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p className="py-6 text-xl my-4">
              Gum disease can be caused by a number of factors including poor oral hygiene, loss of teeth as
              well as some health related factors such as stress, diabetes and pregnancy. The best way to
              prevent gum disease is with a comprehensive oral regime of brushing, flossing and rinsing. This
              will keep your mouth healthy between visits to our practice where professional cleaning and
              close check-ups are completed to prevent gum disease from occurring.
            </p>
            <button className="btn btn-primary text-white font-bold text-xl bg-gradient-to-r from-secondary to-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
