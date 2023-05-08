import { useState, useEffect } from 'react'

const useGitData = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        getUserData()
    }, [])

    async function getUserData() {
        const data = await fetch("https://api.github.com/users/FirozSkAhmad")
        const json = await data.json()
        setData(json)
    }

    return data
}

export default useGitData