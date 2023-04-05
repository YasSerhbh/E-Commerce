import './style.css'


function Info() {


    return (
        <div className='info'>
            <div className='container-fluid container-lg'>
                <div className="content d-flex justify-content-between flex-wrap">
                    <div className="cord d-flex justify-content-between">
                        <span className="phone h">PHONE: +213 541 88 39 75</span>
                        <span className="mail">E-EMAIL: hbhyasser@gmail.com</span>
                    </div>
                    <div className="other d-flex justify-content-between">
                        <span className="gift h">GIFT CARD</span>
                        <span className="track h">TRACK ORDER</span>
                        <span className="theme">THEME: LIGHT</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info