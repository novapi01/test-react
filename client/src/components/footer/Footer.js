import React from "react";

function Footer() {
  return (
    <>
      <script
        src="https://kit.fontawesome.com/d54a90611f.js"
        crossorigin="anonymous"
      ></script>
      <footer class="footer-distributed">
        <div class="footer-left">
          <img src="img/logo.png" />
          <h3>
            About<span>NearUs</span>
          </h3>

          <p class="footer-links">
            <a href="#">Home</a>|<a href="#">Blog</a>|<a href="#">About</a>|
            <a href="#">Contact</a>
          </p>

          <p class="footer-company-name">© 2020 NearUs</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>307, Sector-5, Panbazar, Guwahati </span>
              Kamrup, Assam - 787022
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+91 11111111111</p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@nearus.com">contact@nearus.com</a>
            </p>
          </div>
        </div>
        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            Get the best product from local business at your ease
          </p>
          <div class="footer-icons">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-youtube"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
