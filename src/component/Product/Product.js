import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, img, price, ratings} = props.product
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <p>Name: {name}</p>
        </div>
    );
};

export default Product;