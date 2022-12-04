class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer id="about-us">
      <section class="about-us-section">
        <div class="about-us-container">
          <div class="about-us-wrap">
            <h2>About Us</h2>
            <div class="content">
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
                sint magnam, ducimus sequi explicabo, similique, iusto obcaecati
                atque unde dignissimos temporibus id tenetur alias repellat et!
                Nulla enim quisquam tenetur?
              </h5>
            </div>
          </div>

          <div class="about-us-wrap">
            <h2>Address</h2>
            <div class="content">
              <div class="place">
                <span class="fas fa-map-marker-alt icon"></span>
                <h5 class="text">11 Kaki Bukit Ave 2, #01-01 Rideaway Rentals Pte Ltd</h5>
              </div>
              <div class="phone">
                <span class="fas fa-phone-alt"></span>
                <h5 class="text">+65-83691922</h5>
              </div>
              <div class="email">
                <span class="fas fa-envelope"></span>
                <span class="text">RideawayRentals@gmail.com</span>
              </div>
              <div class="social">
                <a href="#"><span class="fab fa-facebook-f"></span></a>
                <a href="#"><span class="fab fa-twitter"></span></a>
                <a href="#"><span class="fab fa-instagram"></span></a>
              </div>
            </div>
          </div>

          <div class="about-us-wrap">
            <h2>Contact Us</h2>
            <form action="" class="contact-us-container">
              <div class="email">
                <span class="text">Email*</span>
                <input type="email" class="contact-us-email" required />
              </div>
              <div class="msg">
                <span class="text">Message*</span>
                <textarea cols="25" rows="2" required></textarea>
              </div>
              <div class="contact-button">
                <button type="Submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </footer>
    `;
  }
}

customElements.define("footer-component", Footer);
