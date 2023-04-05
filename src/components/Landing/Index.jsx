// import { useEffect } from 'react';
import './style.css'
import $ from 'jquery'
import { useState } from 'react';

function Landing({info}) {

    var [heights, setHeights] = useState()


    $(document).ready(function() {
        setHeights($("nav.navbar").height() + $(".info").height())
    });
    
    heights && $(".landing").css( { height: `calc(100vh - ${heights}px)` } );

    return (
        <div className='landing'>
            <img src={info && info.background} alt="" className='back' />
            <div className="container-fluid container-lg">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-5 text-center d-flex flex-column align-items-center">
                        <p className='text-black-50 m-0'>Ultimate Collection</p>
                        <h1>{info && info.title}</h1>
                        <button className='buton'>SHOP NOW</button>
                    </div>
                    <div className="col-12 col-lg-7">
                        <img src={info && info.backgroundImage} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing