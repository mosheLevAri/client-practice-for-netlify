export default function Langcard(props) {
    return (

        <button onClick={() => props.clickLangFn(props.id)} className="LanguageList">
            <div className="ExerciseLangDetails">
                <img src={props.icon} className="img" />
                <div><h2>{props.name}</h2>
                    {/* <div> {props.tags.map(v => <span key={v}>{v}</span>)}</div> */}
                </div>
            </div>
        </button>
    )
}
