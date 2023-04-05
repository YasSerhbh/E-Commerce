import './style.css'


function Footer() {
    return (
        <div className='footer pt-5 pb-4'>
            <div className="container-fluid container-lg">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <ul><span>About Us</span>
                            <li className='mt-4'>Who we are</li>
                            <li>Work with us</li>
                            <li>Become a supplier</li>
                            <li>Investor relations</li>
                            <li>Our devices</li>
                            <li>Affiliate program</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <ul><span>Usful Links</span>
                            <li className='mt-4'>Contact us</li>
                            <li>Common FAQs</li>
                            <li>Terms & Conditions</li>
                            <li>Return policy</li>
                            <li>Cancellation</li>
                            <li>Track orders</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <ul><span>Online Shopping</span>
                            <li className='mt-4'>Men shopping</li>
                            <li>Women shopping</li>
                            <li>Gift cards</li>
                            <li>Home $ living</li>
                            <li>Electronics</li>
                            <li>Accessories</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="application">
                            <span>Experience App On Mobile</span>
                            <div className="apps mt-4 d-flex">
                            <div className="play d-flex align-items-center justify-content-center">
                                <i class="fa-brands fa-android"></i>
                                <div className="inf">
                                    <div>Get it On</div>
                                    <div>Google Play</div>
                                </div>
                            </div>
                            <div className="appstore d-flex align-items-center justify-content-center">
                                <i class="fa-brands fa-apple"></i>
                                <div className="inf">
                                    <div>Get it On</div>
                                    <div>App Store</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <hr />
                        <div className="follow">
                            <span>Follow us</span>
                            <div className="socials d-flex mt-4">
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-pinterest"></i>
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <p>Copyright © 2019 <div>themeies.com</div>. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer