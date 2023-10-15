export const CartItem = (props)=>{
    const trim = (str, len) => {
        return str.substring(0,len)+"...";
    }

    const {id, title,qty, image, price, rating, description} = props.product;

    const style={
        width: 'fit-content'
    };

    const removeItem = ()=>{
        props.removeFromCart(id);
    }
    const addItem = ()=>{
        props.addToCart(props.product);
    }

    return(
        <div className="card m-3 p-3 d-flex">
            <img src={image} alt={title} width="200px" height="200px"></img>
            <h4>{trim(title, 15)}</h4>
            <h6>{trim(description, 30)}</h6>
            <h5>{"₹ "+price}</h5>
            <h6>{rating.rate}<img src="https://i.pngimg.me/thumb/f/720/m2H7H7A0m2m2i8i8.jpg" width="25px" height="15px" alt="star icon"></img>{" ("+rating.count+")"}</h6>
            <div className="d-flex mt-2">
            <button className="btn btn-danger rounded-circle me-2" style={style} onClick={removeItem}>-</button>
            <h5>{qty}</h5>
            <button className="btn btn-primary rounded-circle ms-2" style={style} onClick={addItem} >+</button>
            </div>
        </div>
    )
}