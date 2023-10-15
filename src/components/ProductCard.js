import './ProductCard.css'

export const ProductCard = (props)=>{
    const trim = (str, len) => {
        return str.substring(0,len)+"...";
    }
    const {title, image, price, rating, description} = props.product;
    
    const handleAddToCartClick = ()=>{
        props.addToCart(props.product);
        props.showCart();
    }

    return(
        <div className="card w-25 p-3 d-flex justify-content-center prod-card">
            <img src={image} alt={title} width="200px" height="200px"></img>
            <h4>{trim(title, 25)}</h4>
            <h6>{trim(description, 60)}</h6>
            <h5>{"₹ "+price}</h5>
            <h6>{rating.rate}<img src="https://i.pngimg.me/thumb/f/720/m2H7H7A0m2m2i8i8.jpg" width="25px" height="15px" alt="star icon"></img>{" ("+rating.count+")"}</h6>
            <button className="btn btn-primary" onClick={handleAddToCartClick}>Add to Cart</button>
        </div>
    )
}