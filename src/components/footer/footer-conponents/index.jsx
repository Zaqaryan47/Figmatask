import './style.scss'


const FooterComp = (props)=>{

    const items = props.items

    return(

        <div className='L-Footerutil'>

            <div className="menues">
                <p className='allmenus'>{items.name}</p>
            </div>


        </div>
    )
}

export default FooterComp