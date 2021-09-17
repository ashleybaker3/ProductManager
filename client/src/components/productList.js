import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = (props) => {
    const { removeFromDom } = props;
    
    const deleteProduct = (productID) => {
        axios.delete('http://localhost:8000/api/products/delete/' + productID)
            .then(res => {
                removeFromDom(productID)
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="d-flex flex-column align-items-center justify-content-center m-3">
            {props.products.map( (product, i) =>
                <div>
                    <Link to={`/products/${product._id}`}>
                        <h3 key={i}>{product.title}</h3>                    
                    </Link>
                    <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
                </div>
                )}
        </div>
    )
}

export default ProductList;