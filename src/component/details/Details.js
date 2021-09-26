import React from 'react';
import './details.css'

const Details = (props) => {
    // console.log(props)
    // const {name,email,phone,passport,live,amount,picture,address,id,parmanentAddress} = props.partner
  const { name, picture, amount, phone, email, live, position } = props.partner;
  return (
    <div className="card" style={{width: "18rem"}}>
  <img src={picture} class="image card-img-top" alt="..."/>
  <div classn="card-body">
    <h5 class="card-title">{name}</h5>
        <p > <span id="rank"></span> { position}</p>
  </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><span className="text">Live in</span> : { live}</li>
        <li class="list-group-item"><span className="text">Deposit : </span> {amount} </li>
        <li class="list-group-item"><span className="text">Phone :</span> { phone}</li>
        <li class="list-group-item"><span className="text">Email : </span>{email}</li>
  </ul>
  <div class="card-body">
        <button onClick={() => props.buttonClick(props.partner)} className="btn"><i className="fas fa-calculator"></i> Total Cal </button>
  </div>
</div>
      
      );
};

export default Details;