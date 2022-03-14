import axios from "axios"
import { useContext, useEffect } from "react"
import { UserContext } from "../App"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Login(props) {

    const [eror, setEror] = useState(false)
    const { setloginUser, loginUser } = useContext(UserContext)
    const { token, setToken } = useContext(UserContext)

    let nevigate = useNavigate()


  

    function SendLogin(e) {
        e.preventDefault()
        const
        form = e.target,
        values = getAllValues(form)
        
        axios.post('https://practice-exercize2.herokuapp.com/login', values)
        .then((result) => {
            form.reset()
            setloginUser(result.data.result) /////לקבל את הכל תחת סטייט אחד ומשם לפרק את מה שאני צריך
           if(result.data.status===400) return setEror(true)
            sessionStorage.setItem('token', result.data.token)
            setToken(result.data.token)
               if(result.data.result) return nevigate('/')
            })

        function getAllValues(form) {
            return Object.values(form)
                .reduce((acc, curr) => {
                    let { value, name } = curr
                    return name ? { ...acc, [name]: value } : acc
                }, {})
        }
    }



    return (
        <div className="registerDiv">
            <div className="imgLogin"></div>
            <div>
                <h1 style={{marginTop:20}}>כיף שחזרת</h1>
                <form className="FormLogin" onSubmit={SendLogin}>
                    <input type='email' name="email" placeholder="Enter your email address" />
                    <input type='password' name="password" placeholder="Enter your password" />
                    <input type='submit' className="ButtonLogin" value='Sing up'/>

                    {eror ? <p>נסה שוב מייל או סיסמא אינם נכונים</p> : ''}
                    <div><p>? Don’t have an account yet</p><button onClick={() => props.changeView()} className="buttonIfCountExsist"> Sign up for free</button></div>

                </form>
            </div>
        </div>
    )
}
