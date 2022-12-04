class BrowseByCategory extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="browse-section" id="browse-by-category">
    <div class="browse-container">
      <div class="browse-heading">
        <h1>Browse By Category</h1>
        <h3>Vroom Leasing Rental Services</h3>
        <h5>
          Explore our selection of Class 2, 2A & 2B motorcycles. The longer
          you rent, the cheaper the rates.
        </h5>
      </div>
      <div class="browse-motorbikes">
        <div class="browse-motorbike-column">
          <img
            src="assets/bikes/Honda-CBF150R-Repsol.jpg"
            alt=""
            loading="lazy"
          />
          <div class="browse-description">
            <h2 >Class 2B</h2>
            <h5>
              The basic motorcycle license entitles you to ride bikes with
              engine capacity below 200cc.
            </h5>
            <a href="#">Browse Bikes <span class="fas fa-arrow-right"></span></a>
          </div>
        </div>
        <div class="browse-motorbike-column">
          <img
            src="assets/bikes/Honda-CBF150R-Repsol.jpg"
            alt=""
            loading="lazy"
          />
          <div class="browse-description">
            <h2>Class 2B</h2>
            <h5>
              The basic motorcycle license entitles you to ride bikes with
              engine capacity below 200cc.
            </h5>
            <a href="#">Browse Bikes <span class="fas fa-arrow-right"></span></a>
          </div>
        </div>
        <div class="browse-motorbike-column">
          <img
            src="assets/bikes/Honda-CBF150R-Repsol.jpg"
            alt=""
            loading="lazy"
          />
          <div class="browse-description">
            <h2>Class 2B</h2>
            <h5>
              The basic motorcycle license entitles you to ride bikes with
              engine capacity below 200cc.
            </h5>
            <a href="#">Browse Bikes <span class="fas fa-arrow-right"></span></a>
          </div>
        </div>
      </div>
      <div class="browse-button">
        <button onClick="window.location.href='pages/all-products.html';">BROWSE ALL BIKES</button>
      </div>
    </div>
  </section>
      `;
  }
}

customElements.define("browse-by-category-component", BrowseByCategory);
