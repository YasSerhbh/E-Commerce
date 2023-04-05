import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid , regular } from '@fortawesome/fontawesome-svg-core/import.macro'
import './style.css'


function Header() {
    return (
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid container-lg">
          <a className="navbar-brand" href="/"><img src="images/logo.png" alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 ps-4 ps-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">SHOP</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">BLOG</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">PRODUCTS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">BRANDS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">CONTACT</a>
              </li>
            </ul>
            <div className="icons m-4 m-lg-0">
                <div className='tt'><FontAwesomeIcon icon={solid("magnifying-glass")} className='icon' /></div>
                <div className='tt'><FontAwesomeIcon icon={solid("cart-shopping")} className='icon' /></div>
                <div><FontAwesomeIcon icon={regular("heart")} className='icon' /></div>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Header