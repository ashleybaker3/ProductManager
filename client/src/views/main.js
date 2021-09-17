import axios from "axios";
import React, { useEffect, useState } from "react";
import PForm from "../components/productForm";
import ProductList from "../components/productList";


const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res=>{
            setProducts(res.data);
            setLoaded(true);
        })
        .catch(err => console.log(err));
    }, []);

    const removeFromDom = productID => {
        setProducts(products.filter(product => product._id !== productID));
    }

    return (
        <div>
            <PForm />
            <hr />
            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;