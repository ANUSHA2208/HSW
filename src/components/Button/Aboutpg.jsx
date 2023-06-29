import React from "react";
import img from "../../assets/images/WhatsApp Image 2023-06-18 at 11.02.26 AM.jpeg";

export const Aboutpg = () => {
  return (
    <div className="h-full">
      <div className="flex flex-wrap pt-36">
        <div className="w-full sm:w-1/2 p-10">
          <h1 className="text-5xl font-bold text-center md:text-left min-[320px]:text-center max-[600px]:text-lg">
            About Us
          </h1>
          <br />
          <p className="text-lg min-[1024px]:text-lg max-[600px]:text-sm">
            We are a manufacturing company that specializes in producing
            high-quality motorized rolling shutters, rolling shutter gears,
            shutter gates, and collapsible gates. Our company was established in
            1974, and since then, we have been supplying our products to
            customers across Karnataka, Goa, and Maharashtra states. We take
            pride in our skilled workforce and experienced fitters who ensure
            that every product meets the highest standards. In addition, we
            provide generator mechanisms for our shutters, adding convenience
            and reliability to our customers' experience. Whether it's a local
            installation or an outstation project, our team is equipped to
            handle it efficiently. Choose us for reliable, durable, and expertly
            crafted rolling shutter solutions.
          </p>
        </div>
        <div className="w-full sm:w-1/2 p-10 md:p-24">
          <img src={img} className="h-full w-full object-cover" alt="About Us" />
        </div>
      </div>
    </div>
  );
};

export default Aboutpg;
