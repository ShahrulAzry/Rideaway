class Services extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="services-container" id="services">
      <div class="services">
        <div class="services-items">
          <img src="./assets/services/Great-Service.png" />
          <h2 class="text" strong>100% Great Service</h2>
          <h5 class="text"
            >We want you to have an enjoyable experience renting with us at Rideaway Rentals!
          </h5>
        </div>
        <div class="services-items">
          <img src="./assets/services/Easier-Faster-Bookings.png" />
          <h2 class="text" strong>24/7 Online Bookings</h2>
          <h5 class="text"
            >Our renting service is online 24 hours. Just contact us and we'll arrange the rental with you.
          </h5>
        </div>
        <div class="services-items">
          <img src="./assets/services/Doorstep-Delivery.png" />
          <h2 class="text" strong>Doorstep Delivery Available</h2>
          <h5 class="text"
            >We can deliver the bike to you at your own convenience.
          </h5>
        </div>
      </div>
    </section>
          `;
    }
  }
  
  customElements.define("services-component", Services);
  