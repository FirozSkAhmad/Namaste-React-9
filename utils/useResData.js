import { useState, useEffect } from 'react'
import { RES_DATA } from './constants'


const useResData = () => {
    const [resData, setResData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const data = await fetch(RES_DATA)
        const json = await data.json()
        setResData(json?.data?.cards[2]?.data?.data?.cards)
    }

    return resData
}

export default useResData