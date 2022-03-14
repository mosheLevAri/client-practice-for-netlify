import AllExercise from "../components/AllExercise";
import { useState } from "react";
import AdminExerciseForm from  './AdminExerciseForm'

export default function Admin() {
    const [editor, seteditor] = useState(false)
    const [createExercise, setcreateExercise] = useState(false)

function Editor() {
    if(editor) return  seteditor(false)
    return seteditor(true)
}
function CreateExercise() {
    if(createExercise) return  setcreateExercise(false)
    return setcreateExercise(true)  
}


    return (
        <div className="adminDashBored">
          <div className="DashBored">
          <h1 className="h1Home">ברוך הבא לדף הניהול</h1>
              <div> </div>
              <div>{editor?<AllExercise admin={true}/>:""} </div>
              <div>{createExercise?<AdminExerciseForm/>:''}</div>
              <div> </div>
             
          </div>
          <hr/>
          <div className="buttonDashBored">
              <button className="buttonInsideDashBores">סטטיסטיקות</button>
              <button className="buttonInsideDashBores" onClick={Editor}>עריכת תרגילים</button>
              <button className="buttonInsideDashBores"  onClick={CreateExercise}>יצירת תרגילים</button>
              <button className="buttonInsideDashBores">ניהול משתמשים </button>

          </div>
        </div>
    )
}
