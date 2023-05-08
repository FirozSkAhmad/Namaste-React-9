import { RES_IMG_BASE_URL } from '../../utils/constants'

const ResCard = (props) => {
    const { resData } = props
    const { name, cloudinaryImageId, cuisines, costForTwo, maxDeliveryTime, avgRating } = resData
    return (
        <div className="res-card">
            <img alt="res-img" src={RES_IMG_BASE_URL + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo / 100} for Two</h4>
            <h4>{avgRating} stars, {maxDeliveryTime} mins</h4>
        </div>
    )
}

export default ResCard