import './style.scss'


const AriavalComp = (props)=>{

    const items = props.items

    return(

        <div className='L-Ariaval'>

            <div className="Stories">

              <img style={{width:items.width, height:items.height ,marginLeft:items.marginl, marginTop:items.margint}} src={items.img} alt="" />  

            </div>
            <div className="namepic">

                <p className="namethis">{items.name}</p>
                <p className="descpic">{items.descript}</p>
                <div className="topside">
                    <p className="leftside">{items.left}</p>
                    <div className="rightparts">
                        <p className="rightside">{items.right}</p>
                    </div>
                </div>
                

            </div>


        </div>
    )
}

export default AriavalComp