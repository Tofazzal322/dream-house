import React from "react";
import "./header.css";
const Header = () => {
  return (
      <div className="header">
      <div>
        <h1 className="logo"> Dream house co LLC</h1>
      </div>
      <div className="paragraph">
        <p>
          Before opening a new construction business, it is important to
          understand the amount of preparation and work that is involved.
          Establishing a new business of any kind is never easy, and there are
          always things to consider that may or may not be at the forefront of
          one's mind, even an experienced entrepreneur.
        </p>
        <h1>Total Budget: <span className="budget"> 20</span> Million </h1>
      </div>
    </div>
  );
};

export default Header;
