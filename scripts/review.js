function createOffsets() {
  const sectionWithLeftOffset = document.querySelector(
    ".section-with-right-offset"
  );
  const sectionWithLeftOffsetCarouselWrapper =
    sectionWithLeftOffset.querySelector(".carousel-wrapper");
  const sectionWithRightOffset = document.querySelector(
    ".section-with-right-offset"
  );
  const sectionWithRightOffsetCarouselWrapper =
    sectionWithRightOffset.querySelector(".carousel-wrapper");
  const offset = (window.innerWidth - 1100) / 2;
  const mqLarge = window.matchMedia("(min-width: 1200px)");

  if (sectionWithLeftOffset && mqLarge.matches) {
    sectionWithLeftOffsetCarouselWrapper.style.marginLeft = offset + "px";
  } else {
    sectionWithLeftOffsetCarouselWrapper.style.marginLeft = 0;
  }

  if (sectionWithRightOffset && mqLarge.matches) {
    sectionWithRightOffsetCarouselWrapper.style.marginRight = offset + "px";
  } else {
    sectionWithRightOffsetCarouselWrapper.style.marginRight = 0;
  }
}

class Review extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="section-with-carousel section-with-right-offset position-relative mt-5" id="review">
  <div class="review-container">
    <h2 class="text">Hear It From Our Customers</h2>
  </div>
  <div class="carousel-wrapper">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <figure>
            <img width="640" height="480" src="assets/bikes/Honda-CBF150R-Repsol.jpg" alt="">
            <figcaption>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                <path fill-rule="evenodd" d="M19.071 3.429C15.166-.476 8.834-.476 4.93 3.429c-3.905 3.905-3.905 10.237 0 14.142l.028.028 5.375 5.375a2.359 2.359 0 003.336 0l5.403-5.403c3.905-3.905 3.905-10.237 0-14.142zM5.99 4.489A8.5 8.5 0 0118.01 16.51l-5.403 5.404a.859.859 0 01-1.214 0l-5.378-5.378-.002-.002-.023-.024a8.5 8.5 0 010-12.02z"></path>
              </svg>
              Lorem ipsum dolor
            </figcaption>
          </figure>
        </div>
        <div class="swiper-slide">
          <figure>
            <img width="640" height="427" src="assets/bikes/Honda-CBF150R-Repsol.jpg" alt="">
            <figcaption>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                <path fill-rule="evenodd" d="M19.071 3.429C15.166-.476 8.834-.476 4.93 3.429c-3.905 3.905-3.905 10.237 0 14.142l.028.028 5.375 5.375a2.359 2.359 0 003.336 0l5.403-5.403c3.905-3.905 3.905-10.237 0-14.142zM5.99 4.489A8.5 8.5 0 0118.01 16.51l-5.403 5.404a.859.859 0 01-1.214 0l-5.378-5.378-.002-.002-.023-.024a8.5 8.5 0 010-12.02z"></path>
              </svg>
              Lorem ipsum dolor
            </figcaption>
          </figure>
        </div>
        <div class="swiper-slide">
          <figure>
            <img width="640" height="427" src="assets/bikes/Honda-CBF150R-Repsol.jpg" alt="">
            <figcaption>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                <path fill-rule="evenodd" d="M19.071 3.429C15.166-.476 8.834-.476 4.93 3.429c-3.905 3.905-3.905 10.237 0 14.142l.028.028 5.375 5.375a2.359 2.359 0 003.336 0l5.403-5.403c3.905-3.905 3.905-10.237 0-14.142zM5.99 4.489A8.5 8.5 0 0118.01 16.51l-5.403 5.404a.859.859 0 01-1.214 0l-5.378-5.378-.002-.002-.023-.024a8.5 8.5 0 010-12.02z"></path>
              </svg>
              Tanzania
            </figcaption>
          </figure>
        </div>
        <div class="swiper-slide">
          <figure>
            <img width="640" height="427" src="assets/bikes/Honda-CBF150R-Repsol.jpg" alt="">
            <figcaption>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                <path fill-rule="evenodd" d="M19.071 3.429C15.166-.476 8.834-.476 4.93 3.429c-3.905 3.905-3.905 10.237 0 14.142l.028.028 5.375 5.375a2.359 2.359 0 003.336 0l5.403-5.403c3.905-3.905 3.905-10.237 0-14.142zM5.99 4.489A8.5 8.5 0 0118.01 16.51l-5.403 5.404a.859.859 0 01-1.214 0l-5.378-5.378-.002-.002-.023-.024a8.5 8.5 0 010-12.02z"></path>
              </svg>
              Lorem ipsum dolor
            </figcaption>
          </figure>
        </div>
        <div class="swiper-slide">
          <figure>
            <img width="640" height="427" src="assets/bikes/Honda-CBF150R-Repsol.jpg" alt="">
            <figcaption>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                <path fill-rule="evenodd" d="M19.071 3.429C15.166-.476 8.834-.476 4.93 3.429c-3.905 3.905-3.905 10.237 0 14.142l.028.028 5.375 5.375a2.359 2.359 0 003.336 0l5.403-5.403c3.905-3.905 3.905-10.237 0-14.142zM5.99 4.489A8.5 8.5 0 0118.01 16.51l-5.403 5.404a.859.859 0 01-1.214 0l-5.378-5.378-.002-.002-.023-.024a8.5 8.5 0 010-12.02z"></path>
              </svg>
              Lorem ipsum dolor
            </figcaption>
          </figure>
        </div>
        <div class="swiper-slide">
          <figure>
            <img width="640" height="480" src="assets/bikes/Honda-CBF150R-Repsol.jpg" alt="">
            <figcaption>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                <path fill-rule="evenodd" d="M19.071 3.429C15.166-.476 8.834-.476 4.93 3.429c-3.905 3.905-3.905 10.237 0 14.142l.028.028 5.375 5.375a2.359 2.359 0 003.336 0l5.403-5.403c3.905-3.905 3.905-10.237 0-14.142zM5.99 4.489A8.5 8.5 0 0118.01 16.51l-5.403 5.404a.859.859 0 01-1.214 0l-5.378-5.378-.002-.002-.023-.024a8.5 8.5 0 010-12.02z"></path>
              </svg>
              Lorem ipsum dolor
            </figcaption>
          </figure>
        </div>
        <div class="swiper-slide">
          <figure>
            <img width="640" height="427" src="assets/bikes/Honda-CBF150R-Repsol.jpg" alt="">
            <figcaption>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                <path fill-rule="evenodd" d="M19.071 3.429C15.166-.476 8.834-.476 4.93 3.429c-3.905 3.905-3.905 10.237 0 14.142l.028.028 5.375 5.375a2.359 2.359 0 003.336 0l5.403-5.403c3.905-3.905 3.905-10.237 0-14.142zM5.99 4.489A8.5 8.5 0 0118.01 16.51l-5.403 5.404a.859.859 0 01-1.214 0l-5.378-5.378-.002-.002-.023-.024a8.5 8.5 0 010-12.02z"></path>
              </svg>
              Lorem ipsum dolor
            </figcaption>
          </figure>
        </div>
        <div class="swiper-slide">
          <figure>
            <img width="640" height="427" src="assets/bikes/Honda-CBF150R-Repsol.jpg" alt="">
            <figcaption>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                <path fill-rule="evenodd" d="M19.071 3.429C15.166-.476 8.834-.476 4.93 3.429c-3.905 3.905-3.905 10.237 0 14.142l.028.028 5.375 5.375a2.359 2.359 0 003.336 0l5.403-5.403c3.905-3.905 3.905-10.237 0-14.142zM5.99 4.489A8.5 8.5 0 0118.01 16.51l-5.403 5.404a.859.859 0 01-1.214 0l-5.378-5.378-.002-.002-.023-.024a8.5 8.5 0 010-12.02z"></path>
              </svg>
              Lorem ipsum dolor
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
  <div class="swiper-pagination"></div>
