import React from 'react';
import PropTypes from 'prop-types';
import './featured.css'
import ProductItem from './ProductItem';

const Products =[
    {
        id:1,
        Image:'https://i.pinimg.com/564x/51/f2/d6/51f2d689ea15506094743275f08bbbd2.jpg',
        name:'Boy is T-Shirt',
        price:'$20'
    },
    {
        id:2,
        Image:'https://i.pinimg.com/564x/51/f2/d6/51f2d689ea15506094743275f08bbbd2.jpg',
        name:'Boy is T-Shirt',
        price:'$20'
    },
    {
        id:3,
        Image:'https://i.pinimg.com/564x/51/f2/d6/51f2d689ea15506094743275f08bbbd2.jpg',
        name:'Boy is T-Shirt',
        price:'$20'
    },
    {
        id:4,
        Image:'https://i.pinimg.com/564x/51/f2/d6/51f2d689ea15506094743275f08bbbd2.jpg',
        name:'Boy is T-Shirt',
        price:'$20'
    },
    {
        id:5,
        Image:'https://i.pinimg.com/564x/51/f2/d6/51f2d689ea15506094743275f08bbbd2.jpg',
        name:'Boy is T-Shirt',
        price:'$20'
    },
    {
        id:6,
        Image:'https://i.pinimg.com/564x/51/f2/d6/51f2d689ea15506094743275f08bbbd2.jpg',
        name:'Boy is T-Shirt',
        price:'$20'
    },
    {
        id:7,
        Image:'https://i.pinimg.com/564x/51/f2/d6/51f2d689ea15506094743275f08bbbd2.jpg',
        name:'Boy is T-Shirt',
        price:'$20'
    },
    {
        id:8,
        Image:'https://i.pinimg.com/564x/51/f2/d6/51f2d689ea15506094743275f08bbbd2.jpg',
        name:'Boy is T-Shirt',
        price:'$20'
    },
]
function Featured(props) {
    console.log(props)
    return (
        <section className ='featured'>   
            <div className ='title'>
                <h1>Featured Products</h1>
            </div>
            <div className="product-center">
            {Products.map((product) => (
                <ProductItem
                id={product.id}
                image={product.Image}
                name={product.name}
                price={product.price}
                />
            ))}
            </div>
        </section>
    );
}

export default Featured;