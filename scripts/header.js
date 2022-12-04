function onClickedIcon() {
  const x = document.getElementById("myTopnav");
  x.onclick = function () {
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };
}

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <header>
          <img class="rideaway-logo" src = "assets/Rideaway Logo.svg" onclick="window.location.href='index.html'" alt = "logo">
           <nav>
            <div class="topnav" id="myTopnav">
                <a href="index.html" class="active">Home</a>
                <a href="#browse-by-category">Browse</a>
                <a href="#about-us">About Us</a>
                <a href="#review">Reviews</a>
                <a href="javascript:void(0);" class="icon" onclick="onClickedIcon()" id="topNavOnClicked">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
           </nav>
        </header>
        `;
  }
}

customElements.define("header-component", Header);
