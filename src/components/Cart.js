import React from "react";

const Cart = ({ cart, handleRemove }) => {
  return (
    <div>
      <h4>Order summary</h4>
      <p>order quantity : {cart.length} </p>
      {cart.map((item) => {
        return <div key={item._id}
        >
            <p>{item.name} 
            <button onClick={()=> handleRemove(item)}>x</button>
            </p>
        </div>;
      })}
    </div>
  );
};

export default Cart;
