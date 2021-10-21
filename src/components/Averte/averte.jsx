import {React ,useEffect} from 'react';
import "./averte.css"
import "../Product/featured.css"
import AOS from 'aos';
import 'aos/dist/aos.css'

function Averte(props) {
    const bestSell = [
      {
        id:1,
        title:`Women 's Fashion`,
        imgae:"https://cdn.pixabay.com/photo/2018/01/29/17/01/woman-3116587_960_720.jpg"
      },
      {
        id:2,
        title:`Boy 's Fashion`,
        imgae:"https://cdn.pixabay.com/photo/2016/02/19/10/56/hip-hop-1209499__340.jpg"
      },
      {
        id:3,
        title:`Child 'S Fashion`,
        imgae:"https://cdn.pixabay.com/photo/2015/12/08/05/58/ice-skates-1082514__340.jpg"
      }
    ]
    useEffect(() => {
      AOS.init(
       {
           duration:1000,
           easing:"ease"
       }
      );
   });
    return (
      <div className='best-seller'>
          <div className ='title'>
                <h1 className='seller-title' data-aos="zoom-in-up">Best Sell</h1>
          </div>
          <div className='averte'>
              {bestSell.map(product => (
                   <div className="averte-box" data-aos="fade-up">
                   <div className="dotted">
                     <div className="content">
                         <h2>{product.title}</h2>
                         <h4>Worlds Best Brands</h4>
                         </div>
                        <button className='btn-seemore'>SEE MORE</button>
                    </div>
                     <img src={product.imgae} className='averte-box-img' alt=""></img>
                 </div>
              ))}
        </div>
      </div>  
    );
}

export default Averte;