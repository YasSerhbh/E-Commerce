import './style.css'
import $ from "jquery"


function Social() {

    $(".social .phot").hover(function () {
        $(this).children(".hova").fadeIn(200)
    }, function () {
        $(this).children(".hova").fadeOut(200)
    })


    return (
        <div className='social pt-5 pb-5'>
            <div className="container-fluid container-lg">
                <h2 className="title">Follow Us</h2>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3 phot mt-4">
                        <img src="images/instagram/1.jpg" alt="" className='img-fluid' />
                        <div className="hova">
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 phot mt-4">
                        <img src="images/instagram/4.jpg" alt="" className='img-fluid' />
                        <div className="hova">
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 phot mt-4">
                        <img src="images/instagram/3.jpg" alt="" className='img-fluid' />
                        <div className="hova">
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 phot mt-4">
                        <img src="images/instagram/4.jpg" alt="" className='img-fluid' />
                        <div className="hova">
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Social