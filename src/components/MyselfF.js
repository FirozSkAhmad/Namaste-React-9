import { useState } from "react"
import useGitData from "../../utils/useGitData"
import useIsOnline from "../../utils/useIsOnline"

const MyselfF = () => {

    const [count, setCount] = useState(0)

    const data = useGitData()

    const isOnline=useIsOnline()

    if(!isOnline){
        return(
            <h2>Check your internet connection</h2>
        )
    }

    return (
        <>
            <h1>It's me functional component</h1>
            <h2>Name:{data.name}</h2>
            <h3>Count1:{count}</h3>
            <button onClick={() => setCount(0)}>Update Count</button>
        </>
    )
}

export default MyselfF