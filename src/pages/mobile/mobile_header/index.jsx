import { NavLink, useLocation } from 'react-router-dom';
import './style.scss';
import { useEffect, useState } from 'react';
const Mobileheader = () => {


const location = useLocation()

const path = location.pathname

    const [click,setClick] = useState('none')
    const [trans,setTrans] = useState('')
    const [rot,setRot] = useState('')
    const [wid,setwid] = useState('')


     function setstyle () {

        if(click === 'block'){
            setTrans('0.30s')
            setClick('none')
            setRot('')
            setwid('')

        }
        else if (click === 'none'){
            setClick('block')
            setTrans('0.30s')
            setRot('-144deg')
            setwid('72%')
        }


     }

     useEffect(()=>{

        if(path === '/newariaval'){
            setClick('none')
        }
        if(path === '/home'){
            setClick('none')
        }
        if(path === '/trending'){
            setClick('none')
        }
        if(path === '/about'){
            setClick('none')
        }

     },[location])

       

  


return(
    <div className='L-mobileheader'>

<div className='headerblock' style={{display:click,transition:trans}}>

<div className="centr-box">
                <p className="routtin "> <NavLink className='rout1' to="/home">Home</NavLink> </p>
                <p className="routtin "><NavLink className='rout1' to="/newariaval">New Ariaval</NavLink></p>
                <p className="routtin "><NavLink className='rout1' to="/trending">Trending</NavLink></p>
                <p className="routtin "><NavLink className='rout1' to="/about">About Us</NavLink></p>
            </div>
            

</div>

    <div className="M-header">


        <div className="leftmobbox">

            <div className="menuemob" onClick={setstyle}>
            <div className="leftpt">
                <p className="lineheader"></p>
                <p className="lineheader"style={{rotate:rot,width:wid}}></p>
                <p className="lineheader"></p>
            </div>


            </div>

           
            <div className="rightpt">
                <p className="icom icon-search"></p>
                
            </div>
        </div>
        <div className="centermobbox">
        <p className="namesitemob">Hijab House</p>
        </div>
        <div className="rightmobbox">
            <p className="treeboxs">
                <p className='tree'>3</p>
            </p>
        </div>


    

    </div>    

</div>
)
}

export default Mobileheader