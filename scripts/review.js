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
    <h2 class="text">What Our Customers Have To Say</h2>
  </div>
  <div class="carousel-wrapper">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <figure>
            <img width="640" height="480" src="assets/review-portraits/happy-man.jpg" alt="Portrait of Happy Man">
            <figcaption>
              Rideaway Rentals has provided me the best possible motorcycle renting service. Had a great experience renting with them!
            </figcaption>
          </figure>
        </div>
        <div class="swiper-slide">
          <figure>
            <img width="640" height="427" src="assets/review-portraits/happy-woman.jpg" alt="Portrait of Happy Woman">
            <figcaption>
              Affordable renting and great quality bikes. What more can I ask for?
            </figcaption>
          </figure>
        </div>
        <div class="swiper-slide">
          <figure>
            <img width="640" height="427" src="assets/review-portraits/happy-man.jpg" alt="Portrait of Happy Man">
            <figcaption>
              Awesome service provided by Rideaway Rentals. Never renting from elsewhere again.
            </figcaption>
          </figure>
        </div>
        <div class="swiper-slide">
          <figure>
            <img width="640" height="427" src="assets/review-portraits/happy-woman.jpg" alt="Portrait of Happy Woman">
            <figcaption>
              Lorem ipsum dolor
            </figcaption>
          </figure>
        </div>
        <div class="swiper-slide">
          <figure>
            <img width="640" height="427" src="assets/review-portraits/happy-man.jpg" alt="Portrait of Happy Man">
            <figcaption>
              Lorem ipsum dolor
            </figcaption>
          </figure>
        </div>
        <div class="swiper-slide">
          <figure>
            <img width="640" height="480" src="assets/review-portraits/happy-woman.jpg" alt="Portrait of Happy Woman">
            <figcaption>
              Lorem ipsum dolor
            </figcaption>
          </figure>
        </div>
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
