import React from 'react';
import './banner.css'


function Banner() {
    return (
        <section className="product-banner">
            <div className='left-banner'>
                <img src='https://i.pinimg.com/564x/d6/b1/fe/d6b1fe716854496b9e929851db050416.jpg'></img>
            </div>
            <div className='right-banner'>
                <div className='content'>
                    <h2>80% <span> SALE OFF</span> </h2>
                    <h1>
                        <span>Collect Your</span>
                        <span>Kids Collection</span>
                        <a href="#" className="btn btn-shop-now">Shop now</a>
                    </h1>
                </div>
            </div>
        </section>
    );
}

export default Banner;