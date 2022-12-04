class BrowseByCategory extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="browse-section" id="browse-by-category">
    <div class="browse-container">
      <div class="browse-heading">
        <h1>Browse</h1>
        <h3>Rideaway Rentals</h3>
        <h5>
          Catalogue preview of our Class 2, 2A & 2B motorcycles!
        </h5>
      </div>
      <div class="browse-motorbikes">
        <div class="browse-motorbike-column">
          <img
            src="assets/bikes/2B/Yamaha-XSR155.jpg"
            alt=""
            loading="lazy"
          />
          <div class="browse-description">
            <h2 >Class 2B</h2>
            <h5>
              The basic motorcycle license entitles you to ride bikes with
              engine capacity below 200cc.
            </h5>
          </div>
        </div>
        <div class="browse-motorbike-column">
          <img
            src="assets/bikes/2A/Suzuki-DRZ400-Yoshi.jpg"
            alt=""
            loading="lazy"
          />
          <div class="browse-description">
            <h2>Class 2A</h2>
            <h5>
              The basic motorcycle license entitles you to ride bikes with
              engine capacity 201cc - 400cc.
            </h5>
          </div>
        </div>
        <div class="browse-motorbike-column">
          <img
            src="assets/bikes/2/YamahaR6.jpg"
            alt=""
            loading="lazy"
          />
          <div class="browse-description">
            <h2>Class 2</h2>
            <h5>
              The basic motorcycle license entitles you to ride bikes with
              engine capacity above 400CC.
            </h5>
          </div>
        </div>
      </div>
      <div class="browse-button">
        <button onClick="window.location.href='all-products.html';">BROWSE POPULAR BIKES</button>
      </div>
    </div>
  </section>
      `;
  }
}

customElements.define("browse-by-category-component", BrowseByCategory);
