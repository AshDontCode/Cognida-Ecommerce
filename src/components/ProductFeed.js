import { useEffect, useState } from 'react';
import {ProductCard} from './ProductCard';
import {Shimmer} from './Shimmer';

export const ProductFeed = (props)=>{
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>{
            return res.json();
        })
        .then((json)=>{
            setProducts(json)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    const cards = (products.length===0) ? <Shimmer/> : products.map((product)=>{
        return <ProductCard product={product} key={product.id} addToCart={props.addToCart} showCart={props.showCart}></ProductCard>
    })

    return(
        <div className="d-flex flex-wrap m-3">
            {cards}
        </div>
    )
}