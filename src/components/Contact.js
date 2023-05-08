import { Link, Outlet } from "react-router-dom"

const Contact = () => {
    return (
        <>
            <h1>I'm Contact Page</h1>
            <ul>
                <li><Link to='email'>Through Email</Link></li>
            </ul>
            <Outlet />
        </>
    )
}

export default Contact