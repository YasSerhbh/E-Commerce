import './style.css'



function Journal({info}) {


    var content = info && info.map(card => {
        return (
            <div key={card.id} className="col-12 col-md-6 col-lg-3 card-j d-flex flex-column mb-5">
                        <div className="image">
                            <img src={card.image} alt="" className='img-fluid' />
                        </div>
                        <span className="date mt-4 mb-3">{card.date}</span>
                        <p>{card.title}</p>
                        <hr />
                        <div className="stts d-flex mb-4">
                            <div className="fashion"><i class="fa-solid fa-box-open"></i> Women Fashion</div>
                            <div className="comments"><i class="fa-solid fa-comments"></i> {card.comments} Comments</div>
                        </div>
                    </div>
        )
    })


    return (
        <div className='journal pt-5 pb-5'>
            <div className="container-fluid container-lg">
                <h2 className="title">Silon Journal</h2>
                <div className="row justify-content-between align-items-center">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Journal