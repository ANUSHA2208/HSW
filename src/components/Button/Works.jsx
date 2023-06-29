import React from "react";
import w1 from "../../assets/images/WhatsApp Video 2023-06-18 at 11.05.32 AM.gif";
import w2 from "../../assets/images/WhatsApp Video 2023-06-18 at 11.02.58 AM.gif";
import w3 from '../../assets/images/shutter.jpeg';
import w4 from '../../assets/images/gear.jpeg';

const Works = () => {
  return (
    <div className="h-full p-10 pt-36">
      <div className="text-5xl font-bold text-center md:text-left min-[320px]:text-center max-[600px]:text-lg">
        Works
      </div>
      <br />
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <figure>
            <img src={w1} alt="Mountains" />
            <figcaption>Automatic Rolling Shutter</figcaption>
          </figure>
        </div>

        <div>
          <figure>
            <img src={w2} alt="Mountains" />
            <figcaption>The Day</figcaption>
          </figure>
        </div>

        <div>
          <figure>
            <img src={w3} alt="Mountains" />
            <figcaption>The Day</figcaption>
          </figure>
        </div>

        <div>
          <figure>
            <img src={w4} alt="Mountains" />
            <figcaption>The Day</figcaption>
          </figure>
        </div>

      <div>
          <figure>
            <img src={w1} alt="Mountains" />
            <figcaption>The Day</figcaption>
          </figure>
        </div>

        <div>
          <figure>
            <img src={w2} alt="Mountains" />
            <figcaption>The Day</figcaption>
          </figure>
        </div>

        <div>
          <figure>
            <img src={w3} alt="Mountains" />
            <figcaption>The Day</figcaption>
          </figure>
        </div>

        <div>
          <figure>
            <img src={w4} alt="Mountains" />
            <figcaption>The Day</figcaption>
          </figure>
        </div>
      </div>

      <button class="button-36" role="button">
        View More
      </button>
    </div>
  );
};

export default Works;
