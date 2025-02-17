import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const{cart}=props;
    console.log(cart)
    let total=0;
    let shipping=0;
    for(const product of cart){
        total=total+product.price;
        shipping=shipping+product.shipping;
    }
        const tax=parseFloat((total*0.1).toFixed(2));  
        const grandTotal= total + shipping + tax;

    return (
        <div className='cart'>
              <h3> Order summary</h3>
                <p>Selected items: {cart.length}</p>
                <p>Total price:${total}</p>
                <p>Total Chopping:${shipping}</p>
                <p>Tax:${tax}</p>
                <h3>Grand Total:${grandTotal} </h3>
        </div>
    );
};

export default Cart;