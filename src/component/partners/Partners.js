import { useEffect, useState } from "react";
import Cart from "../card/Cart";
import Details from "../details/Details";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./partners.css";

const Partners = () => {
  const [partners, setPartners] = useState([]);
  const [depositSummary, setdepositSummary] = useState([]);

  useEffect(() => {
    fetch("./partners.json")
      .then((res) => res.json())
      .then((data) => setPartners(data));
    
    // console.log(partners)
  }, []);

  const buttonClick = (partner) => {
    const newdepositSummary = [...depositSummary, partner];
    setdepositSummary(newdepositSummary);
    // console.log(partner.name)
  };

  return (
    <div className="main-container">
      <Header></Header>
      <div className="container">
        <div className="display">
          {partners.map((partner) => (
            <Details
              key={partner.id}
              partner={partner}
              buttonClick={buttonClick}
            >
              {" "}
            </Details>
          ))}
        </div>
        <div>
          {/* {
            depositSummary.map((depositSummary)=>()
            )} */}
          
          <Cart  depositSummary={depositSummary}></Cart>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Partners;
