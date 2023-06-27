import React from "react";

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
                  src="https://i.imgur.com/QYWAcXk.jpeg"
                  alt="Gear Operated rolling shutter"
                  width="1920"
                  height="2193"
                />
                <div class="card__content | flow">
                  <div class="card__content--container | flow">
                    <h2 class="card__title text-lg">Gear and Motor Operated rolling shutter</h2>
                    <p class="card__description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Rerum in labore laudantium deserunt fugiat numquam.
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
                  src="https://i.imgur.com/QYWAcXk.jpeg"
                  alt="Collapsible Gate "
                  width="1920"
                  height="2193"
                />
                <div class="card__content | flow">
                  <div class="card__content--container | flow">
                    <h2 class="card__title text-lg">Collapsible Gates and Automatic Gates</h2>
                    <p class="card__description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Rerum in labore laudantium deserunt fugiat numquam.
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
                  src="https://i.imgur.com/QYWAcXk.jpeg"
                  alt="Shutter Gates"
                  width="1920"
                  height="2193"
                />
                <div class="card__content | flow">
                  <div class="card__content--container | flow">
                    <h2 class="card__title text-lg">Shutter Gates</h2>
                    <p class="card__description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Rerum in labore laudantium deserunt fugiat numquam.
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
