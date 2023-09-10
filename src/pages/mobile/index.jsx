import { Route, Routes } from 'react-router-dom';
import Mobileheader from './mobile_header';
import './style.scss';
import HomeBanner from '../../components/HomPageBanner';
import Footer from '../../components/footer';
import Trending from '../../components/Trending';
import NewAriaval from '../../components/NewAriaval';
import About from '../../components/AboutUs';

const mobileView = () => {

return(
    <div>
    <Mobileheader/>

    <Routes>
        <Route path='/home' element={<HomeBanner/>} index />
        <Route path='/trending' element={<Trending/>} />
        <Route path='/newariaval' element={<NewAriaval/>}/>
        <Route path='/about' element={<About/>} />
    </Routes>

    <Footer/>

    </div>
)
}

export default mobileView