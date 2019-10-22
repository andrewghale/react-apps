import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handleDecrement = () => {
        if (count <= 0 ) return;
        setCount(count - 1);
    }
    return (
        <div className="counter-wrapper">
            <h1>The Counter</h1>
            <div className="counter-container">
                <span className="total">{count}</span>
                <div className="buttons">
                    <button className="minus" onClick={handleDecrement}>-</button>
                    <button className="plus" onClick={handleIncrement}>+</button>
                    <button className="reset" onClick={() => setCount(0)}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Counter;