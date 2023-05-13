import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { testContext } from "../App";
import Cart from "./Cart";
import Tshirts from "./Tshirts";

const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);
  const [title,number,setNumber,test,setTest] = useContext(testContext);


  const handleCard = (tshirt) => {
    // console.log('home',tshirt);
    // test is used alter the cart state
    const exist = cart.find((ts) => ts._id === tshirt._id);
    if (exist) {
      alert("Shirt is already exist");
    } else {
      const newShirt = [...cart, tshirt];
      setCart(newShirt);
    }
  };

  const handleRemove = (tshirt) => {
    console.log(tshirt);

    const remainings = cart.filter((ts) => ts._id !== tshirt._id);
    // setCart(remainings);
    setCart(remainings);
  };

  return (
    <div>
        <h1>{title}</h1>
      <div
        style={{
          margin: "20px",
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "50px",
            flexWrap: "wrap",
            marginLeft: "100px",
            width: "80%",
          }}
        >
          {tshirts.map((tshirt) => {
            return (
              <Tshirts
                key={tshirt._id}
                handleCard={handleCard}
                tshirt={tshirt}
              ></Tshirts>
            );
          })}
        </div>

        <div
          style={{
            background: "gold",
            width: "15%",
            height: "400px",
            position: "sticky",
          }}
        >
          <Cart cart={cart} handleRemove={handleRemove}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
