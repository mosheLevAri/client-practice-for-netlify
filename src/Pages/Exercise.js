import axios from "axios"
import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai"
// import { UserContext } from "../App"


export default function Exercise() {

    const [ExecriseData, setExecriseData] = useState([])
    // const [paragrphExersize, setparagrphExersize] = useState([])
    const [solution, setsolution] = useState(false)
    const params = useParams()
    // const langid = useContext(UserContext)


    useEffect(getLanguage, []);
    function getLanguage() {
        axios.get(`http://localhost:3333/exercise/${params.id}`)
            .then(result => {
                setExecriseData(result.data.exercise[0])

            })
    }
    // useEffect(convertingContent, [ExecriseData]);



    // function convertingContent() {

    //     let contentArr = ExecriseData?.content?.content.split('\n')
    //     // let exempleContent = contentArr?.filter(v => v.startsWith('**'))

    //     setparagrphExersize(contentArr)
    // }
    console.log(ExecriseData);

    return (<div className="ExecriseDetails">
        {/* <div><button className="buttonBack"> Go back <AiOutlineArrowRight style={{ color: 'red' }} /></button></div> */}
        {ExecriseData ? <div className="ExecriseDetailsWithSolution" >

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1>{ExecriseData.title}</h1>
                <img src={ExecriseData.icon} />
            </div>
            <div>
                <div className="ExecriseDetails">
                    <h2>הצגת התרגיל</h2>
                    <br />
                    {ExecriseData?.content?.content?.split('\n').map(v => <p className="Pdescription" key={v}>{v}</p>)}

                </div>
                <button onClick={(() => setsolution(!solution))} className="buttonSolustion"><strong >פתרון</strong></button>
                <div>
                    {solution ?
                        <pre className="ExecriseDetails">{ExecriseData.solution.split('\\n').map(v => {
                           return <p key={v} style={{ fontWeight: 400, padding: 5 }}>{v}</p>
                        }
                        )}
                        </pre> : ''}
                </div>
            </div>
        </div> : <div className="Loader"><Loader /></div>}
    </div>
    )
}
