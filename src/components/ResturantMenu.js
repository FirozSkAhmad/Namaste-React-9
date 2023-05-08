import { useParams } from 'react-router-dom'
import { RES_IMG_BASE_URL } from '../../utils/constants'
import Shimmer from './Shimmer'
import useResMenuData from '../../utils/useResMenuData'

const MenuCard = (props) => {
    const { menuData } = props
    const { title, itemCards } = menuData
    return (
        <div>
            {(itemCards) ? <h1>{title}</h1> : null}
            {itemCards?.map((x) => <h3 key={x.card.info.id}>{x.card.info.name + " - " + "₹" + x.card.info.price / 100}</h3>)}
        </div>

    )
}

const ResturantMenu = () => {

    const { id } = useParams()

    const [menuData, resData] = useResMenuData(id)

    return (menuData.length !== 0) ? (
        <div className='mainResMenu-con'>
            <div className='resData-con'>
                <h2>Resturant Id:{resData?.id}</h2>
                <h2>{resData?.name}</h2>
                <img alt="res-img" src={RES_IMG_BASE_URL + resData?.cloudinaryImageId}></img>
                <h4>{resData?.avgRating} stars, {resData?.sla?.maxDeliveryTime} mins</h4>
            </div>
            <div className='resMenu-con'>
                {menuData.map((data, ind) => <MenuCard key={ind} menuData={data.card.card} />)}
            </div>
        </div>
    ) : <Shimmer />
}

export default ResturantMenu