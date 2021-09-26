import React from 'react';
import './cart.css'

const Cart = (props) => {
    console.log(props)
    const { depositSummary } = props;
// console.log(depositSummary.lenght.props)
    // const { name } = depositSummary;
    // console.log([depositSummary].lenght)
// console.log(name)
    let total = 0;
    // let name ="";
    for (const partner of depositSummary) {
        total = total + parseInt(partner.amount);
        // const lenght =  partner.lenght;
        // name = [partner?.name];
    //   
        
    }
    const name = depositSummary.name
    console.log(name)

    return (
        <div>
            <div className="cart">
                <div>
                    <h5>Total Depositor: {depositSummary.length}</h5>
                    <h5><i class="fas fa-user-tie"></i> Depositor Name:</h5>
                    {/* <ul className="depositor-name">{props.depositSummary.name}</ul> */}
                    <ul className="depositor-name">{name}</ul>
                </div>
        
                <h5>Total Deposit: <span className="total-deposit"> { total }</span> </h5>
        </div>
        </div>
    );
};

export default Cart;