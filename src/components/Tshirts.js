import React from 'react';

const Tshirts = ({tshirt, handleCard}) => {
    const {picture, name, price} = tshirt;
    return (
        <div>
            <img style={{width: '250px', height:'250px'}} src={picture} alt="" />
            <h1> {name}</h1>
            <p>price : {price}</p>
            <button onClick={() => handleCard(tshirt)}>Buy shirt</button>
        </div>
    );
};

export default Tshirts;