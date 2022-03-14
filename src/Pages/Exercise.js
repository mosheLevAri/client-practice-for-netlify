import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";


export default function Exercise() {

    const [ExecriseData, setExecriseData] = useState()
    const [solution, setsolution] = useState(false)
    const params = useParams()

    useEffect(getLanguage, []);
    function getLanguage() {
        axios.get(`https://practice-exercize2.herokuapp.com/exercise/${params.id}`)
            .then(result => {
                setExecriseData(result.data.exercise[0])
                console.log(result.data);
            })
    }

    return (<div className="ExecriseDetails">
        {ExecriseData ? <div className="ExecriseDetailsWithSolution" >
            <div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h1>{ExecriseData.title}</h1>
                    <img src={ExecriseData.icon} />
                </div>
                <div>
                    <div className="ExecriseDetails"><h2>הצגת התרגיל</h2><br /> <p>{ExecriseData.content.content}</p></div>
                    <button onClick={(() => setsolution(!solution))} className="buttonSolustion"><strong >פתרון</strong></button>
                    <div>{solution ? <div className="ExecriseDetails">{ExecriseData.solution}</div> : ''}</div>
                </div>
            </div>
        </div> : <div className="Loader"><Loader /></div>}</div>
    )
}
