import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

let items =[
  {
    itemName : 'Apple',
    itemValue : 1,
    id:1
  },
  {
    itemName : 'orange',
    itemValue : 2,
    id:2
  },
  {
    itemName : 'Banana',
    itemValue : 3,
    id:3
  },
]


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App initialList = {items}/>   
  </React.StrictMode>,
)
