import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-7 px-5">
      <InfoCard
        img={clock}
        cardTitle="Opening Hours"
        cardText="Lorem Ipsum is simply dummy text of the pri"
        bgClass="bg-gradient-to-r from-secondary to-primary"
      ></InfoCard>
      <InfoCard
        img={marker}
        cardTitle="Visit our location"
        cardText="Brooklyn, NY 10036, United States"
        bgClass="bg-[#3A4256]"
      ></InfoCard>
      <InfoCard
        img={phone}
        cardTitle="Contact us now"
        cardText="+000 123 456789"
        bgClass="bg-gradient-to-r from-secondary to-primary"
      ></InfoCard>
    </section>
  );
};

export default Info;
