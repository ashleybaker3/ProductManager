import React, { useState } from 'react';
import axios from 'axios';

const PForm = () => {
    const[title, setTitle] = useState("");
    const[price, setPrice] = useState(0);
    const[description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/products/create', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="row">
                <h1>Product Manager</h1>
            </div>
            <div className="row">
                <form onSubmit={onSubmitHandler}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" className="form-control" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input type="number" className="form-control" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea cols="30" rows="5" className="form-control" onChange={(e)=>setDescription(e.target.value)} value={description}></textarea>
                    </div>
                    <input type="submit" className="bg-info border-dark border-2 text-white" />
                </form>
            </div>
        </div>
    )
}

export default PForm;