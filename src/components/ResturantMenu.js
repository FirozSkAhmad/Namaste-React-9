import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RES_IMG_BASE_URL } from '../../utils/constants'
import Shimmer from './Shimmer'
import { MENU_DATA_URL } from '../../utils/constants'

const MenuCard = (props) => {
    const { menuData } = props
    const { title, itemCards } = menuData
    return (
        <div>
            {(itemCards) ? <h1>{title}</h1> : null}
            {itemCards?.map((x) => <h3>{x.card.info.name + " - " + "₹" + x.card.info.price / 100}</h3>)}
        </div>

    )
}

const ResturantMenu = () => {

    const { id } = useParams()

    const [menuData, setMenuData] = useState([])
    const [resDat, setResData] = useState({})

    useEffect(() => {
        getResMenuData()
    }, [])

    async function getResMenuData() {
        const data = await fetch(MENU_DATA_URL + id)
        const json = await data.json()
        setResData(json?.data?.cards[0]?.card?.card?.info)
        setMenuData(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(1, -1))
    }

    return (menuData.length !== 0) ? (
        <div className='mainResMenu-con'>
            <div className='resData-con'>
                <h2>Resturant Id:{resDat?.id}</h2>
                <h2>{resDat?.name}</h2>
                <img alt="res-img" src={RES_IMG_BASE_URL + resDat?.cloudinaryImageId}></img>
                <h4>{resDat?.avgRating} stars, {resDat?.sla?.maxDeliveryTime} mins</h4>
            </div>
            <div className='resMenu-con'>
                {menuData.map((data, ind) => <MenuCard key={ind} menuData={data.card.card} />)}
            </div>
        </div>
    ) : <Shimmer />
}

export default ResturantMenu