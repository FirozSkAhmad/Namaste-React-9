import { useState, useEffect } from 'react'
import { MENU_DATA_URL } from './constants'


const useResMenuData = (id) => {

    const [menuData, setMenuData] = useState([])
    const [resDat, setResData] = useState({})

    useEffect(() => {
        getResMenuData()
    }, [])

    async function getResMenuData() {
        const data = await fetch(MENU_DATA_URL + id)
        const json = await data.json()
        setResData(json?.data?.cards[0]?.card?.card?.info)
        setMenuData(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(1, -1))
    }

    return [menuData, resDat]
}

export default useResMenuData