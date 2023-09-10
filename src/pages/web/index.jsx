import { Route, Routes } from 'react-router-dom'
import About from '../../components/AboutUs'
import HomeBanner from '../../components/HomPageBanner'
import NewAriaval from '../../components/NewAriaval'
import Trending from '../../components/Trending'
import Footer from '../../components/footer'
import HomePage from '../../router/HomePage'

import './style.scss'
import Webheader from './web_header'

const webView = () => {

return(
    <div className='Webbb'>
        <Webheader/>


        <Routes>
        
        <Route  path='/home' element={<HomeBanner/>} index />
        <Route  path='/trending' element={<Trending/> }/>
        <Route  path='/newariaval' element={<NewAriaval/>}/>
        <Route  path='/about' element={<About/>}/>



        </Routes>


        <Footer/>

    </div>
)
}

export default webView