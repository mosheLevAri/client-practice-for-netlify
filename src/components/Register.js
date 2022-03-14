import axios from "axios"
import { useContext } from "react"
import { UserContext } from "../App"

export default function Register(props) {

    const { setregisteruser } = useContext(UserContext)

    function SendRegister(e) {
        e.preventDefault()

        const
            form = e.target,
            values = getAllValues(form)



        axios.post('https://practice-exercize2.herokuapp.com/register', values)
            .then(() => {
                form.reset()
                setregisteruser(values)
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
            <div className="imgRegister"></div>
            <div>
                <h1 style={{ marginTop: 20 }}>ברוך הבא למשפחה</h1>

                <form className="FormLogin" onSubmit={SendRegister}>
                    <div>
                        <input type='text' name="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                        <input type='text' name="lastName" placeholder="Enter your last name" />
                    </div>
                    <div>
                        <input type='email' name="email" placeholder="Enter your email address" />
                    </div>
                    <div>
                        <input type='password' name='password' placeholder="Choos a password" />
                    </div>
                    <input type='submit' value="Sing Up" className="ButtonLogin" />
                    <div><p>? Already got an account </p><button onClick={() => props.changeView()} className="buttonIfCountExsist">Log in</button></div>
                </form>
            </div>
        </div>
    )
}
