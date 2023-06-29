import React from "react";
import col from '../../assets/images/collapsible.jpeg'
import shutter from '../../assets/images/shutter.jpeg'
import gear from '../../assets/images/gear.jpeg'

const Product = () => {
  return (
    <div className="h-full pt-36">
      <div>
        <div className="text-5xl font-bold text-center md:text-left min-[320px]:text-center max-[600px]:text-lg pl-10">
          Products
        </div>
        <br />
        <div class="container p-10 flex flex-wrap m-auto align-center">
          <div class="h-full w-full p-2 lg:w-1/3">
            <div>
              <article class="card">
                <img
                  class="card__background"
                  src={gear}
                  alt="Gear Operated rolling shutter"
                  width="1950"
                  height="2193"
                />
                <div class="card__content | flow">
                  <div class="card__content--container | flow">
                    <h2 class="card__title text-base font-bold">Gear and Motor Operated rolling shutter</h2>
                    <p class="card__description">
                    Gear and motor-operated rolling shutter are secure metal slats controlled by a motor and gears for convenient operation and enhanced security.
                    </p>
                  </div>
                  <button class="card__button">Read more</button>
                </div>
              </article>
            </div>
          </div>

          <div class="h-full w-full p-2 lg:w-1/3">
            <div>
              <article class="card">
                <img
                  class="card__background"
                  src={col}
                  alt="Collapsible Gate "
                  width="1920"
                  height="2193"
                />
                <div class="card__content | flow">
                  <div class="card__content--container | flow">
                    <h2 class="card__title text-base font-bold">Collapsible Gates and Automatic Gates</h2>
                    <p class="card__description">
                    Collapsible gates are retractable metal barriers for doorways. 
                    Automatic gates are motorized gates operated by remote control or sensors.
                    </p>
                  </div>
                  <button class="card__button">Read more</button>
                </div>
              </article>
            </div>
          </div>

          <div class="h-full w-full p-2 lg:w-1/3">
            <div>
              <article class="card">
                <img
                  class="card__background"
                  src={shutter}
                  alt="Shutter Gates"
                  width="1920"
                  height="2193"
                />
                <div class="card__content | flow">
                  <div class="card__content--container | flow">
                    <h2 class="card__title text-base font-bold">Shutter Gates</h2>
                    <p class="card__description">
                    Shutter gates are combination of rolling shutters and security gates, providing both physical protection and visual access control for entrances.
                    </p>
                  </div>
                  <button class="card__button">Read more</button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
