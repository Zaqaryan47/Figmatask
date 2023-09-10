import { NavLink } from 'react-router-dom';
import './style.scss';

const Webheader = () => {

return(
    <div className='WebHeaderr'>
        <div className="L-header">

            <div className='allrout'>
            <div className="left-box">
                <p className="namesite">HIJAB HOUSE</p>
            </div>
            <div className="centr-box">
                <p className="routtin "> <NavLink className='rout1' to="/home">Home</NavLink> </p>
                <p className="routtin "><NavLink className='rout1' to="/newariaval">New Ariaval</NavLink></p>
                <p className="routtin "><NavLink className='rout1' to="/trending">Trending</NavLink></p>
                <p className="routtin "><NavLink className='rout1' to="/about">About Us</NavLink></p>
            </div>
            
            
        </div>

        <div className='right-box'>
                <div className="iconsshop">
                    <p className="search  icon-search"></p>
                </div>
                <div className="iconsshop log_text">Login</div>
                <div className="iconsshop">
                    <div className="part1 icon-Circle"/>
                    <div className="part2 icon-Cart"/>
                </div>
            </div>

        </div>    

    </div>
)
}

export default Webheader