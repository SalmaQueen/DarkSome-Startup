import React, { useState, useEffect } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const ShoppingCart=()=> {
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    const items = [
      {
        id: 1,
        name: "overwatch",
        price: 20,
      },
      {
        id: 2,
        name: "minecraft",
        price: 32,
      },
      {
        id: 3,
        name: "fortnite",
        price: 51,
      },
    ];
  
    useEffect(() => {
      total();
    }, [cart]);
  
    const total = () => {
      let totalVal = 0;
      for (let i = 0; i < cart.length; i++) {
        totalVal += cart[i].price;
      }
      setCartTotal(totalVal);
    };
  
    const addToCart = (el) => {
        setCart([...cart, el]);
    };
  
    const removeFromCart = (el) => {
      let hardCopy = [...cart];
      hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
      setCart(hardCopy);
    };
  
    // const listItems = items.map((el) => (
    //   <div key={el.id}>
    //     {`${el.name}: $${el.price}`}
    //     <input type="submit" value="add" onClick={() => addToCart(el)} />
    //   </div>
    // ));
  
    // const cartItems = cart.map((el) => (
    //   <div key={el.id}>
    //     {`${el.name}: ${el.price}`}
    //     <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
    //   </div>
    // ));
    return (
        <>
        {/* <div>{listItems}</div> */}
      

        {/* <Badge color="secondary" badgeContent={cart.length}>
		<ShoppingCartIcon />
		</Badge>
		<ButtonGroup>
		<Button
			onClick={
                removeFromCart
			}
		>
			
			<RemoveIcon fontSize="small" />
		</Button>
		<Button
			onClick={
                addToCart
			}
		>
			
			<AddIcon fontSize="small" />
            <div>{cartItems}</div>
		</Button>

		</ButtonGroup> */}
    <div>Total: ${cartTotal}</div>

	
      {/* STORE
      <div>{listItems}</div>
      <div>CART</div>
      <div>{cartItems}</div>
      <div>Total: ${cartTotal}</div> */}
    </>
    )
}

export default ShoppingCart
