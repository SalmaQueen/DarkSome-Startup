// import './App.css';
// import Content from './Components/Day4/Monalisa-ecomerce/Content';
// import Footer from './Components/Day6/Footer/Footer'
// import Header from './Components/Day4/Monalisa-ecomerce/Header';

// function App() {
//   return (
//     <div className="app">

// <Header/>
// <Content/>
//  <hr/>
//  <Footer/>


// </div>

//   );
// }

// export default App;
import React, { Component } from 'react'
import Cart from './Components/Shop/Cart'

export default class App extends Component {
  render() {
    return (
      <div>
        <Cart/>
        
      </div>
    )
  }
}












// import React, { useState, useEffect } from "react";
// import ButtonGroup from "@material-ui/core/ButtonGroup";
// import Badge from "@material-ui/core/Badge";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import Button from "@material-ui/core/Button";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// export default function App() {

//   const [cart, setCart] = useState([]);

//   const addToCart = (el) => {
//     setCart([...cart, el]);
// };
// const removeFromCart = (el) => {
//   let hardCopy = [...cart];
//   hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
//   setCart(hardCopy);
// };
// const notify = (el) => toast(
//   <div key={el.id}>
//   {`${el.name}: $${el.price}`}
// </div>
// );

// // const showCart = cart.map((el) =>toast (
//   // <div key={el.id}>
//   //   {`${el.name}: $${el.price}`}
//   // </div>
// // ));


//   const items = [
//     {
//       id: 1,
//       name: "overwatch",
//       price: 20,
//     },
//     {
//       id: 2,
//       name: "minecraft",
//       price: 32,
//     },
//     {
//       id: 3,
//       name: "fortnite",
//       price: 51,
//     },
//   ];
//   return (
//     <>
//       <h1>Products</h1>
//       <div className="wrapper" >

//         {
//           items.map((item)=>(
//             <div key={item.id}>
//             <h1 >{item.name}</h1>
//             <p>{item.price}</p>

//             </div>

//           ))

//         }

// <Badge color="secondary" badgeContent={2}>
// 		<ShoppingCartIcon onClick={notify} />
//     <ToastContainer />
// 		</Badge>
// 		<ButtonGroup>
//     <Button onClick={removeFromCart}>-</Button>

//     <Button onClick={addToCart}>+</Button>

// 		</ButtonGroup>
       

//         </div>
      
//     </>
//   )
// }

