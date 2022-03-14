import Loader from "../Loader";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs"
import  Styles from './style.module.css'
 
export default function Error() {
    const Navigate=useNavigate()
    return (
        <div className="Error" onClick={(()=>Navigate('/login'))}>

            <div className="sun_Error">
                <h1 className={Styles.headline}>404</h1>
               <h3> לצערנו הכתובת שחיפשת איננה קיימת</h3>
               <BsSearch className="Loader_Error"/>
            </div>
        </div>
    )
}
