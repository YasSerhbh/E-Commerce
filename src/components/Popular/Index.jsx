import './style.css'
import $ from 'jquery'


function Popular({info}) {

    $(document).ready(() => {




        $(".popular .imageoo").hover(function () {
            $(this).children(".hove").fadeIn(200)
        }, function () {
            $(this).children(".hove").fadeOut(200)
        })
    
            })


            var content = info && info.map(card => {
                return (
                    <div key={card.id} className="mt-4 col-12 col-md-6 col-lg-3 cardo align-items-center d-flex flex-column">
                        <div className="imageoo">
                            <div className='hove'>
                                <span><i className="fa-regular fa-eye"></i></span>
                                <span><i className="fa-regular fa-heart"></i></span>
                                <span><i className="fa-solid fa-cart-shopping"></i></span>
                            </div>
                            <img src={card.image} alt="" className='img-fluid' />
                        </div>
                        <p>{card.title}</p>
                        <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className={card.id === 2 || card.id === 4 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                        <i className={card.id === 2 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                        </div>
                        <span className="price">{card.price}</span>
                    </div>
                )
            })


    return (
        <div className='popular pt-5 pb-5'>
            <div className="container-fluid container-lg">
                <h2 className="title">Most Popular</h2>
                <div className="row mb-5">
                    {content}
                </div>
                <div className="row hh">
                    <div className="col-12 col-md-6 col-lg-3 cardii d-flex align-items-center flex-column">
                        <img src="images/feature-icons/1.png" alt="" />
                        <span>Money back gurantee</span>
                        <p>great fill sign the evening</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 cardii d-flex align-items-center flex-column">
                        <img src="images/feature-icons/2.png" alt="" />
                        <span>Free Delivery</span>
                        <p>great fill sign the evening</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 cardii d-flex align-items-center flex-column">
                        <img src="images/feature-icons/3.png" alt="" />
                        <span>Always Support</span>
                        <p>great fill sign the evening</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 cardii d-flex align-items-center flex-column">
                        <img src="images/feature-icons/4.png" alt="" />
                        <span>Secure Payement</span>
                        <p>great fill sign the evening</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popular