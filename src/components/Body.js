import { useState } from "react";
import { Link } from "react-router-dom";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import NoRes from "./NoRes";
import useResData from "../../utils/useResData";


const Body = () => {

    const [name, setName] = useState("")

    const data = useResData()

    const [dataF, setDataF] = useState(data)

    function searchHandler() {
        const filtredData = data.filter(resData => resData?.data?.name.toLowerCase().includes(name.toLowerCase()))
        setDataF(filtredData)
    }

    function topRatedHandler() {
        const filtredData = data.filter(resData => resData?.data?.avgRating >= 4).sort((a, b) => b?.data?.avgRating - a?.data?.avgRating)
        setDataF(filtredData)
    }

    return (
        <div className="main-res-con">
            <div className="search-bar">
                <div className="search-box">
                    <input type="text" placeholder="Resturant Name" defaultValue={name} onChange={(e) => setName(e.target.value)}></input>
                    <button onClick={searchHandler}>search</button>
                </div>
                <div className="topRated-box">
                    <button onClick={topRatedHandler}>Top Rated</button>
                </div>
            </div>
            <div className="res-con">
                {(data.length !== 0) ? (dataF.length !== 0) ? dataF.map(singleResData => <Link to={"/resturantMenu/" + singleResData?.data?.id} key={singleResData?.data?.id}><ResCard resData={singleResData?.data} /></Link>) : <NoRes /> : <Shimmer />}
            </div>
        </div>
    )
}

export default Body