</section>

    
    `;

    const sectionsWithCarousel = document.querySelectorAll(
      ".section-with-carousel"
    );

    createOffsets();
    window.addEventListener("resize", createOffsets);

    for (const section of sectionsWithCarousel) {
      let slidesPerView = [1.5, 2.5, 3.5];
      if (section.classList.contains("section-with-right-offset")) {
        slidesPerView = [1.5, 1.5, 2.5];
      }
      const swiper = section.querySelector(".swiper");
      new Swiper(swiper, {
        slidesPerView: slidesPerView[0],
        spaceBetween: 15,
        loop: true,
        lazyLoading: true,
        keyboard: {
          enabled: true,
        },
        navigation: {
          prevEl: section.querySelector(".carousel-control-left"),
          nextEl: section.querySelector(".carousel-control-right"),
        },
        pagination: {
          el: section.querySelector(".swiper-pagination"),
          clickable: true,
          renderBullet: function (index, className) {
            return `<div class=${className}>
              <span class="number">${index + 1}</span>
              <span class="line"></span>
          </div>`;
          },
        },
        breakpoints: {
          768: {
            slidesPerView: slidesPerView[1],
          },
          1200: {
            slidesPerView: slidesPerView[2],
          },
        },
      });
    }
  }
}

customElements.define("review-component", Review);
