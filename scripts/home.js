class Home extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <section class="slogan" id="slogan">
                <h1>
                    Rent with 
                    <span>a peace of mind.</span>
                  </h1> 
        </section>

        <section class="rent-procedure">
            <div class="heading">
                <span> How It Works</span>
                <h1>Rent with 3 Easy Steps!</h1>
            </div>
            
            <div class="ride-container">
                <div class="box">
                    <img src="assets/box-icons/bxs-map.svg">
                    <h2> Choose a Location </h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga adipisci voluptatum a quaerat eaque ea non, omnis minima ipsam facilis dolorum maxime amet veritatis dignissimos necessitatibus libero natus doloremque earum!</p>
                </div>
                
                <div class="box">
                    <img src="assets/box-icons/bxs-calendar-check.svg">
                    <h2> Pick-Up Date </h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga adipisci voluptatum a quaerat eaque ea non, omnis minima ipsam facilis dolorum maxime amet veritatis dignissimos necessitatibus libero natus doloremque earum!</p>
                </div>  

                <div class="box">
                    <img src="assets/box-icons/bx-select-multiple.svg">
                    <h2> Select A Bike </h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga adipisci voluptatum a quaerat eaque ea non, omnis minima ipsam facilis dolorum maxime amet veritatis dignissimos necessitatibus libero natus doloremque earum!</p>
                </div>  
                
            </div>
        </section>
       
        <video autoplay muted loop id="bgVideo">
            <source src="assets/sg-timelapse.mp4" type="video/mp4">
        </video>

        `;
  }
}

customElements.define("home-component", Home);
