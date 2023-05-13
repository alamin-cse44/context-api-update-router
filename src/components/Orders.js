import React, { useContext } from 'react';
import { testContext } from '../App';

const Orders = () => {
    const [title, number, setNumber, test] = useContext(testContext);
    return (
        <div>
            <h1>{title}</h1>
            <p>prev orders : {test.length}</p>
            <h1>Orders : {number}</h1>
            <button onClick={()=> setNumber(number+1)}>increase</button>
        </div>
    );
};

export default Orders;