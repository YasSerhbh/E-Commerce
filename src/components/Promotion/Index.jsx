import './style.css'


function Promotion() {
    return (
        <div className='promotion pt-4' id='promotion'>
            <div className="container-fluid container-lg">
                <div className="row">
                    <div className="col-12 col-lg-6 infos text-center d-flex align-items-center flex-column mt-4">
                        <div className="prom">50% OFF</div>
                        <span>All Women's Collection</span>
                        <button className="buton">SHOP NOW</button>
                    </div>
                    <div className="col-12 col-lg-6 photo">
                        <img src="images/ban-2.png" alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promotion