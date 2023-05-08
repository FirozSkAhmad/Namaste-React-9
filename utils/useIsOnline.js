import { useEffect, useState } from "react"

const useIsOnline = () => {

    const [isOnline, setIsOnline] = useState(true)

    const onlineFn = () => {
        setIsOnline(true)
    }

    const offlineFn = () => {
        setIsOnline(false)
    }

    useEffect(() => {
        window.addEventListener('online', onlineFn)

        window.addEventListener('offline', offlineFn)

        return (() => {
            window.removeEventListener('online', onlineFn)
            window.removeEventListener('offline', offlineFn)
        })

    }, [])

    return isOnline
}

export default useIsOnline