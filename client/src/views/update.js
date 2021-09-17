import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";

const Update = (props) => {
    const { id } =useParams();
    const [product, setProduct] = useState(null);
    const [errors, setErrors] = useState(null);
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleOnChange = (e) => {
        const keyBeingUpdated = e.target.name;
        const newValue = e.target.value
    
        setProduct({ ...product, [keyBeingUpdated]: newValue });
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
    
        axios
            .put("http://localhost:8000/api/products/update/" + product._id, product)
            .then((res) => {
            console.log(res.data);
            history.push(`/products/${product._id}`);
            })
            .catch((err) => {
                setErrors(err.response.data.errors);
                console.log(err.response);
            });
    };

    if(product === null) {
        return "Loading!";
    }

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="row">
                <form onSubmit={handleEditSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" className="form-control" onChange={(e)=>handleOnChange(e)} value={product.title} name="title"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input type="number" className="form-control" onChange={(e)=>handleOnChange(e)} value={product.price} name="price"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea cols="30" rows="5" className="form-control" onChange={(e)=>handleOnChange(e)} value={product.description} name="description"></textarea>
                    </div>
                    <input type="submit" className="bg-info border-dark border-2 text-white" value="Update"/>
                </form>
            </div>
        </div>
        )

}

export default Update;