import './style.scss';

import face1 from '../../assets/img/nkar1.png'


const Footer = () => {

return(
    <div className='L-Footers'>
   
        <div className="futermeat">

        <div className="serche">
            <div className="leftparts">
             <div className="toppartes">
             <input className='radio' type="radio" name="" id="" />
            We also make emails
             </div>
             <div className="bottompartes">
             Recieve updates and offers you’ll actually be interested in. Unsubscribe any time.

             </div>

            </div>
            <div className="rightparts">
                <input className='inp1'  type="text" />
            </div>
        </div>

        <div className="footerimgs">
            <div className="leftimg">
                <img className='face1' src={face1} alt="" />
                <p className="nameface">Hijab House</p>
            </div>
            <div className="centerparts">

                <div className="centerchild1">
                    <p className="write"> <b>MENS</b></p>
                    <p className="write">Tshirts</p>
                    <p className="write">Shirts</p>
                    <p className="write">Sweaters</p>
                    <p className="write">Jeans</p>
                    <p className="write">Jackets</p>
                    <p className="write">Accessories</p>
                    <p className="write">Lookbook</p>
                    
                </div>
                <div className="centerchild1">
                    <p className="write"> <b>WOMENS</b></p>
                    <p className="write">Tops</p>
                    <p className="write">Sweaters</p>
                    <p className="write">Dresses</p>
                    <p className="write">Jeans</p>
                    <p className="write">Jackets</p>
                    <p className="write">Accessories</p>
                    <p className="write">Lookbook</p>
                </div>
                <div className="centerchild1">
                    <p className="write"> <b>SITE</b></p>
                    <p className="write">Journal</p>
                    <p className="write">About us</p>
                    <p className="write">Our Story</p>
                </div>
                <div className="centerchild1">
                    <p className="write"> <b>SUPPORT</b></p>
                    <p className="write">Shipping and Delivery</p>
                    <p className="write">Returns Policy</p>
                    <p className="write">Privacy Policy</p>
                </div>

            </div>
            <div className="rightparts">

                <div className="lefit">
                    <p className="textus"> <b>ISLAMABAD STORE</b></p>
                    <p className="descripttes">Y Block 1101 Blue Area Islamabad, Pakistan</p>
                </div>


                <div className="lefit">
                <div className="textus"><b>Lahore STORE</b></div>
                <p className="descripttes">Y Block DHA Phase 4 Lahore, Pakistan</p>
                </div>
                

            </div>
        </div>

        </div>

    </div>
)
}

export default Footer