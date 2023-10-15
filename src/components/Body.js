import React from 'react';

import {ProductFeed} from './ProductFeed';
import {Cart} from './Cart';

export const Body = (props)=>{
    const width = props.cartVisible && props.cart.length!==0? 'w-75':'w-100';
    const body = <React.Fragment>
                    <div className={width}>
                        <ProductFeed addToCart={props.addToCart} showCart = {props.showCart}/>
                    </div>
                    {props.cartVisible && props.cart.length!==0 &&
                    <div className='w-25'>
                        <Cart cart={props.cart} addToCart={props.addToCart} removeFromCart={props.removeFromCart}/>
                    </div>
                    }
                </React.Fragment>
    
    return(
        <div className='d-flex'>
            {body}
        </div>
    )
}