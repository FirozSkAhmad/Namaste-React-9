import { useState, useEffect } from 'react'
import { RES_DATA } from './constants'


const useResData = () => {
    
    const [data, setData] = useState([])
    const [dataF, setResDataF] = useState([])

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const data = await fetch(RES_DATA)
        const json = await data.json()
        setData(json?.data?.cards[2]?.data?.data?.cards)
        setResDataF(json?.data?.cards[2]?.data?.data?.cards)
    }

    return [data, dataF, setResDataF]
}

export default useResData