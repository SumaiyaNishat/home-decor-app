import React from "react";
import { useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard/ProductCard";

const Home = () =>{
    const products = useLoaderData()
    console.log(products)
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> 
            {
                products.map(product => (
                    <ProductCard key={product.id} product=
                    {product}></ProductCard>
                ))
            }
        </div>
    )
}

export default Home;