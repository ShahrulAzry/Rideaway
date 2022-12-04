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
            >We want you to love renting from Vroom Leasing. Contact us and
            we'll make things right.
          </h5>
        </div>
        <div class="services-items">
          <img src="./assets/services/Easier-Faster-Bookings.png" />
          <h2 class="text" strong>24/7 Online Bookings</h2>
          <h5 class="text"
            >Our online booking system and friendly team is available round the
            clock at your service.
          </h5>
        </div>
        <div class="services-items">
          <img src="./assets/services/Doorstep-Delivery.png" />
          <h2 class="text" strong>Doorstep Delivery Available</h2>
          <h5 class="text"
            >There's nothing like convenience. We provide delivery to your
            location for a small fee.
          </h5>
        </div>
      </div>
    </section>
          `;
    }
  }
  
  customElements.define("services-component", Services);
  