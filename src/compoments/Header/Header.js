import "./Header.scss"
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <>
            <div className={props.cName}>
                <img alt="HeaderImage" src={props.headerImg}/>
                <div className="header-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <Link to="/rezerwacje" className={props.btnClass}>{props.buttonText}</Link>
                </div>
            </div>
        </>
    )
}

export default Header;

// <a href={props.url} className={props.btnClass}>{props.buttonText}</a>





















