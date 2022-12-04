
  class Products extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="product-section">
        <div class="product-text">
          <h1>Popular <span>Products</span></h1>
        </div>
        <div class="product-center box">
          <div class="ac">
            <div class="img-cover">
              <img src="assets/bikes/Honda-CBF150R-Repsol.jpg" alt="" />
            </div>
            <p>Honda-CBF150R</p>
            <div class="rating">
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
            </div>
            <div class="price">$ 8500/Day</div>
          </div>
    
          <div class="ac">
            <div class="img-cover">
              <img src="assets/bikes/Honda-CBF150R-Repsol.jpg" alt="" />
            </div>
            <p>Honda-CBF150R</p>
            <div class="rating">
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
            </div>
            <div class="price">$ 8500/Day</div>
          </div>

          <div class="ac">
            <div class="img-cover">
              <img src="assets/bikes/Honda-CBF150R-Repsol.jpg" alt="" />
            </div>
            <p>Honda-CBF150R</p>
            <div class="rating">
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
            </div>
            <div class="price">$ 8500/Day</div>
          </div>

          <div class="ac">
            <div class="img-cover">
              <img src="assets/bikes/Honda-CBF150R-Repsol.jpg" alt="" />
            </div>
            <p>Honda-CBF150R</p>
            <div class="rating">
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
            </div>
            <div class="price">$ 8500/Day</div>
          </div>

          <div class="ac">
            <div class="img-cover">
              <img src="assets/bikes/Honda-CBF150R-Repsol.jpg" alt="" />
            </div>
            <p>Honda-CBF150R</p>
            <div class="rating">
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
            </div>
            <div class="price">$ 8500/Day</div>
          </div>

          <div class="ac">
            <div class="img-cover">
              <img src="assets/bikes/Honda-CBF150R-Repsol.jpg" alt="" />
            </div>
            <p>Honda-CBF150R</p>
            <div class="rating">
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
            </div>
            <div class="price">$ 8500/Day</div>
          </div>

          <div class="ac">
            <div class="img-cover">
              <img src="assets/bikes/Honda-CBF150R-Repsol.jpg" alt="" />
            </div>
            <p>Honda-CBF150R</p>
            <div class="rating">
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
            </div>
            <div class="price">$ 8500/Day</div>
          </div>

          <div class="ac">
            <div class="img-cover">
              <img src="assets/bikes/Honda-CBF150R-Repsol.jpg" alt="" />
            </div>
            <p>Honda-CBF150R</p>
            <div class="rating">
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
            </div>
            <div class="price">$ 8500/Day</div>
          </div>
          
        </div>
      </section>
    
          `;
    }
  }
  
  customElements.define("products-component", Products);
  