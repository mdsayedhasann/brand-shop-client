import React from "react";

const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
      <div data-aos="fade-right" data-aos-duration="3000">
        <img src="https://i.ibb.co/mck024G/image.png" alt="" />
      </div>
      <div data-aos="fade-down" data-aos-duration="3000">
        <h4 className="text-xl text-[#70286E]">Our Mission and Vision</h4>
        <h3 className="text-2xl py-5  font-bold">Connecting People Through Innovative Mobile Technology</h3>
        <p>
          At Brand Electronics, we are driven by a mission to connect people
          through cutting-edge mobile technology. Our vision is to make the
          world more connected, informed, and empowered through the devices that
          have become an integral part of our lives 
          <br /> <br />
          – smartphones. Founded with
          a passion for technology and a commitment to quality, we have been at
          the forefront of the mobile industry for 25 years.
          We've consistently strived to design, develop, and deliver the latest
          and most innovative mobile solutions, all with a focus on enhancing
          the way people communicate, work, and play.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
