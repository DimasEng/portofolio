import "./topbar.scss";
import {AccountCircle, Mail} from '@material-ui/icons';

export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
            <a href="#intro"className="logo">think.</a>
            <div className="itemContainer">
              <AccountCircle className="icon"/>
              <span>+62 85782295105</span>
            </div>
            <div className="itemContainer">
              <Mail className="icon"/>
              <span>dimas3dartisan@gmail.com</span>
            </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}