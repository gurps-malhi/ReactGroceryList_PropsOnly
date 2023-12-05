import { useState } from 'react'
const Counter = (props) =>{
    // const [quantity, setQuantity] = useState(0)
  
    // const incrementCount = () => {
    //     setQuantity(quantity + 1);
    // };
    return(
        <div className="quantity">
            <span className="qty-label">QTY</span>
            <button className="increment">+</button>
            <button className="decrement">-</button>
            <span className="quantity-amount">{props.countValue}</span>
        </div>  
    )
}

export default Counter