import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react"
import { UserContext } from "../App"
// import { BsMoonStarsFill } from "react-icons/io5"
import { FaHome } from "react-icons/fa"
import { BsCloudSunFill, BsMoonStarsFill } from "react-icons/bs"
import { MdManageAccounts } from "react-icons/md"
import { useNavigate } from "react-router-dom";

export default function Header() {
  const Navigate = useNavigate()

  const { loginUser, setloginUser } = useContext(UserContext)
  const [welcomeTitle, setWelcomeTitle] = useState()
  useEffect(welcome_title, []);

  function welcome_title() {
    let date = new Date().getHours();
    date > 4 && date < 12 ? date = 'Good Morning' : date <= 16 && date >= 12 ? date = 'Good afternoon'
      : date = 'Good evening'
    setWelcomeTitle(date)
    console.log(welcomeTitle)
  }

  return (
    <div className="FatherHeaderButton">

      <Link to='/'><button className="HeaderButtonHome">Home <FaHome /></button></Link>

      {loginUser?.promistion === "admin" ? <Link to='/admin'>
        <button className="HeaderButtonHome">Administration<MdManageAccounts /></button></Link> : ''}

      {loginUser?.name ? <div className="div_user_header">{welcomeTitle === 'Good evening' ? <BsMoonStarsFill className="svgNigth" /> : <BsCloudSunFill className="svgDay" />}
        <span className="h2_header">{welcomeTitle}   {loginUser?.name}  </span> </div> :
        <div className="div_user_header">{welcomeTitle === 'Good evening' ? <BsMoonStarsFill className="svgNigth" /> : <BsCloudSunFill className="svgDay" />}
          <span className="h2_header">{welcomeTitle} guest</span></div>}

      {loginUser ? <button onClick={(() => setloginUser(''))} className="HeaderButtonLogOut">Log out</button> :
        <Link to='/login'><button className="HeaderButtonLogInNav">Log in</button></Link>}

    </div>
  )
}
