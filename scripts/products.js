
  class Products extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="product-section">
        <div class="product-text">
          <h1>Browse Our <span> Popular Bikes</span></h1>
        </div>
        <div class="product-center box">
          <div class="ac">
            <div class="img-cover">
              <img src="assets/bikes/2B/Yamaha-FZ16-Red.jpg" alt="" />
            </div>
            <p>(2B) Yamaha FZ16</p>
            <p> Fuel economical bike! <p>
            <div class="rating">
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              
            </div>
            <div class="price">$30/Day</div>
          </div>
    
          <div class="ac">
            <div class="img-cover">
              <img src="assets/bikes/2B/Yamaha-NMAX155-Scooter.jpg" alt="" />
            </div>
            <p>(2B) Yamaha NMAX155</p>
            <p>Comfortable scooter to cruise the city.<p>
            <div class="rating">
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
            </div>
            <div class="price">$50/Day</div>
          </div>

          <div class="ac">
            <div class="img-cover">
              <img src="assets/bikes/2B/KTM-Duke-200.jpg" alt="" />
            </div>
            <p>(2B) KTM Duke 200</p>
            <p> Powerful street bike designed by KTM. </p>
            <div class="rating">
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
            </div>
            <div class="price">$70/Day</div>
          </div>

          <div class="ac">
            <div class="img-cover">
              <img src="assets/bikes/2B/Kawasaki-KRR150.jpg" alt="Kawasaki KRR150" />
            </div>
            <p>(2B) Kawasaki KRR150</p>
            <p>Legendary, LOUD, 2 stroke sports bike.<p>
            <div class="rating">
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
            </div>
            <div class="price">$80/Day</div>
          </div>

          <div class="ac">
            <div class="img-cover">
              <img src="assets/bikes/2A/Suzuki-DRZ400-Yoshi.jpg" alt="Suzuki DRZ 400 with Yoshi" />
            </div>
            <p>(2A) Suzuki DRZ400 w Yoshi</p>
            <p> Beautiful scrambler with Yoshi pipe. <p>
            <div class="rating">
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
            </div>
            <div class="price">$90/Day</div>
          </div>

          <div class="ac">
            <div class="img-cover">
              <img src="assets/bikes/2B/Honda-CBF150R-Repsol.jpg" alt="" />
            </div>
            <p>(2B) Honda-CBF150R</p>
            <p> Powerful sports bike. <p>
            <div class="rating">
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
              <span class="fas fa-star"></span>
            </div>
            <div class="price">$75/Day</div>
          </div>
          
        </div>
      </section>
    
          `;
    }
  }
  
  customElements.define("products-component", Products);
  