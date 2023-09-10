import './style.scss';
import  img1 from "../../assets/img/nkar1.png";
import '../../assets/icon/style.css'

const HomeBanner = () => {

return(
    <div className="L-homepage">
        <div className="L-homepagetwo">
    <div className="top-box">

    <div className="left-box">
        <p className="text-inbox">Womens Spring Range of Hijab</p>
        <div className="text-botom">
            <p className="texts-bottom">Our new range of overcoats made from 100% cashmere, ethically sourced and without the price tag of old fashion houses.</p>
            <p className="icones icon-20"></p>
        </div>
    </div>
    <div className="right-box">
        <img className='img1' src={img1} alt="" />
    </div>

    </div>
   

</div>
</div>
)
}

export default HomeBanner