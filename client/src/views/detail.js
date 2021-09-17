import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useHistory } from "react-router-dom";


const Detail = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);

    const deleteProduct = () => {
        axios.delete('http://localhost:8000/api/products/delete/' + id)
            .then(res => {
                console.log("Done!");
                history.push("/products");
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>

            <a href="/products">Home</a>
            <Link to={`/products/update/${product._id}`}>
                <button className="bg-info border-dark border-2 text-white">Update</button>
            </Link>
            <button className="bg-info border-dark border-2 text-white my-3" onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
            </button>
        </div>
    )
}

export default Detail;
