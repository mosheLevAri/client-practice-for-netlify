import { Link } from "react-router-dom";
import { GrNext } from "react-icons/gr"

export default function ExerciseCard(props) {


    return (
        <div className="ExerciseCard">
                <img src={props.icon} className="img" />
            <div>
                <Link to={`${props.admin ? "/admin" : ""}/exercise/${props.id}`}>
                    <div className="nameAndImgONExeCard">
                        <h2>{props.name}</h2>
                        <div className="CardDetails">{props.details}</div>
                    </div>
                </Link>
            <div className="ExerciseCardDetails">
                <span>{props.exec_type}</span>
                <span>{props.difficulty}</span>
            </div>
            </div>
            <GrNext/>

        </div>
    )
}
