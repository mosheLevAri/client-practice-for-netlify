
import { GiClick } from "react-icons/gi"
import { BsCheckCircleFill } from "react-icons/bs"
import { AiOutlineArrowRight } from "react-icons/ai"
import { FaSearch } from "react-icons/fa"

import { Link } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react"
import Langcard from "./Langcard";
import ExerciseCard from './ExerciseCard'
import Loader from "./Loader";
import { useContext } from "react"
import { UserContext } from "../App"


export default function AllExercise({ admin }) {

    const [ExerciseData, setExerciseData] = useState()
    const [LanguageData, setLanguageData] = useState()
    const [view, setView] = useState(false)
    const user = useContext(UserContext)

    const [SearhcData, setSearchData] = useState()
    const [TypeData, setTypeData] = useState()
    const [DifficultyData, setDifficultyData] = useState()


    useEffect(getLanguage, []);

    function getLanguage() {

        axios.get('https://practice-exercize2.herokuapp.com/Lang')
            .then(result => {
                setLanguageData(result.data)
            })
    }

    function getExercise(id) {
        axios.get(`https://practice-exercize2.herokuapp.com/exe-Lang/${id}`)
            .then(result => {
                setExerciseData(result.data)
            })
    }

    const clickLangFn = (id) => {
        getExercise(id);
        setView(true)

    };

    function ScrollHome(params) {
        return window.scrollTo({
            top: 700,
            left: 0,
            behavior: "smooth"
        })
    }

    function viewChenge() {
        setView(!view)
    }


    const SearceFilter = (e) => setSearchData(e.target.value)


    function TypeFilter(e) {
        const value = e.target.value;
        setTypeData(value)
    }

    function DifficultFilter(e) {
        const value = e.target.value;
        setDifficultyData(value)

    }


    function CollectAllFilter(TypeData, SearhcData, DifficultyData, arr) {

        if (!TypeData && !SearhcData && !DifficultyData) return arr

        const filter1 = SearhcData ? arr.filter(v => v.tags.find(v => v.toLowerCase().startsWith(SearhcData))) : arr

        const filter2 = TypeData ? filter1.filter(v => v.exec_type.includes(TypeData)) : filter1

        const filter3 = DifficultyData ? filter2.filter(v => v.difficulty.includes(DifficultyData)) : filter2

        return filter3

    }

    const arrr = CollectAllFilter(TypeData, SearhcData, DifficultyData, ExerciseData)

    return <div>
        {view ? <div> {ExerciseData ?
            <><div className="SearchExercise">
                <div className="ExerciseLangDetails">

                    <select name="type" className="selectSearch" onChange={TypeFilter} >
                        <option value="">Choose type exercise</option>
                        <option value="short">Short</option>
                        <option value="rolling">Rolling</option>
                        <option value="tutorial" >Tutorial</option>
                    </select>

                    <select name="difficulty" className="selectSearch" onChange={DifficultFilter}>
                        <option value="">Choose difficulty level </option>
                        <option value='easy'>Easy</option>
                        <option value='medium'>Medium</option>
                        <option value='hard'>Hard</option>
                    </select>
                    <div className="selectSearch">
                        <input type='search' placeholder="Search Exercise" onChange={SearceFilter} name="search" style={{ border: 'none' }} />
                        <FaSearch style={{ color: 'grey' }} />
                    </div>
                    <div><button className="buttonBack" onClick={viewChenge}> Go back <AiOutlineArrowRight style={{ color: 'red' }} /></button></div>
                </div>
            </div>
                <br />
                <div className="SearchExercise">
                    {arrr.map(v =>
                        <ExerciseCard name={v.title} key={v._id} id={v._id} icon={v.icon} details={v.details} difficulty={v.difficulty} exec_type={v.exec_type} admin={admin} />
                    )} </div> </> : <div className="Loader"><Loader /></div>} </div> :
            <div>
                {admin ? '' : <div className="divAboveImgHeader" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="img_header"> </div>
                    <div className="Sun_img_header">
                        <h1 className="h1Home">Get really<span style={{ fontWeight: '600' }} className="spanTitleMainPage">good</span>at programming.</h1>
                        <p className="pHome">
                        Develop fluency in<span> 55 programming languages </span>with our unique blend of learning, practice and mentoring.
                         Exercism is fun, effective and<span> 100% free, forever.</span>
                        </p>
                        <div className="divHeaderButtonLogIn" >
                            <Link to='/login'><button className="HeaderButtonLogIn">Sign up for free</button></Link>
                            <button className="ButtonHomeStart" onClick={ScrollHome}><strong>Lets start</strong><GiClick className="GiClick" /></button>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <div className="imgCare"><p className="pImgAllExercize">Your success is our concern<BsCheckCircleFill style={{ color: 'green' }} /></p></div>
                            <div className="imgSavingMoney"> <p className="pImgAllExercize">100% free <BsCheckCircleFill style={{ color: 'green' }} /></p></div>
                            <div className="imgOnlineLerning"> <p className="pImgAllExercize">Social Mobility<BsCheckCircleFill style={{ color: 'green' }} /></p></div>
                        </div>
                    </div>
                </div>}
                <h1 className="h1Lang">Programming languages</h1>
                <div>{user?.firstName}</div>
                <div className="DivAboveLang">
                    {LanguageData ? LanguageData.map(v => {
                        return <Langcard clickLangFn={clickLangFn} name={v.prog_lang} key={v.prog_lang} id={v._id} icon={v.icon} tags={v.tags} />
                    }) : <div className="Loader"><Loader /></div>}</div>

            </div>}
    </div>




}


