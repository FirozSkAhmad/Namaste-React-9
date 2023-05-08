import { ICON_LOGO } from "../../utils/constants"
import { Link } from 'react-router-dom'
import useIsOnline from "../../utils/useIsOnline"

const Header = () => {

    const isOnline=useIsOnline()

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
                    <li><Link to='/instamart'>InstaMart</Link></li>
                </ul>
            </div>
            <div className="isonline-con">
                {(isOnline)?<h2>🟢</h2>:<h2>🔴</h2>}
            </div>
        </div>
    )
}

export default Header