import './style.scss';
import img1 from '../../assets/img/facebook.svg'
import img2 from '../../assets/img/twitter.svg'
import img3 from '../../assets/img/instagram.svg'
import { aboututil } from './util';
import AboutComp from './about-components/insex';


const About = () => {

return(
    <div className='AboutUs'>
        <div className="aboutcont">
        <div className="clickabout">
            <p className="textclick">Learn more about us</p>
        </div>

        </div>

        <div className="line-pack">
            <div className="line1"></div>
            <div className="component">
                <p className="title-about">“Beautiful collection of indie American brands at a fair price”</p>

                <div className="icones">\
                <div className="ico">
                <img className='icos' src={img2} alt="" />
                </div>
                <div className="ico">
                <img className='icos' src={img3} alt="" />
                </div>
                <div className="ico">
                <img className='icos' src={img1} alt="" />
                </div>
                    
                    
                    
                    </div>
            </div>
            <div className="line2"></div>
        </div>

        <div className="instapicure">

            <div className="centerpart">

            
            <div className="followpart">
                <div className="leftfollow">
                    <p className="titlefollow">
                        Check us on Instagram
                    </p>
                </div>
                <div className="rightfollow">
                    FOLLOW US ON THE GRAM
                </div>
            </div>
            <div className="pichure">
            {aboututil.map(el => <AboutComp key={el.id} items={el} />)}

            </div>


        </div>
        </div>
        <div className="line2"></div>


    </div>
)
}

export default About