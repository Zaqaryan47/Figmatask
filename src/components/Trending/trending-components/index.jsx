import './style.scss';

const TrendingComp = (props) => {

    const items = props.items


return(
    <div className='trending-comp'>

<div className="items">

    <div className="toppart">
        <div className="leftpart">
            <p className="leftsale">{items.leftsale}</p>
        </div>
            <div className="rightpart">
             <p className="rightsale">{items.rightsale}</p>
             <b className="rightsale">{items.key}</b>
            </div>
           


    </div>
    <img className='img' src={items.img} alt="people"/>
    <p className="names">
        <p className="name">{items.name}</p>
    </p> 
            <b className="description">{items.description}</b>

    <button className='btnon'>{items.btn}</button>



</div>

    </div>
)
}

export default TrendingComp