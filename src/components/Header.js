import { ICON_LOGO } from "../../utils/constants"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header-con">
            <div className="img-con">
                <img alt="app-log" src={ICON_LOGO}></img>
            </div>
            <div className="nav-con">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><Link>Cart</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header