import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <footer>
          <p>
            {" "}
            Copyright 2021 <i class="far fa-copyright"></i>
          </p>
          <div>
            <i class=" social-icon fab fa-facebook-square"></i>
            <i class=" social-icon fab fa-twitter"></i>
            <i class=" social-icon fab fa-google-plus-square"></i>
            <i class=" social-icon fas fa-envelope"></i>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
