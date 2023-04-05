
import './style.css'
import $ from "jquery"

function Featured({info}) {

    $(document).ready(() => {




    $(".imageoo").hover(function () {
        $(this).children(".hove").fadeIn(200)
    }, function () {
        $(this).children(".hove").fadeOut(200)
    })

        })







        var content = info && info.map(card => {
            return (
                <div key={card.id} className="mt-5 col-12 col-md-6 col-lg-4 carda d-flex flex-column align-items-center">
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
                        <i className={card.id !== 1 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                        <i className="fa-regular fa-star"></i>
                        </div>
                        <span className="price">{card.price}</span>
                    </div>
            )
        })

    return (
        <div className='featured pt-5 pb-5'>
            <div className="container-fluid container-lg">
                <h2 className="title">Featured Products</h2>
                <div className="row">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Featured