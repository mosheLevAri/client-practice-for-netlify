import { useState } from "react"
import Register from '../components/Register'
import Login from '../components/Login'

export default function LoginPages({ setUser }) {

    const [view, setView] = useState(false)

    function changeView(params) {
        setView(!view)
    }

    return (
        <div>
            {view ?
                <Register changeView={changeView} /> :
                <Login changeView={changeView} />}
        </div>
    )
}
