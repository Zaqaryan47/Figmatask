import './style.scss';
import TrendingComp from './trending-components';
import { tradingutil } from './util';

const Trending = () => {

return(
    <div className='trending'>
<div className="title">
    <p className="titletxt">Trending</p>
</div>

<div className="itemsflex">
<div className="items">
    {tradingutil[0].map(el => <TrendingComp key={el.id} items={el} />)}
</div>
<div className="items">
{tradingutil[1].map(el => <TrendingComp key={el.id} items={el} />)}

</div>
</div>


    </div>
)
}

export default Trending