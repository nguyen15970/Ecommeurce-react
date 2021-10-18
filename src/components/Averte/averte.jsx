import React from 'react';
import "./averte.css"
import "../Product/featured.css"
function Averte(props) {
    return (
      <div className='best-seller'>
          <div className ='title'>
                <h1 className='seller-title'>Best Seller</h1>
          </div>
          <div className='averte'>
            <div className="averte-box">
              <div className="dotted">
                <div className="content">
                    <h2>Girls 
                    <p>clothing </p></h2>
                    <h4>Worlds Best Brands</h4>
                    </div>
                </div>
                <img src="https://list.vn/wp-content/uploads/2018/11/th%E1%BB%9Di-trang-22.jpg" className='averte-box-img' alt=""></img>
            </div>
            <div className="averte-box">
              <div className="dotted">
                <div className="content">
                    <h2>Girls 
                    <p>clothing </p></h2>
                    <h4>Worlds Best Brands</h4>
                    </div>
                </div>
                <img src="https://file.hstatic.net/1000327709/file/thoi-trang-nam-dep__2__6fb4c15a032c4d5f905f1bd68e638473_grande.jpg" alt=""></img>
            </div>
            <div className="averte-box">
              <div className="dotted">
                <div className="content">
                    <h2>Girls 
                              <p>clothing </p></h2>
                    <h4>Worlds Best Brands</h4>
                    </div>
                </div>
                <img src="https://icdn.dantri.com.vn/thumb_w/640/2020/11/12/dantri-thoi-trang-nu-ha-thu-nang-tho-hien-dai-va-khi-chat-finaldocx-1605167916250.jpeg  " alt=""></img>
            </div>
        </div>
      </div>  
    );
}

export default Averte;