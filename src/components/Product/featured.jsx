import {useEffect , React, useState} from 'react';
import PropTypes from 'prop-types';
import './featured.css'
import ProductItem from './ProductItem';
import AOS from 'aos';

const Products =[
    {
        id:1,
        Image:'https://cdn.pixabay.com/photo/2015/06/22/08/38/children-817368_960_720.jpg',
        name:'Boy is T-Shirt',
        price:'$20'
    },
    {
        id:2,
        Image:'https://exacdn.acfc.com.vn/media/catalog/product/cache/1590496433db240c9566f569680d296c/d/m/dm0dm10145_c5q_2_51zyhvnslympjplg_3.jpg',
        name:'Boy is T-Shirt',
        price:'$30'
    },
    {
        id:3,
        Image:'https://cdn.pixabay.com/photo/2016/05/17/22/16/baby-1399332_960_720.jpg',
        name:'Boy is T-Shirt',
        price:'$05'
    },
    {
        id:4,
        Image:'https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_960_720.jpg',
        name:'Girl is T-Shirt',
        price:'$20'
    },
    {
        id:5,
        Image:'https://exacdn.acfc.com.vn/media/catalog/product/cache/e0eb9f74eaaa356eac6b0ce899de6ac0/1/1/11301787.jpeg',
        name:'Boy is T-Shirt',
        price:'$20'
    },
    {
        id:6,
        Image:'https://exacdn.acfc.com.vn/media/catalog/product/cache/f66e8968e3e6b3636651ca3d0fa6be3b/d/m/dm0dm07788_0h7_1_2.jpg',
        name:'Boy is T-Trucker',
        price:'$100'
    },
    {
        id:7,
        Image:'https://exacdn.acfc.com.vn/media/catalog/product/cache/f66e8968e3e6b3636651ca3d0fa6be3b/d/m/dm0dm06966_cbk_1_2.jpg',
        name:'Boy is T-Shirt',
        price:'$100'
    },
    {
        id:8,
        Image:'https://exacdn.acfc.com.vn/media/catalog/product/cache/f66e8968e3e6b3636651ca3d0fa6be3b/d/m/dm0dm07501_0ms_1_1.jpg',
        name:'Boy is T-Shirt',
        price:'$90'
    },
]

function Featured(props) {
    const [product, setProduct] = useState(Products)
    console.log(Products)
    useEffect(() => {
       AOS.init(
        {
            duration:1000,
            easing:"ease"
        }
       );
    });
    return (
        <section className ='featured'>   
            <div className ='title' data-aos='fade-down'>
                <h1>Featured Products</h1>
            </div>
            <div className="product-center">
            {product.map((product) => (
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