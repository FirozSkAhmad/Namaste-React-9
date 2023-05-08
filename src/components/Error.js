import { useRouteError } from 'react-router-dom'

const Error = () => {
    const { status, statusText } = useRouteError()
    return (
        <div className='errPage-con'>
            <h1>Opps page not founded.....</h1>
            <h2>{status + ":" + statusText}</h2>
        </div>

    )
}

export default Error