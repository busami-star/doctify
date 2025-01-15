import {assets} from "../assets/assets.js";
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400'>
            <img src={assets.logo} alt='' />
            <ul>
                <NavLink>
                    <li>HOME</li>
                    <hr />
                </NavLink>
                <NavLink>
                    <li>ALL DOCTORS</li>
                    <hr />
                </NavLink>
                <NavLink>
                    <li>ABOUT</li>
                    <hr />
                </NavLink>
                <NavLink>
                    <li>CONTACT</li>
                    <hr />
                </NavLink>
            </ul>
            <div>
                <button>Create account</button>
            </div>
        </div>
    )
}
export default Navbar