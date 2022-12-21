import React from "react";
import doctorSmall from "../../assets/images/doctor-small.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";
import { Link } from "react-router-dom";

const MakeAppointment = () => {
  return (
    <section style={{ background: `url(${appointment})` }} className="md:flex lg:flex items-center">
      <div className="flex-1">
        <img className="mt-[-100px] ml-auto" src={doctorSmall} alt="" />
      </div>
      <div className="flex-1 px-12 pb-10 lg:pb-0">
        <h4 className="text-xl text-secondary font-bold mt-5">Appointment</h4>
        <h2 className="text-4xl text-white my-6">Make an appointment Today</h2>
        <p className="text-base text-white mb-7 lg:pr-44">
          Quickly schedule an appointment with your doctor, or easily connect with a new health care expert.
          With multiple locations across Washington state, we’re here for you when — and where — you need us.
          Plus, we make it easy for you to connect with the care you need with convenient appointment
          scheduling options for both new and existing patients.
        </p>
        <Link to="/appointment">
          <PrimaryButton>Get Started</PrimaryButton>
        </Link>
      </div>
    </section>
  );
};

export default MakeAppointment;
