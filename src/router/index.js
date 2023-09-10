import ResponsiveView from "../responsiveView"
import Mobileview from '../pages/mobile/index'
import Webview from '../pages/web/index';




const Routor = ()=>{
    return(
        <div>
        <ResponsiveView mobileView={<Mobileview />} webView={<Webview />} />




        </div>
    )
}

export default Routor


