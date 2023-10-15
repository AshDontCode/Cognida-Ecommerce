import {CartItem} from './CartItem';

export const Cart = (props)=>{

    const cartUi = props.cart.length===0?
                                         "Cart Empty" :
                                         props.cart.map((item)=>{return <CartItem key={item.id} product={item} removeFromCart={props.removeFromCart} addToCart={props.addToCart}></CartItem>})

    return (
        <div className='card m-3 bg-light ps-5 pe-5'>
            {cartUi}
        </div>
    )
}