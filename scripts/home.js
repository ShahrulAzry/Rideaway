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
                <h1>Rent with us in 3 Easy Steps!</h1>
            </div>
            
            <div class="ride-container">
                <div class="box">
                    <img src="assets/box-icons/bxs-map.svg">
                    <h2> Browse For Bikes </h2>
                    <p> You have came to the right place.
                    Affordable rates and well-maintained bikes await you here at
                    Rideaway Rentals! Browse through our selection here. </p>
                </div>

                <div class="box">
                    <img src="assets/box-icons/bx-select-multiple.svg">
                    <h2> Select A Bike </h2>
                    <p> We know. Our wide range of motorbikes put you into a state of indecisiveness. Look through
                    our catalogue slowly, then make up your mind.  </p>
                </div> 
            
                <div class="box">
                    <img src="assets/box-icons/bx-select-multiple.svg">
                    <h2> Contact Us </h2>
                    <p> Once you have browsed through our bike catalogue and made up your mind, contact us to confirm your booking with us! :)
                    We'll get back to you asap. </p>
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
