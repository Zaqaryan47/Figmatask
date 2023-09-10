import './style.scss';



const AboutComp = (props) => {
  
    const items = props.items

    return(
        <div className='itemsabout'>
            <img className='images' src={items.imgs} style={{width:items.width}} alt="" />

        </div>

    )
}

export default AboutComp