import React from 'react';
import Order from '../components/Order';
import AppContext from '../context/AppContext';
import '../styles/MyOrder.scss';
import { useContext } from 'react';
const MyOrder = () => {
  const {state}= useContext(AppContext);

  const sumTotal = ()=>{
    const reducer = (acumulator, currentValue)=> acumulator + currentValue.price*currentValue.amount;
    const sum = state.cart.reduce(reducer,0);
    return sum;
  }

    return (
      <div className="my-order-container  inactive">
        <h1 className="title">Cart</h1>

        {state.cart.length === 0 && <p className='empty-cart'>Your cart is empty</p>}

        {state.cart.map(cartItem => (
          <Order 
          cartItem={cartItem} 
          key={`orderITEM-${cartItem.id}`}
           />
        ))}

        <div className='my-order-total-container' >
          <div className='my-order-total' >
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
          </div>

          <button className="checkout-button checkout-total-button ">Checkout</button>

        </div>





      </div>






    );
}

export default MyOrder;