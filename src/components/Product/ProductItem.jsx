import React from 'react';
import PropTypes from 'prop-types';

ProductItem.propTypes = {
    
};

function ProductItem(props) {
    return (
        <div className='product' key={props.key}>
                    <div className='product-header'>
                        <img src={props.image}></img>
                        <ul className='icons'>
                            <span><i className="fa fa-heart"></i></span>
                            <span><i className="fa fa-shopping-bag"></i></span>
                            <span><i className="fa fa-search"></i></span>
                        </ul>
                    </div>
                    <div className='product-footer'>
                        <a className>
                            <h3>{props.name}</h3>
                        </a>
                        <div className='rating'>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <h4 className="price">$20</h4>
                    </div>
                </div>
    );
}

export default ProductItem;