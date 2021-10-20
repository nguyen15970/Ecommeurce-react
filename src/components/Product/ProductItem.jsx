import {React ,useEffect} from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css'

ProductItem.propTypes = {
    
};

function ProductItem(props) {
    useEffect(() => {
        AOS.init({
            
            duration:1000,
            easing:"ease"
        });
     });
    return (
        <div data-AOS="fade-up" className='product' key={props.key}>
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