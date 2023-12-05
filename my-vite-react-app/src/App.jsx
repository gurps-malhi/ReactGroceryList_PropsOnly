import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import Item from './Item'

function App(props) {
  //const [count, setCount] = useState(0)
  const [quantity, setQuantity] = useState(0)
  
  // const incrementCount = () => {
  //   setquantity(quantity + 1);
  // };

  return (
    <>
    <Header 
      title="Grocery List"
      itemTotal={props.initialList.length} //you can also do expressions as per below: 
      //itemTotal={(n)=>  n + 5}// this gets passed as a callback to itemTotal, it's called here and it goes into header component and runs the expression
    />
    {props.initialList.map((item) =>
        <Item itemName= {item.itemName}  countValue = {item.itemValue} key={item.id} />
    )}
    </>
  )
}

export default App
