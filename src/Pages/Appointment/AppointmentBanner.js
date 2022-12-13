import React from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <section className="hero min-h-screen">
      <div className="hero-content flex-col md:flex-row-reverse justify-between w-3/4 p-0">
        <img src={chair} className="max-w-sm md:max-w-lg rounded-lg shadow-2xl" alt="Dental chair" />
        <div className="mx-auto">
          <DayPicker mode="single" selected={date} onSelect={setDate}></DayPicker>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
